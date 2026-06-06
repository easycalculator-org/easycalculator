
const osm=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{crossOrigin:true});
const sat=L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{crossOrigin:true});

const map=L.map('map',{center:[28.6139,77.2090],zoom:10,layers:[osm]});
L.control.layers({"Street":osm,"Satellite":sat}).addTo(map);

const fg=new L.FeatureGroup();
map.addLayer(fg);

map.addControl(new L.Control.Draw({
draw:{polygon:false,rectangle:false,polyline:false,circle:true,marker:true,circlemarker:false},
edit:{featureGroup:fg}
}));

function refresh(){
let html='',count=0,areaT=0,radT=0;
fg.eachLayer(l=>{
 if(l instanceof L.Circle){
   count++;
   let r=l.getRadius()/1000;
   let a=Math.PI*r*r;
   let c=2*Math.PI*r;
   areaT+=a; radT+=r;
   html+=`<tr><td>${l.circleName||'Circle'}</td><td>${r.toFixed(2)} km</td><td>${a.toFixed(2)} km²</td><td>${c.toFixed(2)} km</td></tr>`;
 }
});
tbl.innerHTML=html;
tc.innerText=count;
ta.innerText=areaT.toFixed(2);
tr.innerText=radT.toFixed(2);
}

map.on('draw:created',e=>{
 const layer=e.layer;
 if(layer instanceof L.Circle){
   layer.circleName=prompt("Circle Name","Radius Area")||"Radius Area";
   const color=document.getElementById('color').value;
   layer.setStyle({color:color,fillColor:color,fillOpacity:0.3});
 }
 fg.addLayer(layer);
 refresh();
});

map.on('draw:edited',refresh);
map.on('draw:deleted',refresh);

function getLocation(){
 navigator.geolocation.getCurrentPosition(p=>{
   map.setView([p.coords.latitude,p.coords.longitude],13);
 });
}

function searchLocation(){
 fetch('https://nominatim.openstreetmap.org/search?format=json&q='+encodeURIComponent(search.value))
 .then(r=>r.json())
 .then(d=>{if(d.length) map.setView([d[0].lat,d[0].lon],13);});
}

document.getElementById('downloadPNG').onclick=function(){
 html2canvas(document.getElementById('map'),{
   useCORS:true,
   allowTaint:true,
   scale:2
 }).then(canvas=>{
   const a=document.createElement('a');
   a.download='map-radius-calculator.png';
   a.href=canvas.toDataURL('image/png');
   a.click();
 });
};
