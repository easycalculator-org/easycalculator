/* BASE MAP */

const osmLayer = L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
attribution:'© OpenStreetMap',
maxZoom:19
}
);

const satelliteLayer = L.tileLayer(
'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
{
attribution:'© Esri',
maxZoom:19
}
);

const map = L.map('map').setView([28.6139,77.2090],12);

osmLayer.addTo(map);

L.control.layers(
{
"🗺️ Normal":osmLayer,
"🛰️ Satellite":satelliteLayer
},
null,
{
position:'topright'
}
).addTo(map);

/* GROUPS */

const drawnLines = new L.FeatureGroup();
const drawnPolygons = new L.FeatureGroup();

map.addLayer(drawnLines);
map.addLayer(drawnPolygons);

/* STORAGE */

let lineStore = new Map();
let polygonStore = new Map();

/* FUNCTIONS */

function computeLineDistanceMeters(latlngs){

if(!latlngs || latlngs.length < 2) return 0;

let total = 0;

for(let i=0;i<latlngs.length-1;i++){

const from = latlngs[i];
const to = latlngs[i+1];

total += turf.distance(
turf.point([from.lng,from.lat]),
turf.point([to.lng,to.lat]),
{units:'meters'}
);

}

return total;

}

function computePolygonAreaSqm(layer){

try{

const latlngs = layer.getLatLngs();

let coords;

if(Array.isArray(latlngs[0]) && !(latlngs[0] instanceof L.LatLng)){

coords = latlngs[0].map(p=>[p.lng,p.lat]);

}else{

coords = latlngs.map(p=>[p.lng,p.lat]);

}

if(
coords[0][0] !== coords[coords.length-1][0] ||
coords[0][1] !== coords[coords.length-1][1]
){
coords.push(coords[0]);
}

const polygon = turf.polygon([coords]);

return turf.area(polygon);

}catch(e){

return 0;

}

}

function formatDistance(meters,unit){

if(unit==='meters') return meters.toFixed(2);
if(unit==='kilometers') return (meters/1000).toFixed(3);
if(unit==='feet') return (meters*3.28084).toFixed(2);
if(unit==='miles') return (meters/1609.344).toFixed(3);

return meters.toFixed(2);

}

function getUnitSymbol(unit){

if(unit==='meters') return 'm';
if(unit==='kilometers') return 'km';
if(unit==='feet') return 'ft';
if(unit==='miles') return 'mi';

return 'm';

}

/* REFRESH LINE */

function refreshLinesUI(){

const container = document.getElementById('linesListContainer');

container.innerHTML = '';

const lines = drawnLines.getLayers();

if(lines.length===0){

container.innerHTML = `
<div class="text-muted text-center py-4 small">
No lines drawn
</div>
`;

return;

}

const unit = document.getElementById('distanceUnitSelect').value;

lines.forEach(layer=>{

const id = layer._leaflet_id;

let meters = lineStore.has(id)
? lineStore.get(id).distanceMeters
: computeLineDistanceMeters(layer.getLatLngs());

const formatted = formatDistance(meters,unit);

const symbol = getUnitSymbol(unit);

const card = document.createElement('div');

card.className='shape-card d-flex justify-content-between align-items-center';

card.innerHTML=`

<div>

<div class="fw-semibold mb-2">
<i class="fas fa-route text-primary me-1"></i>
Measured Distance
</div>

<div>
<span class="unit-badge">
${formatted} ${symbol}
</span>
</div>

</div>

<button class="delete-shape" data-id="${id}" data-type="line">
<i class="fas fa-trash"></i>
</button>

`;

container.appendChild(card);

});

bindDeleteButtons();

}

/* REFRESH POLYGON */

function refreshPolygonsUI(){

const container = document.getElementById('polygonsListContainer');

container.innerHTML='';

const polygons = drawnPolygons.getLayers();

if(polygons.length===0){

container.innerHTML=`
<div class="text-muted text-center py-4 small">
No polygons drawn
</div>
`;

document.getElementById('totalAreaSummary').classList.add('d-none');

return;

}

let totalSqm = 0;

polygons.forEach((layer,index)=>{

const areaSqm = computePolygonAreaSqm(layer);

polygonStore.set(layer._leaflet_id,{areaSqm});

totalSqm += areaSqm;

const sqft = areaSqm * 10.7639;

const card = document.createElement('div');

card.className='shape-card d-flex justify-content-between align-items-center';

card.innerHTML=`

<div>

<div class="fw-semibold mb-2">
<i class="fas fa-vector-square text-danger me-1"></i>
Polygon ${index+1}
</div>

<div class="d-flex gap-2 flex-wrap">

<span class="unit-badge">
${areaSqm.toFixed(2)} m²
</span>

<span class="unit-badge">
${sqft.toFixed(2)} ft²
</span>

</div>

</div>

<button class="delete-shape" data-id="${layer._leaflet_id}" data-type="polygon">
<i class="fas fa-trash"></i>
</button>

`;

container.appendChild(card);

});

document.getElementById('totalSqmVal').innerText = totalSqm.toFixed(2);

document.getElementById('totalSqftVal').innerText =
(totalSqm*10.7639).toFixed(2);

document.getElementById('totalAreaSummary')
.classList.remove('d-none');

bindDeleteButtons();

}

/* DELETE */

function bindDeleteButtons(){

document.querySelectorAll('.delete-shape').forEach(btn=>{

btn.addEventListener('click',()=>{

const id = parseInt(btn.dataset.id);

const type = btn.dataset.type;

if(type==='line'){

const layer = drawnLines.getLayers().find(
l=>l._leaflet_id===id
);

if(layer){

drawnLines.removeLayer(layer);

lineStore.delete(id);

refreshLinesUI();

}

}else{

const layer = drawnPolygons.getLayers().find(
l=>l._leaflet_id===id
);

if(layer){

drawnPolygons.removeLayer(layer);

polygonStore.delete(id);

refreshPolygonsUI();

}

}

});

});

}

/* DRAW CONTROLS */

let currentDrawControl = null;
let currentMode = 'line';

function removeDrawControl(){

if(currentDrawControl){

map.removeControl(currentDrawControl);

currentDrawControl = null;

}

}

function createDrawControl(mode){

const commonEdit = {

featureGroup:new L.FeatureGroup([
drawnLines,
drawnPolygons
]),

edit:true,
remove:true

};

if(mode==='line'){

return new L.Control.Draw({

position:'topleft',

draw:{

polyline:{
shapeOptions:{
color:'#2563eb',
weight:6,
opacity:0.9
},
metric:true,
showLength:true
},

polygon:false,
rectangle:false,
circle:false,
marker:false

},

edit:commonEdit

});

}else{

return new L.Control.Draw({

position:'topleft',

draw:{

polygon:{
allowIntersection:false,
showArea:true,

shapeOptions:{
color:'#dc2626',
weight:4,
opacity:0.9,
fillColor:'#fca5a5',
fillOpacity:0.35
}
},

polyline:false,
rectangle:false,
circle:false,
marker:false

},

edit:commonEdit

});

}

}

function switchDrawingMode(mode){

currentMode = mode;

removeDrawControl();

currentDrawControl = createDrawControl(mode);

map.addControl(currentDrawControl);

document.getElementById('lineModeBtn')
.classList.toggle('active',mode==='line');

document.getElementById('polygonModeBtn')
.classList.toggle('active',mode==='polygon');

}

/* DRAW EVENTS */

map.on('draw:created',function(e){

const layer = e.layer;

if(e.layerType==='polyline'){

const distanceMeters = computeLineDistanceMeters(
layer.getLatLngs()
);

lineStore.set(layer._leaflet_id,{
distanceMeters
});

drawnLines.addLayer(layer);

refreshLinesUI();

}

else if(e.layerType==='polygon'){

const areaSqm = computePolygonAreaSqm(layer);

polygonStore.set(layer._leaflet_id,{
areaSqm
});

drawnPolygons.addLayer(layer);

refreshPolygonsUI();

}

});

map.on('draw:edited',function(){

refreshLinesUI();
refreshPolygonsUI();

});

map.on('draw:deleted',function(){

refreshLinesUI();
refreshPolygonsUI();

});

/* BUTTONS */

document.getElementById('lineModeBtn')
.addEventListener('click',()=>{

switchDrawingMode('line');

});

document.getElementById('polygonModeBtn')
.addEventListener('click',()=>{

switchDrawingMode('polygon');

});

document.getElementById('distanceUnitSelect')
.addEventListener('change',()=>{

refreshLinesUI();

});

document.getElementById('globalClearBtn')
.addEventListener('click',()=>{

drawnLines.clearLayers();
drawnPolygons.clearLayers();

lineStore.clear();
polygonStore.clear();

refreshLinesUI();
refreshPolygonsUI();

});

/* FULLSCREEN */

document.getElementById('fullscreenMapBtn')
.addEventListener('click',()=>{

const elem = document.documentElement;

if(!document.fullscreenElement){

elem.requestFullscreen();

}else{

document.exitFullscreen();

}

setTimeout(()=>{

map.invalidateSize();

},500);

});

/* INIT */

switchDrawingMode('line');

window.addEventListener('resize',()=>{

map.invalidateSize();

});
