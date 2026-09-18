(() => {
'use strict';
const $ = id => document.getElementById('gp-' + id);
const status = (message, error=false) => { $('status').textContent=message; $('status').classList.toggle('gp-error',error); };
if (!window.L) {status('The map library could not load. Check your internet connection and reload.',true);return;}
const map=L.map('gp-map',{preferCanvas:true,worldCopyJump:true}).setView([24,15],2);
const layers={
 street:L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),
 satellite:L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{maxZoom:19,attribution:'Tiles &copy; Esri — Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community'})
};
layers.street.addTo(map); L.control.scale().addTo(map);
let tileWarning=false;
Object.values(layers).forEach(layer=>layer.on('tileerror',()=>{if(!tileWarning){status('Some background tiles could not load. Try the other map layer; GPX data is still available.',true);tileWarning=true;}}));
$('basemap').onchange=()=>{Object.values(layers).forEach(l=>map.removeLayer(l));layers[$('basemap').value].addTo(map);tileWarning=false;};
const drawn=L.featureGroup().addTo(map), palette=['#2563eb','#e11d48','#059669','#9333ea','#d97706','#0891b2'];
let files=[],nextId=0,busy=false,selected=[],selection='',cursor=null,locationMarker=null,timer=null,playIndex=0;
const child=(el,name)=>Array.from(el.children).filter(e=>e.localName===name);
const content=(el,name)=>child(el,name)[0]?.textContent.trim() || '';
const numeric=s=>s!==null && s.trim()!=='' && Number.isFinite(Number(s)) ? Number(s):null;
const rad=x=>x*Math.PI/180;
function distance(a,b){const h=Math.sin(rad(b.lat-a.lat)/2)**2+Math.cos(rad(a.lat))*Math.cos(rad(b.lat))*Math.sin(rad(b.lon-a.lon)/2)**2;return 6371008.8*2*Math.atan2(Math.sqrt(Math.min(1,h)),Math.sqrt(Math.max(0,1-h)));}
function parseGPX(text,name){
 if(/<!DOCTYPE|<!ENTITY/i.test(text))throw Error('DOCTYPE and entity declarations are not supported.');
 const doc=new DOMParser().parseFromString(text,'application/xml');
 if(doc.getElementsByTagName('parsererror').length || doc.documentElement.localName!=='gpx')throw Error('Invalid GPX XML.');
 const root=doc.documentElement,segments=[],waypoints=[];let rejected=0,count=0;
 function point(el){
  const lat=numeric(el.getAttribute('lat')),lon=numeric(el.getAttribute('lon'));
  if(lat===null||lon===null||lat < -90||lat>90||lon < -180||lon>180){rejected++;return null;}
  count++; if(count>100000)throw Error('Maximum 100,000 points per session.');
  const time=content(el,'time'),parsed=time ? Date.parse(time):NaN;
  return {lat,lon,ele:numeric(content(el,'ele')),time:Number.isFinite(parsed)?new Date(parsed).toISOString():null,ms:Number.isFinite(parsed)?parsed:null,name:content(el,'name'),description:content(el,'desc')};
 }
 function split(nodes,type,label){let pts=[],part=1;const commit=()=>{if(pts.length){segments.push({type,name:label+(part>1?' / part '+part:''),points:pts});pts=[];part++;}};nodes.forEach(el=>{const p=point(el);if(p)pts.push(p);else commit();});commit();}
 child(root,'trk').forEach((trk,i)=>child(trk,'trkseg').forEach((seg,j)=>split(child(seg,'trkpt'),'track',(content(trk,'name')||'Track '+(i+1))+' / segment '+(j+1))));
 child(root,'rte').forEach((rte,i)=>split(child(rte,'rtept'),'route',content(rte,'name')||'Route '+(i+1)));
 child(root,'wpt').forEach(el=>{const p=point(el);if(p)waypoints.push(p);});
 if(!count)throw Error('No valid tracks, routes or waypoints found.');
 return {id:++nextId,name,segments,waypoints,count,rejected,visible:true,color:palette[files.length%palette.length]};
}
function visibleSegments(){return files.filter(f=>f.visible).flatMap(f=>f.segments.filter(s=>$(s.type==='track'?'tracks':'routes').checked).map((s,i)=>({f,s,key:f.id+':'+f.segments.indexOf(s)})));}
function visibleWaypoints(){return $('waypoints').checked ? files.filter(f=>f.visible).flatMap(f=>f.waypoints.map(p=>({f,p}))) : [];}
const imperial=()=>$('units').value==='imperial';
const distText=n=>(n/(imperial()?1609.344:1000)).toLocaleString(undefined,{maximumFractionDigits:2})+(imperial()?' mi':' km');
const eleText=n=>n===null?'—':(n*(imperial()?3.280839895:1)).toLocaleString(undefined,{maximumFractionDigits:0})+(imperial()?' ft':' m');
const speedText=n=>(n*(imperial()?2.236936292:3.6)).toFixed(1)+(imperial()?' mph':' km/h');
const duration=n=>`${Math.floor(n/3600)}h ${Math.floor(n%3600/60)}m ${Math.floor(n%60)}s`;
function details(p,title){const div=document.createElement('div');const strong=document.createElement('strong');strong.textContent=title||p.name||'GPS point';div.append(strong);const d=document.createElement('div');d.textContent=`${p.lat.toFixed(6)}, ${p.lon.toFixed(6)} • ${eleText(p.ele)}${p.time?' • '+p.time:''}${p.description?' • '+p.description:''}`;div.append(d);return div;}
const icon=(letter,color)=>L.divIcon({className:'gp-marker',html:letter,iconSize:[26,26],iconAnchor:[13,13]});
function stop(){if(timer)clearInterval(timer);timer=null;$('play').textContent='Play';}
function render(){
 stop();drawn.clearLayers();if(cursor){map.removeLayer(cursor);cursor=null;}
 const segments=visibleSegments(),waypoints=visibleWaypoints();
 let total=0,gain=0,loss=0,min=Infinity,max=-Infinity,timed=0,moving=0,timedDistance=0,points=0,elePairs=0,timePairs=0,pairs=0,maxSpeed=0;
 segments.forEach(({f,s})=>{
  const coords=s.points.map(p=>[p.lat,p.lon]);
  if(coords.length>1)L.polyline(coords,{color:f.color,weight:Number($('width').value),dashArray:s.type==='route'?'8 6':null}).bindPopup(()=>{const d=document.createElement('div');d.textContent=f.name+' — '+s.name;return d;}).addTo(drawn);
  else L.circleMarker(coords[0],{radius:5,color:f.color}).bindPopup(details(s.points[0],s.name)).addTo(drawn);
  if($('endpoints').checked){[0,s.points.length-1].forEach((j,k)=>{if(k&&j===0)return;L.marker(coords[j],{icon:icon(k?'E':'S',f.color)}).bindPopup(details(s.points[j],(k?'End: ':'Start: ')+s.name)).addTo(drawn);});}
  s.points.forEach((p,i)=>{points++;if(p.ele!==null){min=Math.min(min,p.ele);max=Math.max(max,p.ele);}if(!i)return;pairs++;const prev=s.points[i-1],d=distance(prev,p);total+=d;
   if(p.ele!==null&&prev.ele!==null){const diff=p.ele-prev.ele;gain+=Math.max(0,diff);loss+=Math.max(0,-diff);elePairs++;}
   if(p.ms!==null&&prev.ms!==null&&p.ms>prev.ms){const dt=(p.ms-prev.ms)/1000;timed+=dt;timedDistance+=d;timePairs++;maxSpeed=Math.max(maxSpeed,d/dt);if(d/dt>=1/3.6)moving+=dt;}
  });
 });
 waypoints.forEach(({f,p})=>L.circleMarker([p.lat,p.lon],{radius:6,color:f.color,fillOpacity:.8,weight:2}).bindPopup(details(p,p.name||'Waypoint')).addTo(drawn));
 const partialTime=timePairs<pairs?' (partial)':'',partialEle=elePairs<pairs?' (partial)':'';
 const stats=[['Distance',points?distText(total):'—'],['Elevation gain'+partialEle,elePairs?eleText(gain):'—'],['Elevation loss'+partialEle,elePairs?eleText(loss):'—'],['Min / max elevation',min<Infinity?eleText(min)+' / '+eleText(max):'—'],['Timed duration'+partialTime,timePairs?duration(timed):'—'],['Moving time'+partialTime,timePairs?duration(moving):'—'],['Average / max speed'+partialTime,timePairs?speedText(timedDistance/timed)+' / '+speedText(maxSpeed):'—'],['Points / waypoints',points.toLocaleString()+' / '+waypoints.length.toLocaleString()]];
 $('stats').replaceChildren();stats.forEach(([label,value])=>{const d=document.createElement('div');d.className='gp-stat';const s=document.createElement('strong'),l=document.createElement('span');s.textContent=value;l.textContent=label;d.append(s,l);$('stats').append(d);});
 renderFiles();
 $('segment').replaceChildren();segments.forEach(({f,s,key})=>{const o=new Option(f.name+' · '+s.name,key);$('segment').add(o);});
 if(segments.some(s=>s.key===selection))$('segment').value=selection;
 selectSegment();renderWaypoints(waypoints);
 ['export-gpx','export-json','export-csv','export-png','fit'].forEach(id=>$(id).disabled=!segments.length&&!waypoints.length);
}
function renderFiles(){
 $('files').replaceChildren();if(!files.length){$('files').textContent='No GPX files loaded yet.';return;}
 files.forEach(f=>{const row=document.createElement('div');row.className='gp-file';const toggle=document.createElement('input');toggle.type='checkbox';toggle.checked=f.visible;toggle.setAttribute('aria-label','Show '+f.name);toggle.onchange=()=>{f.visible=toggle.checked;render();};const label=document.createElement('label');label.textContent=f.name;const meta=document.createElement('small');meta.textContent=f.count.toLocaleString()+' points · '+f.segments.length+' segments';label.append(meta);const color=document.createElement('input');color.type='color';color.value=f.color;color.setAttribute('aria-label','Color for '+f.name);color.onchange=()=>{f.color=color.value;render();};const remove=document.createElement('button');remove.type='button';remove.textContent='Remove';remove.setAttribute('aria-label','Remove '+f.name);remove.onclick=()=>{files=files.filter(x=>x.id!==f.id);render();};row.append(toggle,color,label,remove);$('files').append(row);});
}
function renderWaypoints(wpts){$('waypoint-table').replaceChildren();wpts.slice(0,500).forEach(({p})=>{const tr=document.createElement('tr');[p.name||'Unnamed waypoint',p.lat.toFixed(6),p.lon.toFixed(6),eleText(p.ele)].forEach(t=>{const td=document.createElement('td');td.textContent=t;tr.append(td);});const td=document.createElement('td'),b=document.createElement('button');b.type='button';b.textContent='View';b.onclick=()=>{map.setView([p.lat,p.lon],15);L.popup().setLatLng([p.lat,p.lon]).setContent(details(p)).openOn(map);$('map').scrollIntoView({behavior:'smooth',block:'center'});};td.append(b);tr.append(td);$('waypoint-table').append(tr);});$('waypoint-note').textContent=wpts.length>500?'Showing the first 500 waypoints. Exports include all visible waypoints.':wpts.length+' visible waypoints.';}
function fit(){if(drawn.getBounds().isValid())map.fitBounds(drawn.getBounds(),{padding:[45,45],maxZoom:16});}
$('fit').onclick=fit;
async function importFiles(list){
 if(busy)return;busy=true;$('upload').disabled=true;$('demo').disabled=true;let accepted=0,errors=[],skipped=0;
 try {for(const file of Array.from(list)){
  if(files.length>=10){errors.push('Maximum 10 files. Remove a file first.');break;}
  if(!/\.gpx$/i.test(file.name)){errors.push(file.name+': choose a .gpx file.');continue;}
  if(file.size>10*1024*1024){errors.push(file.name+': exceeds 10 MB.');continue;}
  status('Reading '+file.name+'…');await new Promise(r=>setTimeout(r,0));
  try{const f=parseGPX(await file.text(),file.name);if(files.reduce((n,x)=>n+x.count,0)+f.count>100000)throw Error('Total point limit is 100,000.');files.push(f);accepted++;skipped+=f.rejected;}catch(e){errors.push(file.name+': '+e.message);}
 }}finally{busy=false;$('upload').disabled=false;$('demo').disabled=false;$('input').value='';render();if(accepted)fit();status(`${accepted} file(s) loaded.${skipped?' '+skipped+' invalid point(s) skipped; gaps kept separate.':''}${errors.length?' '+errors.join(' '):''}`,!!errors.length);}
}
$('upload').onclick=()=>$('input').click();$('input').onchange=e=>importFiles(e.target.files);
['dragenter','dragover'].forEach(event=>$('drop').addEventListener(event,e=>{e.preventDefault();$('drop').classList.add('gp-drag');}));
['dragleave','drop'].forEach(event=>$('drop').addEventListener(event,e=>{e.preventDefault();$('drop').classList.remove('gp-drag');}));$('drop').addEventListener('drop',e=>importFiles(e.dataTransfer.files));
['tracks','routes','waypoints','endpoints','units','width'].forEach(id=>$(id).addEventListener('change',render));
$('clear').onclick=()=>{files=[];selection='';if(locationMarker){map.removeLayer(locationMarker);locationMarker=null;}render();status('All files cleared.');};
map.on('mousemove',e=>{$('coords').textContent=e.latlng.lat.toFixed(5)+', '+e.latlng.lng.toFixed(5);});
map.on('click',e=>{const p={lat:e.latlng.lat,lon:e.latlng.wrap().lng,ele:null};L.popup().setLatLng(e.latlng).setContent(details(p,'Map coordinates')).openOn(map);});
$('locate').onclick=()=>{if(!navigator.geolocation){status('Location is unavailable in this browser.',true);return;}status('Requesting your location…');navigator.geolocation.getCurrentPosition(p=>{if(locationMarker)map.removeLayer(locationMarker);locationMarker=L.circle([p.coords.latitude,p.coords.longitude],{radius:p.coords.accuracy,color:'#0284c7',fillOpacity:.12}).addTo(map);map.setView([p.coords.latitude,p.coords.longitude],14);status('Location shown. Approximate accuracy: '+Math.round(p.coords.accuracy)+' m.');},()=>status('Location could not be obtained. Check site permissions and use HTTPS.',true),{timeout:12000,enableHighAccuracy:true});};
function resizeMap(){setTimeout(()=>map.invalidateSize(),100);}
$('fullscreen').onclick=async()=>{const shell=$('map-shell');if(document.fullscreenElement){await document.exitFullscreen();}else if(shell.classList.contains('gp-expanded')){shell.classList.remove('gp-expanded');}else{try{if(!shell.requestFullscreen)throw Error();await shell.requestFullscreen();}catch{shell.classList.add('gp-expanded');}}$('fullscreen').textContent=(document.fullscreenElement||shell.classList.contains('gp-expanded'))?'Exit full screen':'Full screen';resizeMap();};
document.addEventListener('fullscreenchange',()=>{$('fullscreen').textContent=document.fullscreenElement?'Exit full screen':'Full screen';resizeMap();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){$('map-shell').classList.remove('gp-expanded');$('fullscreen').textContent='Full screen';resizeMap();}});
let cumulative=[],plot={};
function selectSegment(){stop();selection=$('segment').value;selected=visibleSegments().find(x=>x.key===selection)?.s.points||[];cumulative=[];let d=0;selected.forEach((p,i)=>{if(i)d+=distance(selected[i-1],p);cumulative.push(d);});$('scrub').max=Math.max(0,selected.length-1);$('scrub').value=0;$('scrub').disabled=!selected.length;$('play').disabled=selected.length<2;playIndex=0;drawProfile();if(selected.length)inspect(0,false);else{$('point').textContent='No visible track or route selected.';if(cursor){map.removeLayer(cursor);cursor=null;}}}
$('segment').onchange=selectSegment;
function drawProfile(){
 const c=$('profile'),w=c.clientWidth||600,h=210,dpr=window.devicePixelRatio||1;c.width=w*dpr;c.height=h*dpr;const ctx=c.getContext('2d');ctx.scale(dpr,dpr);ctx.clearRect(0,0,w,h);ctx.font='12px sans-serif';ctx.fillStyle='#52657d';
 let min=Infinity,max=-Infinity;selected.forEach(p=>{if(p.ele!==null){min=Math.min(min,p.ele);max=Math.max(max,p.ele);}});
 if(min===Infinity){ctx.fillText('No elevation data in the selected segment.',18,90);plot={};return;}
 const lo=min-5,hi=max+5,left=62,right=w-12,top=22,bottom=175,total=cumulative.at(-1)||1;
 plot={left,right,total};const x=i=>left+cumulative[i]/total*(right-left),y=e=>bottom-(e-lo)/(hi-lo)*(bottom-top);
 ctx.strokeStyle='#e2e8f0';for(let i=0;i<4;i++){const yy=top+i*(bottom-top)/3;ctx.beginPath();ctx.moveTo(left,yy);ctx.lineTo(right,yy);ctx.stroke();ctx.fillText(eleText(hi-i*(hi-lo)/3),2,yy+4);}
 ctx.fillText('0',left,198);ctx.textAlign='right';ctx.fillText(distText(cumulative.at(-1)||0),right,198);ctx.textAlign='left';ctx.strokeStyle='#2563eb';ctx.lineWidth=2;ctx.beginPath();let open=false;
 selected.forEach((p,i)=>{if(p.ele===null){open=false;return;}if(open)ctx.lineTo(x(i),y(p.ele));else ctx.moveTo(x(i),y(p.ele));open=true;});ctx.stroke();
 if(selected.length===1&&selected[0].ele!==null){ctx.fillStyle='#2563eb';ctx.beginPath();ctx.arc(x(0),y(selected[0].ele),4,0,Math.PI*2);ctx.fill();}
}
function inspect(index,pan=false){const p=selected[index];if(!p)return;playIndex=index;$('scrub').value=index;$('point').textContent=`Point ${(index+1).toLocaleString()} / ${selected.length.toLocaleString()} · ${distText(cumulative[index])} · ${p.lat.toFixed(6)}, ${p.lon.toFixed(6)} · Elevation ${eleText(p.ele)}${p.time?' · '+p.time:''}`;if(!cursor)cursor=L.circleMarker([p.lat,p.lon],{radius:7,color:'#fff',weight:3,fillColor:'#f97316',fillOpacity:1}).addTo(map);else cursor.setLatLng([p.lat,p.lon]);if(pan&&!map.getBounds().contains([p.lat,p.lon]))map.panTo([p.lat,p.lon],{animate:false});}
$('scrub').oninput=()=>{stop();inspect(Number($('scrub').value),true);};
$('profile').onpointermove=e=>{if(!plot.total||!selected.length)return;const pos=e.clientX-$('profile').getBoundingClientRect().left,target=Math.max(0,Math.min(1,(pos-plot.left)/(plot.right-plot.left)))*plot.total;let low=0,high=cumulative.length-1;while(low<high){const mid=(low+high)>>1;if(cumulative[mid]<target)low=mid+1;else high=mid;}stop();inspect(low);};
$('play').onclick=()=>{if(timer){stop();return;}if(playIndex>=selected.length-1)playIndex=0;$('play').textContent='Pause';let fractional=playIndex;timer=setInterval(()=>{fractional+=Number($('speed').value)/10;inspect(Math.min(selected.length-1,Math.floor(fractional)),true);if(playIndex>=selected.length-1)stop();},100);};
new ResizeObserver(()=>{map.invalidateSize();drawProfile();}).observe($('map'));
window.addEventListener('resize',drawProfile);
function download(data,type,name){const blob=data instanceof Blob?data:new Blob([data],{type}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
const escapeXML=s=>String(s).replace(/[<>&"']/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]));
function pointXML(p,tag){return `<${tag} lat="${p.lat}" lon="${p.lon}">${p.ele!==null?'<ele>'+p.ele+'</ele>':''}${p.time?'<time>'+p.time+'</time>':''}${p.name?'<name>'+escapeXML(p.name)+'</name>':''}${p.description?'<desc>'+escapeXML(p.description)+'</desc>':''}</${tag}>`;}
$('export-gpx').onclick=()=>{
 const seg=visibleSegments();let xml='<?xml version="1.0" encoding="UTF-8"?>\n<gpx version="1.1" creator="EasyCalculator" xmlns="http://www.topografix.com/GPX/1/1">';
 xml+=visibleWaypoints().map(({p})=>pointXML(p,'wpt')).join('');
 seg.filter(x=>x.s.type==='route').forEach(({s})=>{xml+='<rte><name>'+escapeXML(s.name)+'</name>'+s.points.map(p=>pointXML(p,'rtept')).join('')+'</rte>';});
 seg.filter(x=>x.s.type==='track').forEach(({s})=>{xml+='<trk><name>'+escapeXML(s.name)+'</name><trkseg>'+s.points.map(p=>pointXML(p,'trkpt')).join('')+'</trkseg></trk>';});
 download(xml+'</gpx>','application/gpx+xml','easycalculator-tracks.gpx');
};
const coordinate=p=>p.ele===null?[p.lon,p.lat]:[p.lon,p.lat,p.ele];
$('export-json').onclick=()=>{const features=visibleSegments().map(({f,s})=>({type:'Feature',properties:{file:f.name,name:s.name,type:s.type,times:s.points.map(p=>p.time)},geometry:s.points.length>1?{type:'LineString',coordinates:s.points.map(coordinate)}:{type:'Point',coordinates:coordinate(s.points[0])}}));visibleWaypoints().forEach(({f,p})=>features.push({type:'Feature',properties:{file:f.name,name:p.name,type:'waypoint',time:p.time,description:p.description},geometry:{type:'Point',coordinates:coordinate(p)}}));download(JSON.stringify({type:'FeatureCollection',features},null,2),'application/geo+json','easycalculator-tracks.geojson');};
$('export-csv').onclick=()=>{const rows=[['file','type','segment','point','name','latitude','longitude','elevation_m','time_utc']];visibleSegments().forEach(({f,s})=>s.points.forEach((p,i)=>rows.push([f.name,s.type,s.name,i+1,p.name,p.lat,p.lon,p.ele??'',p.time??''])));visibleWaypoints().forEach(({f,p},i)=>rows.push([f.name,'waypoint','',i+1,p.name,p.lat,p.lon,p.ele??'',p.time??'']));const cell=v=>{let s=String(v);if(typeof v==='string'&&/^[\s]*[=+@-]/.test(s))s="'"+s;return '"'+s.replace(/"/g,'""')+'"';};download('\uFEFF'+rows.map(r=>r.map(cell).join(',')).join('\r\n'),'text/csv;charset=utf-8','easycalculator-points.csv');};
$('export-png').onclick=()=>{const c=document.createElement('canvas');c.width=1600;c.height=1000;const ctx=c.getContext('2d');ctx.fillStyle='#f8fafc';ctx.fillRect(0,0,c.width,c.height);const seg=visibleSegments(),wpts=visibleWaypoints(),all=seg.flatMap(({s})=>s.points).concat(wpts.map(x=>x.p));if(!all.length)return;let minX=Infinity,maxX=-Infinity,minY=Infinity,maxY=-Infinity;const project=p=>map.options.crs.project(L.latLng(p.lat, p.lon));all.forEach(p=>{const q=project(p);minX=Math.min(minX,q.x);maxX=Math.max(maxX,q.x);minY=Math.min(minY,q.y);maxY=Math.max(maxY,q.y);});const scale=Math.min(1460/Math.max(1,maxX-minX),790/Math.max(1,maxY-minY));const xy=p=>{const q=project(p);return [800+(q.x-(minX+maxX)/2)*scale,530-(q.y-(minY+maxY)/2)*scale];};seg.forEach(({f,s})=>{ctx.strokeStyle=f.color;ctx.fillStyle=f.color;ctx.lineWidth=4;ctx.beginPath();s.points.forEach((p,i)=>{const [x,y]=xy(p);if(i)ctx.lineTo(x,y);else ctx.moveTo(x,y);});ctx.stroke();if(s.points.length===1){const [x,y]=xy(s.points[0]);ctx.beginPath();ctx.arc(x,y,5,0,Math.PI*2);ctx.fill();}});wpts.forEach(({f,p})=>{ctx.fillStyle=f.color;ctx.beginPath();ctx.arc(...xy(p),6,0,Math.PI*2);ctx.fill();});ctx.fillStyle='#172b4d';ctx.font='bold 32px sans-serif';ctx.fillText('GPX Route • EasyCalculator.org',50,60);ctx.font='18px sans-serif';ctx.fillText('Route diagram • No background map imagery • '+seg.length+' segments, '+wpts.length+' waypoints',50,96);c.toBlob(blob=>{if(blob)download(blob,'image/png','easycalculator-route.png');});};
$('demo').onclick=()=>{let pts='';for(let i=0;i<150;i++){const a=i/149*Math.PI*1.75,lat=46.57+.018*Math.sin(a),lon=7.97+.03*Math.cos(a);pts+=`<trkpt lat="${lat}" lon="${lon}"><ele>${1300+180*Math.sin(i/35)+i*1.5}</ele><time>${new Date(Date.UTC(2026,0,1,8,0,i*30)).toISOString()}</time></trkpt>`;}const text=`<gpx version="1.1" creator="EasyCalculator" xmlns="http://www.topografix.com/GPX/1/1"><wpt lat="46.57" lon="8.0"><name>Demo start</name></wpt><trk><name>Illustrative alpine trail</name><trkseg>${pts}</trkseg></trk></gpx>`;importFiles([new File([text],'demo-trail.gpx',{type:'application/gpx+xml'})]);};
render();
})();
