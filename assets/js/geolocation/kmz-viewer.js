(() => {
'use strict';
const $=id=>document.getElementById('mz-'+id);
const status=(message,error=false)=>{$('status').textContent=message;$('status').classList.toggle('mz-error',error);};
if(!window.L||!window.JSZip){status('Map or ZIP library could not load. Check your connection and reload.',true);return;}
const children=(e,n)=>Array.from(e.children).filter(x=>x.localName===n);
const first=(e,n)=>children(e,n)[0];
const value=(e,n)=>e ? first(e,n)?.textContent.trim()||'' : '';
const num=s=>s!==undefined&&s!==null&&String(s).trim()!==''&&Number.isFinite(Number(s))?Number(s):null;
const textOnly=s=>{const template=document.createElement('template');template.innerHTML=s;return template.content.textContent.trim();};
const radians=x=>x*Math.PI/180;
function meters(a,b){const h=Math.sin(radians(b[1]-a[1])/2)**2+Math.cos(radians(a[1]))*Math.cos(radians(b[1]))*Math.sin(radians(b[0]-a[0])/2)**2;return 12742017.6*Math.atan2(Math.sqrt(Math.min(1,h)),Math.sqrt(Math.max(0,1-h)));}
const length=c=>c.reduce((n,p,i)=>n+(i?meters(c[i-1],p):0),0);
function ringArea(c){let sum=0;for(let i=0;i<c.length-1;i++){let delta=radians(c[i+1][0]-c[i][0]);if(delta>Math.PI)delta-=2*Math.PI;if(delta < -Math.PI)delta+=2*Math.PI;sum+=delta*(2+Math.sin(radians(c[i][1]))+Math.sin(radians(c[i+1][1])));}return Math.abs(sum*6371008.8**2/2);}
function area(g){return g.type==='Polygon'?Math.max(0,ringArea(g.coordinates[0])-g.coordinates.slice(1).reduce((n,r)=>n+ringArea(r),0)):0;}
const vertices=g=>g.type==='Point'?[g.coordinates]:g.type==='Polygon'?g.coordinates.flat():g.coordinates;
function kmlColor(raw){if(!/^[a-f0-9]{8}$/i.test(raw))return null;return {color:'#'+raw.slice(6,8)+raw.slice(4,6)+raw.slice(2,4),opacity:parseInt(raw.slice(0,2),16)/255};}
function parseKML(source,name,id){
 if(/<!DOCTYPE|<!ENTITY/i.test(source))throw Error('DOCTYPE and entity declarations are not supported.');
 const doc=new DOMParser().parseFromString(source,'application/xml');
 if(doc.getElementsByTagName('parsererror').length||doc.documentElement.localName!=='kml')throw Error('Invalid KML XML or missing kml root.');
 const all=Array.from(doc.getElementsByTagName('*')),styles=new Map(),warnings=new Set(),features=[];let count=0,folderId=0;
 const unsupported=['NetworkLink','GroundOverlay','ScreenOverlay','PhotoOverlay','Model','Tour'];
 all.forEach(e=>{if(['Style','StyleMap'].includes(e.localName)&&e.getAttribute('id'))styles.set(e.getAttribute('id'),e);if(unsupported.includes(e.localName))warnings.add(e.localName+' not rendered');});
 function style(el,seen=new Set()){
  if(!el)return {};
  if(el.localName==='StyleMap'){const pair=children(el,'Pair').find(p=>value(p,'key')==='normal');return pair?{...reference(value(pair,'styleUrl'),seen),...style(first(pair,'Style'),seen)}:{};}
  const out={},line=first(el,'LineStyle'),poly=first(el,'PolyStyle'),icon=first(el,'IconStyle');
  if(line){const c=kmlColor(value(line,'color'));if(c){out.color=c.color;out.opacity=c.opacity;}const w=num(value(line,'width'));if(w!==null)out.weight=Math.max(0,Math.min(15,w));}
  if(poly){const c=kmlColor(value(poly,'color'));if(c){out.fillColor=c.color;out.fillOpacity=c.opacity;}if(value(poly,'fill')==='0')out.fill=false;if(value(poly,'outline')==='0')out.stroke=false;}
  if(icon){const c=kmlColor(value(icon,'color'));if(c){out.pointColor=c.color;out.pointOpacity=c.opacity;}if(first(icon,'Icon'))warnings.add('External/custom icons shown as circles');}
  return out;
 }
 function reference(url,seen=new Set()){if(!url)return {};if(!url.startsWith('#')){warnings.add('External styles not loaded');return {};}if(seen.has(url))return {};seen.add(url);return style(styles.get(url.slice(1)),seen);}
 function coord(raw,space=false){const a=raw.trim().split(space?/\s+/:/,/).map(num);if(a.length<2||a[0]===null||a[1]===null||a[0]<-180||a[0]>180||a[1]<-90||a[1]>90)return null;return a[2]!==null&&a[2]!==undefined?[a[0],a[1],a[2]]:[a[0],a[1]];}
 function coords(e){const raw=value(e,'coordinates');return raw?raw.trim().split(/\s+/).map(x=>coord(x)):[];}
 function ring(e){const r=coords(e);if(r.length<3||r.some(p=>!p))return null;const a=r[0],b=r.at(-1);if(a[0]!==b[0]||a[1]!==b[1])r.push([...a]);if(new Set(r.map(p=>p.slice(0,2).join(','))).size<3)return null;return r;}
 function geometries(e,out=[]){
  if(!e)return out;
  if(e.localName==='Point'){const c=coords(e);if(c.length===1&&c[0])out.push({type:'Point',coordinates:c[0],mode:value(e,'altitudeMode')||'clampToGround'});else warnings.add('Invalid Point skipped');}
  else if(['LineString','Track'].includes(e.localName)){
   const c=e.localName==='Track'?children(e,'coord').map(x=>coord(x.textContent,true)):coords(e);let part=[];const push=()=>{if(part.length>=2)out.push({type:'LineString',coordinates:part,mode:value(e,'altitudeMode')||'clampToGround'});else if(part.length)warnings.add('Line with fewer than 2 coordinates skipped');part=[];};c.forEach(p=>{if(p)part.push(p);else{warnings.add('Invalid line coordinates split into separate parts');push();}});push();if(e.localName==='Track')warnings.add('gx:Track displayed as line; time animation omitted');
  }else if(e.localName==='Polygon'){
   const outer=first(first(e,'outerBoundaryIs')||e,'LinearRing');const holes=children(e,'innerBoundaryIs').map(x=>ring(first(x,'LinearRing')||x));const r=outer?ring(outer):null;if(r&&holes.every(Boolean))out.push({type:'Polygon',coordinates:[r,...holes],mode:value(e,'altitudeMode')||'clampToGround'});else warnings.add('Polygon with invalid ring skipped');
  }else if(['MultiGeometry','MultiTrack'].includes(e.localName))Array.from(e.children).forEach(x=>geometries(x,out));
  return out;
 }
 const folders=[];
 function walk(e,path=[],ancestry=[],shown=true){
  const visible=shown&&value(e,'visibility')!=='0';let nextPath=path,nextAnc=ancestry;
  if(['Folder','Document'].includes(e.localName)){const label=value(e,'name')||e.localName,key=id+'-folder-'+(++folderId);nextPath=[...path,label];nextAnc=[...ancestry,key];folders.push({key,name:nextPath.join(' / '),visible:value(e,'visibility')!=='0'});}
  if(e.localName==='Placemark'){
   const geoms=[];Array.from(e.children).forEach(x=>geometries(x,geoms));const props=Object.create(null),extended=first(e,'ExtendedData');
   if(extended){Array.from(extended.getElementsByTagName('*')).forEach(x=>{if(x.localName==='Data')props[x.getAttribute('name')||'value']=value(x,'value');if(x.localName==='SimpleData')props[x.getAttribute('name')||'value']=x.textContent.trim();});}
   const presentation={...reference(value(e,'styleUrl')),...style(first(e,'Style'))};
   geoms.forEach((g,i)=>{count+=vertices(g).length;if(count>100000||features.length>=5000)throw Error('File exceeds 100,000 coordinates or 5,000 geometry parts.');features.push({key:id+'-'+features.length,name:(value(e,'name')||'Unnamed placemark')+(geoms.length>1?' / part '+(i+1):''),description:textOnly(value(e,'description')),folder:path.join(' / '),ancestors:[...ancestry],visible:value(e,'visibility')!=='0',geometry:g,style:presentation,properties:props});});
  }else Array.from(e.children).filter(x=>['Document','Folder','Placemark'].includes(x.localName)).forEach(x=>walk(x,nextPath,nextAnc,visible));
 }
 walk(doc.documentElement);if(!features.length)throw Error('No supported valid geometry found.'+(warnings.size?' '+[...warnings].join('; '):''));
 return {id,name,features,folders,count,visible:true,color:['#2563eb','#e11d48','#059669','#9333ea','#d97706'][id%5],warnings:[...warnings]};
}
const map=L.map('mz-map',{preferCanvas:true,worldCopyJump:true}).setView([24,15],2),drawn=L.featureGroup().addTo(map);
const bases={street:L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),satellite:L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{maxZoom:19,attribution:'Tiles &copy; Esri — Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community'})};
bases.street.addTo(map);L.control.scale().addTo(map);let tileWarn=false;
Object.values(bases).forEach(l=>l.on('tileerror',()=>{if(!tileWarn){status('Some map tiles did not load. Try the other background layer.',true);tileWarn=true;}}));
$('basemap').onchange=()=>{Object.values(bases).forEach(l=>map.removeLayer(l));bases[$('basemap').value].addTo(map);tileWarn=false;};
let files=[],nextId=0,busy=false,page=0,current=null,locationMarker=null;const featureLayers=new Map();
const typeToggle=g=>g.type==='Point'?'points':g.type==='Polygon'?'polygons':'lines';
const rows=()=>files.flatMap(f=>f.features.map(x=>({f,x})));
function visible(f,x){return f.visible&&x.visible&&x.ancestors.every(k=>f.folders.find(d=>d.key===k)?.visible!==false)&&$(typeToggle(x.geometry)).checked;}
const active=()=>rows().filter(({f,x})=>visible(f,x));
const imperial=()=>$('units').value==='imperial';
const fmt=(n,d=2)=>n.toLocaleString(undefined,{maximumFractionDigits:d});
const distanceText=n=>fmt(n/(imperial()?1609.344:1000))+(imperial()?' mi':' km');
const areaText=n=>fmt(n/(imperial()?2589988.110336:1000000),4)+(imperial()?' mi²':' km²');
function node(tag,text){const e=document.createElement(tag);if(text!==undefined)e.textContent=text;return e;}
function presentation(f,x){const opts={bubblingMouseEvents:false,color:f.color,weight:4,opacity:1,fillColor:f.color,fillOpacity:.22,fill:true,stroke:true,...($('styles').checked?x.style:{})};if(x.geometry.type==='LineString'){opts.stroke=true;opts.fill=false;}if(x.geometry.type==='Point'){opts.stroke=true;opts.fill=true;opts.radius=7;opts.fillColor=opts.pointColor||opts.color;opts.color=opts.pointColor||opts.color;opts.fillOpacity=opts.pointOpacity??.85;opts.weight=2;}return opts;}
function inspector(f,x){current=x.key;const div=$('detail');div.replaceChildren(node('h3',x.name));const props=[['File',f.name],['Folder',x.folder||'Root'],['Geometry',x.geometry.type],['Coordinates',vertices(x.geometry).length.toLocaleString()],['Altitude mode',x.geometry.mode]];
 if(x.geometry.type==='LineString')props.push(['Length',distanceText(length(x.geometry.coordinates))]);
 if(x.geometry.type==='Polygon')props.push(['Area',areaText(area(x.geometry))],['Boundary length',distanceText(x.geometry.coordinates.reduce((n,r)=>n+length(r),0))]);
 if(x.geometry.type==='Point'){props.push(['Longitude',String(x.geometry.coordinates[0])],['Latitude',String(x.geometry.coordinates[1])]);}
 const alts=vertices(x.geometry).filter(c=>c.length>2).map(c=>c[2]);if(alts.length){let min=Infinity,max=-Infinity;alts.forEach(a=>{min=Math.min(min,a);max=Math.max(max,a);});props.push(['Stored altitude range',fmt(min)+'–'+fmt(max)+' m']);}
 if(x.description)div.append(node('p',x.description));const dl=node('dl');props.concat(Object.entries(x.properties)).forEach(([k,v])=>{dl.append(node('dt',k),node('dd',v));});div.append(dl);if(!visible(f,x))div.append(node('p','This feature is currently hidden.'));
}
function render(){
 drawn.clearLayers();featureLayers.clear();const list=active();let points=0,lines=0,polygons=0,totalLength=0,totalArea=0,count=0;
 list.forEach(({f,x})=>{const g=x.geometry,opts=presentation(f,x);count+=vertices(g).length;
 if(g.type==='Point')points++;else if(g.type==='LineString'){lines++;totalLength+=length(g.coordinates);}else{polygons++;totalArea+=area(g);}
 const group=L.geoJSON({type:'Feature',properties:{},geometry:{type:g.type,coordinates:g.coordinates}},{style:()=>opts,pointToLayer:(feature,ll)=>L.circleMarker(ll,opts)}).addTo(drawn);featureLayers.set(x.key,group);
 group.eachLayer(l=>{l.bindPopup(()=>{const d=node('div');d.append(node('strong',x.name),node('p',x.geometry.type+' · '+(x.folder||'Root')));return d;});l.on('click',()=>inspector(f,x));if($('labels').checked)l.bindTooltip(node('span',x.name),{permanent:true,direction:'top'});});
 });
 $('stats').replaceChildren();[['Points',points],['Lines',lines],['Polygons',polygons],['Coordinates',count],['Line length',distanceText(totalLength)],['Polygon area',areaText(totalArea)],['Visible parts',list.length],['KML documents',files.length]].forEach(([label,v])=>{const d=node('div');d.className='mz-stat';d.append(node('strong',typeof v==='number'?v.toLocaleString():v),node('span',label));$('stats').append(d);});
 renderFiles();renderTable();['fit','export-kmz','export-kml','export-json','export-csv','export-png'].forEach(id=>$(id).disabled=!list.length);
 const chosen=rows().find(({x})=>x.key===current);if(chosen)inspector(chosen.f,chosen.x);else{$('detail').textContent='Click a feature on the map or select View in the table below.';current=null;}
}
function renderFiles(){
 $('files').replaceChildren();if(!files.length){$('files').textContent='No KMZ documents loaded.';return;}
 files.forEach(f=>{const div=node('div'),row=node('div');row.className='mz-file';const c=node('input');c.type='checkbox';c.checked=f.visible;c.setAttribute('aria-label','Show '+f.name);c.onchange=()=>{f.visible=c.checked;render();};const label=node('label',f.name);label.append(node('small',f.features.length+' parts · '+f.count.toLocaleString()+' coordinates'));const color=node('input');color.type='color';color.value=f.color;color.setAttribute('aria-label','Color for '+f.name);color.onchange=()=>{f.color=color.value;render();};const remove=node('button','Remove');remove.type='button';remove.setAttribute('aria-label','Remove '+f.name);remove.onclick=()=>{files=files.filter(v=>v.id!==f.id);render();};row.append(c,color,label,remove);div.append(row);
 if(f.folders.length){const details=node('details'),summary=node('summary',f.folders.length+' folders');details.open=!!f.openFolders;details.ontoggle=()=>{f.openFolders=details.open;};details.append(summary);f.folders.forEach(folder=>{const l=node('label'),toggle=node('input');l.style.cssText='display:flex;gap:8px;align-items:center;margin:9px 0;overflow-wrap:anywhere';toggle.type='checkbox';toggle.checked=folder.visible;toggle.onchange=()=>{folder.visible=toggle.checked;render();};l.append(toggle,document.createTextNode(folder.name));details.append(l);});div.append(details);}
 if(f.warnings.length){const d=node('details');d.append(node('summary','Import notes ('+f.warnings.length+')'));const ul=node('ul');f.warnings.forEach(w=>ul.append(node('li',w)));d.append(ul);div.append(d);}$('files').append(div);
 });
}
function renderTable(){const q=$('search').value.trim().toLowerCase(),list=rows().filter(({f,x})=>(x.name+' '+x.folder+' '+f.name).toLowerCase().includes(q));page=Math.min(page,Math.max(0,Math.ceil(list.length/50)-1));$('table').replaceChildren();list.slice(page*50,page*50+50).forEach(({f,x})=>{const tr=node('tr'),td=node('td'),toggle=node('input');toggle.type='checkbox';toggle.checked=x.visible;toggle.setAttribute('aria-label','Show '+x.name);toggle.onchange=()=>{x.visible=toggle.checked;render();};td.append(toggle);tr.append(td);[x.name,x.geometry.type,x.folder||'Root',vertices(x.geometry).length].forEach(v=>tr.append(node('td',v)));const action=node('td'),b=node('button','View');b.type='button';b.onclick=()=>{inspector(f,x);const layer=featureLayers.get(x.key);if(layer){map.fitBounds(layer.getBounds(),{padding:[45,45],maxZoom:16});layer.eachLayer(l=>l.openPopup());}else status('Feature is hidden. Enable its file, folder, geometry type and checkbox to show it.');};action.append(b);tr.append(action);$('table').append(tr);});$('page-info').textContent=list.length?`Showing ${page*50+1}–${Math.min(list.length,page*50+50)} of ${list.length} matching parts`:'No matching features.';$('prev').disabled=page===0;$('next').disabled=(page+1)*50>=list.length;}
$('search').oninput=()=>{page=0;renderTable();};$('prev').onclick=()=>{page--;renderTable();};$('next').onclick=()=>{page++;renderTable();};
function fit(){const b=drawn.getBounds();if(b.isValid())map.fitBounds(b,{padding:[45,45],maxZoom:16});}$('fit').onclick=fit;
// Inspect the ZIP directory before extracting any content. ZIP64 and split archives are not supported.
function inspectZip(buffer){
 const d=new DataView(buffer),size=d.byteLength;let end=-1;
 for(let i=size-22;i>=Math.max(0,size-65557);i--)if(d.getUint32(i,true)===0x06054b50&&i+22+d.getUint16(i+20,true)===size){end=i;break;}
 if(end<0)throw Error('Invalid or incomplete KMZ ZIP archive.');
 const count=d.getUint16(end+10,true),directorySize=d.getUint32(end+12,true),offset=d.getUint32(end+16,true);
 if(d.getUint16(end+4,true)||d.getUint16(end+6,true)||d.getUint16(end+8,true)!==count)throw Error('Split archives are not supported.');
 if(count===65535||offset===0xffffffff||directorySize===0xffffffff)throw Error('ZIP64 archives are not supported.');
 if(count>1000||offset+directorySize>end)throw Error('Archive directory is too large or invalid.');
 let p=offset,total=0,kmlBytes=0;const entries=[],names=new Set();
 for(let i=0;i<count;i++){
  if(p+46>offset+directorySize||d.getUint32(p,true)!==0x02014b50)throw Error('Invalid archive directory.');
  const flags=d.getUint16(p+8,true),method=d.getUint16(p+10,true),compressed=d.getUint32(p+20,true),uncompressed=d.getUint32(p+24,true),n=d.getUint16(p+28,true),extra=d.getUint16(p+30,true),comment=d.getUint16(p+32,true),local=d.getUint32(p+42,true);
  if(p+46+n+extra+comment>offset+directorySize)throw Error('Invalid archive entry.');
  if(flags&1)throw Error('Password-protected KMZ files are not supported.');
  if(![0,8].includes(method))throw Error('Unsupported ZIP compression method.');
  if([compressed,uncompressed,local].includes(0xffffffff))throw Error('ZIP64 entries are not supported.');
  const name=new TextDecoder('utf-8',{fatal:false}).decode(new Uint8Array(buffer,p+46,n));
  if(name.includes('\0')||name.includes('\\')||name.startsWith('/')||/^[a-z]:/i.test(name)||name.split('/').includes('..'))throw Error('Unsafe archive path.');
  if(names.has(name))throw Error('Duplicate archive entry names are not supported.');names.add(name);
  if(local+30>offset||d.getUint32(local,true)!==0x04034b50)throw Error('Invalid local ZIP entry.');
  if(d.getUint16(local+6,true)&1)throw Error('Encrypted archive entry.');
  if(local+30+d.getUint16(local+26,true)+d.getUint16(local+28,true)+compressed>offset)throw Error('Invalid compressed data bounds.');
  total+=uncompressed;if(total>100*1024*1024)throw Error('Archive exceeds 100 MB uncompressed.');
  if(/\.kml$/i.test(name)){if(uncompressed>10*1024*1024)throw Error('A contained KML exceeds 10 MB.');kmlBytes+=uncompressed;if(kmlBytes>40*1024*1024)throw Error('Contained KML exceeds 40 MB in total.');}
  entries.push({name,size:uncompressed});p+=46+n+extra+comment;
 }
 if(p!==offset+directorySize)throw Error('Invalid archive directory length.');
 if(!entries.some(e=>/\.kml$/i.test(e.name)))throw Error('No KML document found inside this KMZ.');
 return entries;
}
function readLimited(entry,limit){return new Promise((resolve,reject)=>{let size=0,chunks=[],done=false;const stream=entry.internalStream('uint8array');const timer=setTimeout(()=>fail(Error('KML extraction timed out.')),15000);function fail(e){if(done)return;done=true;clearTimeout(timer);stream.pause();chunks=[];reject(e);}stream.on('data',chunk=>{if(done)return;size+=chunk.length;if(size>limit){fail(Error('Extracted KML exceeds its size limit.'));return;}chunks.push(chunk);}).on('error',fail).on('end',()=>{if(done)return;done=true;clearTimeout(timer);const bytes=new Uint8Array(size);let i=0;chunks.forEach(c=>{bytes.set(c,i);i+=c.length;});resolve(bytes);}).resume();});}
function decodeXML(bytes){let encoding='utf-8';if(bytes[0]===255&&bytes[1]===254)encoding='utf-16le';else if(bytes[0]===254&&bytes[1]===255)encoding='utf-16be';else if(bytes[0]===0&&bytes[1]===60)encoding='utf-16be';else if(bytes[0]===60&&bytes[1]===0)encoding='utf-16le';else{const header=new TextDecoder().decode(bytes.slice(0,200)),match=header.match(/<\?xml[^>]*encoding\s*=\s*["']([^"']+)/i);if(match)encoding=match[1];}try{return new TextDecoder(encoding,{fatal:true}).decode(bytes);}catch{throw Error('Unsupported or invalid XML text encoding.');}}
async function unpackKMZ(buffer){
 const entries=inspectZip(buffer),zip=await JSZip.loadAsync(buffer),documents=Object.values(zip.files).filter(e=>!e.dir&&/\.kml$/i.test(e.name));
 if(documents.length>10)throw Error('Maximum 10 KML documents per archive.');
 documents.sort((a,b)=>(a.name.toLowerCase()==='doc.kml'?-1:b.name.toLowerCase()==='doc.kml'?1:a.name.localeCompare(b.name)));
 const result=[];let extracted=0;
 for(const entry of documents){const bytes=await readLimited(entry,10*1024*1024);extracted+=bytes.length;if(extracted>40*1024*1024)throw Error('Extracted KML exceeds 40 MB.');result.push({name:entry.name,text:decodeXML(bytes)});}
 return {documents:result,assets:entries.filter(e=>!e.name.endsWith('/')&&!/\.kml$/i.test(e.name)).length};
}
async function importFiles(list){
 if(busy)return;busy=true;$('upload').disabled=true;$('demo').disabled=true;$('clear').disabled=true;let accepted=0,errors=[],notes=0;
 try{for(const file of Array.from(list)){
  if(files.length>=10){errors.push('Maximum 10 loaded KML documents. Remove a document first.');break;}
  if(!/\.kmz$/i.test(file.name)){errors.push(file.name+': choose a .kmz archive.');continue;}
  if(file.size>20*1024*1024){errors.push(file.name+': exceeds 20 MB.');continue;}
  status('Extracting '+file.name+'…');await new Promise(r=>setTimeout(r,0));
  try{const archive=await unpackKMZ(await file.arrayBuffer());if(files.length+archive.documents.length>10)throw Error('This archive would exceed the 10-document session limit.');
   for(const doc of archive.documents){try{const f=parseKML(doc.text,file.name+' / '+doc.name,nextId++);if(files.reduce((n,x)=>n+x.count,0)+f.count>100000||rows().length+f.features.length>5000)throw Error('Session limit: 100,000 coordinates and 5,000 geometry parts.');
    if(archive.assets)f.warnings.push(archive.assets+' bundled asset(s) not rendered; geometry only.');f.warnings.push('Archive document: '+doc.name);files.push(f);accepted++;notes+=f.warnings.length;
   }catch(e){errors.push(file.name+' / '+doc.name+': '+e.message);}}
  }catch(e){errors.push(file.name+': '+e.message);}
 }}finally{busy=false;$('upload').disabled=false;$('demo').disabled=false;$('clear').disabled=false;$('input').value='';render();if(accepted)fit();status(`${accepted} KML document(s) loaded from KMZ.${notes?' See import notes under Files & folders.':''}${errors.length?' '+errors.join(' '):''}`,!!errors.length);}
}

$('upload').onclick=()=>$('input').click();$('input').onchange=e=>importFiles(e.target.files);['dragenter','dragover'].forEach(t=>$('drop').addEventListener(t,e=>{e.preventDefault();$('drop').classList.add('mz-drag');}));['dragleave','drop'].forEach(t=>$('drop').addEventListener(t,e=>{e.preventDefault();$('drop').classList.remove('mz-drag');}));$('drop').addEventListener('drop',e=>importFiles(e.dataTransfer.files));
['points','lines','polygons','styles','labels','units'].forEach(id=>$(id).onchange=render);
$('clear').onclick=()=>{files=[];current=null;page=0;if(locationMarker){map.removeLayer(locationMarker);locationMarker=null;}render();status('All files cleared.');};
map.on('mousemove',e=>{$('coords').textContent=e.latlng.lat.toFixed(5)+', '+e.latlng.wrap().lng.toFixed(5);});map.on('click',e=>L.popup().setLatLng(e.latlng).setContent(node('span',e.latlng.lat.toFixed(6)+', '+e.latlng.wrap().lng.toFixed(6))).openOn(map));
$('locate').onclick=()=>{if(!navigator.geolocation){status('Location is unavailable in this browser.',true);return;}status('Requesting your location…');navigator.geolocation.getCurrentPosition(p=>{if(locationMarker)map.removeLayer(locationMarker);locationMarker=L.circle([p.coords.latitude,p.coords.longitude],{radius:p.coords.accuracy,color:'#0284c7',fillOpacity:.12}).addTo(map);map.setView([p.coords.latitude,p.coords.longitude],14);status('Approximate location accuracy: '+Math.round(p.coords.accuracy)+' m.');},()=>status('Location unavailable. Check permissions and use HTTPS.',true),{timeout:12000,enableHighAccuracy:true});};
const resize=()=>setTimeout(()=>map.invalidateSize(),100);
$('fullscreen').onclick=async()=>{const s=$('map-shell');if(document.fullscreenElement)await document.exitFullscreen();else if(s.classList.contains('mz-expanded'))s.classList.remove('mz-expanded');else{try{if(!s.requestFullscreen)throw Error();await s.requestFullscreen();}catch{s.classList.add('mz-expanded');}}$('fullscreen').textContent=document.fullscreenElement||s.classList.contains('mz-expanded')?'Exit full screen':'Full screen';resize();};document.addEventListener('fullscreenchange',()=>{$('fullscreen').textContent=document.fullscreenElement?'Exit full screen':'Full screen';resize();});document.addEventListener('keydown',e=>{if(e.key==='Escape'){$('map-shell').classList.remove('mz-expanded');$('fullscreen').textContent='Full screen';resize();}});new ResizeObserver(()=>map.invalidateSize()).observe($('map'));
function download(data,type,name){const blob=data instanceof Blob?data:new Blob([data],{type}),url=URL.createObjectURL(blob),a=node('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
const xml=s=>String(s).replace(/[<>&"']/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]));
const colorXML=(c,o)=>Math.round(Math.max(0,Math.min(1,o))*255).toString(16).padStart(2,'0')+c.slice(5,7)+c.slice(3,5)+c.slice(1,3);
function geometryXML(g){const coordinateText=c=>c.map(p=>p.join(',')).join(' '),mode=/^(clampToGround|relativeToGround|absolute)$/.test(g.mode)?g.mode:'clampToGround';const altitude='<altitudeMode>'+mode+'</altitudeMode>';if(g.type==='Point')return '<Point>'+altitude+'<coordinates>'+g.coordinates.join(',')+'</coordinates></Point>';if(g.type==='LineString')return '<LineString>'+altitude+'<coordinates>'+coordinateText(g.coordinates)+'</coordinates></LineString>';return '<Polygon>'+altitude+g.coordinates.map((r,i)=>{const tag=i?'innerBoundaryIs':'outerBoundaryIs';return '<'+tag+'><LinearRing><coordinates>'+coordinateText(r)+'</coordinates></LinearRing></'+tag+'>';}).join('')+'</Polygon>';}
function buildKML(){const groups=new Map();active().forEach(row=>{const key=row.f.id+'|'+row.x.folder;if(!groups.has(key))groups.set(key,[]);groups.get(key).push(row);});let s='<?xml version="1.0" encoding="UTF-8"?><kml xmlns="http://www.opengis.net/kml/2.2"><Document><name>EasyCalculator KML export</name>';groups.forEach(list=>{s+='<Folder><name>'+xml(list[0].f.name+' / '+(list[0].x.folder||'Root'))+'</name>';list.forEach(({f,x})=>{const p=presentation(f,x);s+='<Placemark><name>'+xml(x.name)+'</name><description>'+xml(x.description)+'</description><Style><LineStyle><color>'+colorXML(p.color,p.opacity)+'</color><width>'+p.weight+'</width></LineStyle><PolyStyle><color>'+colorXML(p.fillColor,p.fillOpacity)+'</color><fill>'+(p.fill?1:0)+'</fill><outline>'+(p.stroke?1:0)+'</outline></PolyStyle><IconStyle><color>'+colorXML(p.fillColor,p.fillOpacity)+'</color></IconStyle></Style><ExtendedData>'+Object.entries(x.properties).map(([k,v])=>'<Data name="'+xml(k)+'"><value>'+xml(v)+'</value></Data>').join('')+'</ExtendedData>'+geometryXML(x.geometry)+'</Placemark>';});s+='</Folder>';});return s+'</Document></kml>'; }
$('export-kml').onclick=()=>download(buildKML(),'application/vnd.google-earth.kml+xml','easycalculator-features.kml');
$('export-kmz').onclick=async()=>{const button=$('export-kmz');button.disabled=true;try{const zip=new JSZip();zip.file('doc.kml',buildKML());const blob=await zip.generateAsync({type:'blob',compression:'DEFLATE'});download(blob,'application/vnd.google-earth.kmz','easycalculator-features.kmz');status('KMZ exported with visible geometry in doc.kml.');}catch(e){status('KMZ export failed: '+e.message,true);}finally{button.disabled=!active().length;}};
$('export-json').onclick=()=>download(JSON.stringify({type:'FeatureCollection',features:active().map(({f,x})=>({type:'Feature',properties:{name:x.name,description:x.description,file:f.name,folder:x.folder,altitudeMode:x.geometry.mode,attributes:x.properties},geometry:{type:x.geometry.type,coordinates:x.geometry.coordinates}}))},null,2),'application/geo+json','easycalculator-features.geojson');
$('export-csv').onclick=()=>{const out=[['file','name','folder','geometry','ring','point','longitude','latitude','altitude','altitude_mode']];active().forEach(({f,x})=>{const g=x.geometry,parts=g.type==='Point'?[[g.coordinates]]:g.type==='Polygon'?g.coordinates:[g.coordinates];parts.forEach((r,j)=>r.forEach((c,i)=>out.push([f.name,x.name,x.folder,g.type,g.type==='Polygon'?(j?'hole '+j:'outer'):'',i+1,c[0],c[1],c[2]??'',g.mode])));});const cell=v=>{let s=String(v);if(typeof v==='string'&&/^\s*[=+@-]/.test(s))s="'"+s;return '"'+s.replace(/"/g,'""')+'"';};download('\uFEFF'+out.map(r=>r.map(cell).join(',')).join('\r\n'),'text/csv;charset=utf-8','easycalculator-coordinates.csv');};
$('export-png').onclick=()=>{const list=active();if(!list.length)return;const c=node('canvas');c.width=1600;c.height=1000;const ctx=c.getContext('2d');ctx.fillStyle='#f8fafc';ctx.fillRect(0,0,1600,1000);let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity;const project=p=>map.options.crs.project(L.latLng(p[1],p[0]));list.forEach(({x})=>vertices(x.geometry).forEach(p=>{const q=project(p);minX=Math.min(minX,q.x);maxX=Math.max(maxX,q.x);minY=Math.min(minY,q.y);maxY=Math.max(maxY,q.y);}));const scale=Math.min(1460/Math.max(1,maxX-minX),780/Math.max(1,maxY-minY)),xy=p=>{const q=project(p);return [800+(q.x-(minX+maxX)/2)*scale,530-(q.y-(minY+maxY)/2)*scale];};list.forEach(({f,x})=>{const g=x.geometry,p=presentation(f,x);ctx.strokeStyle=p.color;ctx.fillStyle=p.fillColor;ctx.lineWidth=p.weight;ctx.beginPath();if(g.type==='Point'){ctx.arc(...xy(g.coordinates),7,0,Math.PI*2);ctx.globalAlpha=p.fillOpacity;ctx.fill();}else{(g.type==='Polygon'?g.coordinates:[g.coordinates]).forEach(r=>{r.forEach((v,i)=>{const [a,b]=xy(v);if(i)ctx.lineTo(a,b);else ctx.moveTo(a,b);});if(g.type==='Polygon')ctx.closePath();});if(g.type==='Polygon'&&p.fill){ctx.globalAlpha=p.fillOpacity;ctx.fill('evenodd');}if(g.type==='LineString'||p.stroke){ctx.globalAlpha=p.opacity;ctx.stroke();}}ctx.globalAlpha=1;});ctx.fillStyle='#172b4d';ctx.font='bold 32px sans-serif';ctx.fillText('KMZ Geometry • EasyCalculator.org',50,60);ctx.font='18px sans-serif';ctx.fillText('Geometry diagram • No background map imagery • '+list.length+' visible parts',50,96);c.toBlob(b=>{if(b)download(b,'image/png','easycalculator-kmz.png');});};
$('demo').onclick=async()=>{const s=`<?xml version="1.0"?><kml xmlns="http://www.opengis.net/kml/2.2"><Document><name>London demo</name><Style id="park"><LineStyle><color>ff009c18</color><width>3</width></LineStyle><PolyStyle><color>66009c18</color></PolyStyle></Style><Folder><name>Places</name><Placemark><name>Meeting point</name><description>A sample placemark in London.</description><ExtendedData><Data name="Category"><value>Meeting point</value></Data></ExtendedData><Point><coordinates>-0.175,51.508,15</coordinates></Point></Placemark></Folder><Folder><name>Routes and areas</name><Placemark><name>Sample walking route</name><LineString><coordinates>-0.18,51.503,12 -0.175,51.505,15 -0.172,51.508,19 -0.165,51.51,17</coordinates></LineString></Placemark><Placemark><name>Illustrative area with hole</name><styleUrl>#park</styleUrl><Polygon><outerBoundaryIs><LinearRing><coordinates>-0.19,51.502 -0.16,51.502 -0.16,51.512 -0.19,51.512 -0.19,51.502</coordinates></LinearRing></outerBoundaryIs><innerBoundaryIs><LinearRing><coordinates>-0.184,51.505 -0.178,51.505 -0.178,51.508 -0.184,51.508 -0.184,51.505</coordinates></LinearRing></innerBoundaryIs></Polygon></Placemark></Folder></Document></kml>`;if(busy)return;try{const zip=new JSZip();zip.file('doc.kml',s);const bytes=await zip.generateAsync({type:'uint8array',compression:'DEFLATE'});await importFiles([new File([bytes],'london-demo.kmz',{type:'application/vnd.google-earth.kmz'})]);}catch(e){status('Demo could not load: '+e.message,true);}};
render();
})();
