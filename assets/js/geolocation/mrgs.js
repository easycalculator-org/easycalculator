
(() => {
'use strict';
const el = id => document.getElementById('ec-' + id);
let map, marker, current = null, locationRequest = 0;
function status(message, error = false) { el('status').textContent = message; el('status').className = error ? 'mt-3 text-danger' : 'mt-3 text-success'; }
function clearResult() { current = null; el('result').hidden = true; if (marker && map) { map.removeLayer(marker); marker = null; } }
function ready() { if (!window.mgrs) throw new Error('The conversion library could not load. Check your connection and reload this page.'); }
function validateLL(lat, lon) { if (!Number.isFinite(lat) || !Number.isFinite(lon) || lat < -80 || lat > 84 || lon < -180 || lon > 180) throw new Error('Enter latitude from −80 to 84 and longitude from −180 to 180. Polar UPS coordinates are not supported.'); }
function parseGrid(raw) {
 const grid = raw.toUpperCase().replace(/\s+/g, '').replace(/^0(?=[1-9])/, '');
 const m = /^([1-9]|[1-5]\d|60)([C-HJ-NP-X])([A-HJ-NP-Z])([A-HJ-NP-V])(\d{2}|\d{4}|\d{6}|\d{8}|\d{10})$/.exec(grid);
 if (!m) throw new Error('Enter a full MGRS reference: zone, band, two square letters and 2, 4, 6, 8 or 10 numerical digits.');
 const columns = ['ABCDEFGH','JKLMNPQR','STUVWXYZ'][(Number(m[1])-1)%3];
 if (!columns.includes(m[3]) || (m[2] === 'X' && [32,34,36].includes(Number(m[1])))) throw new Error('The grid-square letters or zone do not match a valid MGRS reference.');
 return {grid, digits:m[5].length/2, band:m[2]};
}
function formatted(grid) { return grid.replace(/^(\d{1,2}[A-Z])([A-Z]{2})(\d+)$/, (_,a,b,c) => a+' '+b+' '+c.slice(0,c.length/2)+' '+c.slice(c.length/2)); }
function show(lat, lon, grid, digits, note) {
 current = {lat,lon,grid};
 el('ll-result').textContent = lat.toFixed(6)+', '+lon.toFixed(6);
 el('grid-result').textContent = formatted(grid);
 el('result-note').textContent = 'Grid size: '+(10**(5-digits)).toLocaleString()+' m. '+note;
 el('google').href = 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(lat.toFixed(6)+','+lon.toFixed(6));
 el('result').hidden = false;
 if (map) { if (marker) map.removeLayer(marker); marker = L.marker([lat,lon]).addTo(map); map.setView([lat,lon], Math.min(16, 6+digits*2)); }
 status('Conversion complete.');
}
function fromLL(lat,lon,note='Latitude and longitude show the input point. Grid precision does not imply measurement accuracy.') { ready(); validateLL(lat,lon); const digits=Number(el('precision').value); show(lat,lon,mgrs.forward([lon,lat],digits),digits,note); }
function guard(fn) { clearResult(); try { fn(); } catch (error) { status(error instanceof Error ? error.message : 'Unable to convert this coordinate. Check the zone, letters and digits.',true); } }
el('from-grid').addEventListener('submit', event => {event.preventDefault(); guard(() => {
 ready(); const p=parseGrid(el('grid').value); const [lon,lat]=mgrs.toPoint(p.grid); validateLL(lat,lon);
 const bands='CDEFGHJKLMNPQRSTUVWX', low=-80+bands.indexOf(p.band)*8, high=p.band==='X'?84:low+8;
 const margin=(10**(5-p.digits))/100000;
 if(lat < low-margin || lat > high+margin) throw new Error('This grid square is inconsistent with the latitude band. Check the reference.');
 show(lat,lon,p.grid,p.digits,'Latitude and longitude show the approximate grid-cell centre.');
});});
el('from-ll').addEventListener('submit', event => {event.preventDefault();guard(() => fromLL(el('lat').valueAsNumber,el('lon').valueAsNumber));});
el('grid-example').addEventListener('click', () => {el('grid').value='31U DQ 48252 11955';el('from-grid').requestSubmit();});
el('ll-example').addEventListener('click', () => {el('lat').value='48.8584';el('lon').value='2.2945';el('from-ll').requestSubmit();});
['grid','lat','lon','precision'].forEach(id => el(id).addEventListener('input', () => {clearResult();status('Inputs changed. Convert to update the result.');}));
async function copy(kind) { if(!current) return; const text=kind==='grid'?formatted(current.grid):current.lat.toFixed(6)+', '+current.lon.toFixed(6); try { await navigator.clipboard.writeText(text); status('Coordinates copied.'); } catch { status('Copy is unavailable. Select the result text and copy it manually.',true); } }
el('copy-grid').addEventListener('click',()=>copy('grid'));el('copy-ll').addEventListener('click',()=>copy('ll'));
el('locate').addEventListener('click', () => {
 clearResult(); if(!navigator.geolocation) {status('Your browser does not support location access.',true);return;}
 const request=++locationRequest;el('locate').disabled=true;status('Finding your location…');
 navigator.geolocation.getCurrentPosition(position => {if(request!==locationRequest)return;el('locate').disabled=false;guard(()=>{const {latitude,longitude,accuracy}=position.coords;el('lat').value=latitude;el('lon').value=longitude;fromLL(latitude,longitude,'Device-reported horizontal accuracy: approximately '+Math.round(accuracy)+' m.');});}, error=>{if(request!==locationRequest)return;el('locate').disabled=false;status(({1:'Location permission was denied. Enter coordinates manually or allow location access.',2:'Your location is unavailable. Enter coordinates manually.',3:'Location request timed out. Try again or enter coordinates manually.'})[error.code]||'Unable to get your location.',true);},{enableHighAccuracy:true,timeout:15000,maximumAge:0});
});
el('reset').addEventListener('click',()=>{locationRequest++;el('locate').disabled=false;el('from-grid').reset();el('from-ll').reset();clearResult();status('');if(map)map.setView([20,0],2);el('grid').focus();});
if(window.L) { try {map=L.map('ec-map',{scrollWheelZoom:false}).setView([20,0],2);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).on('tileerror',()=>{el('map-status').textContent='Map tiles could not load. Coordinate conversion remains available.';}).addTo(map);map.on('click',event=>guard(()=>{const point=event.latlng.wrap();el('lat').value=point.lat.toFixed(6);el('lon').value=point.lng.toFixed(6);fromLL(point.lat,point.lng);}));}catch{el('map-status').textContent='Map unavailable. You can still convert coordinates.';} } else el('map-status').textContent='Map library could not load. You can still convert coordinates.';
if(!window.mgrs) status('The conversion library could not load. Check your connection and reload this page.',true);
})();