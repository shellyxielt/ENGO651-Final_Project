mapboxgl.accessToken = 'pk.eyJ1Ijoic2hlbGx5eGllbHQiLCJhIjoiY2tsb3lucWZ1MHhzYjJ4cG12djl1eWd3diJ9.9kcdVU9p_jrvgY_CCom0_g';
 
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/shellyxielt/ckmbtifxg5g9p17qq7q1w1uc4',
center: [-114.06, 51.05], // starting position
zoom: 11 // starting zoom
});
 
var nav = new mapboxgl.NavigationControl();
 
var directions = new MapboxDirections({
accessToken: mapboxgl.accessToken,
unit: 'metric',
profile: 'mapbox/driving',
alternatives: 'false',
geometries: 'geojson'
});
 
map.scrollZoom.enable();
map.addControl(directions, 'top-right');
 
var incidents = {
'type': 'FeatureCollection',
'features': [
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-114.17,51.12]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-114.17,51.09]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-114.16,51.05]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-114.10,51.15]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-114.11,51.07]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-114.10,51.00]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-114.10,50.96]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-114.08,51.05]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-114.07,50.91]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-114.04,51.14]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-114.05,51.10]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-114.01,51.05]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-114.05,50.99]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-114.04,50.95]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-113.99,51.08]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-113.99,51.01]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-113.97,50.95]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-113.95,51.11]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-113.94,51.06]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-113.94,51.03]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-114.16,51.16]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-114.01,51.17]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-114.02,50.88]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-113.97,51.15]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-113.96,50.89]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-113.95,50.97]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-114.21,51.15]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-114.18,51.02]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-114.24,51.13]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-114.24,51.09]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-114.08,51.17]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-113.92,51.15]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-113.93,50.94]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-114.12,50.90]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-114.04,50.86]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-113.965,51.875]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-113.906,50.906]
    },
},
{
    'type': 'Feature',
    'geometry': {
        'type': 'Point',
        'coordinates': [-113.89,51.04]
    },
}
]
};
 
var obstacle = turf.buffer(incidents, 0.25, { units: 'kilometers' });
 
map.on('load', function (e) {
map.addLayer({
id: 'incidents',
type: 'fill',
source: {
type: 'geojson',
data: obstacle
},
layout: {},
paint: {
'fill-color': '#f03b20',
'fill-opacity': 0.5,
'fill-outline-color': '#f03b20'
}
});
 
//Create sources and layers for the returned routes.
//There will be a maximum of 3 results from the Directions API.
//We use a loop to create the sources and layers.
for (i = 0; i <= 2; i++) {
map.addSource('route' + i, {
type: 'geojson',
data: {
type: 'Feature'
}
});
 
map.addLayer({
id: 'route' + i,
type: 'line',
source: 'route' + i,
layout: {
'line-join': 'round',
'line-cap': 'round'
},
paint: {
'line-color': '#cccccc',
'line-opacity': 0.5,
'line-width': 13,
'line-blur': 0.5
}
});
}
});
 
directions.on('route', (e) => {
var reports = document.getElementById('reports');
reports.innerHTML = '';
var report = reports.appendChild(document.createElement('div'));
let routes = e.route;
 
//Hide all routes by setting the opacity to zero.
for (i = 0; i < 3; i++) {
map.setLayoutProperty('route' + i, 'visibility', 'none');
}
 
routes.forEach(function (route, i) {
route.id = i;
});
 
routes.forEach((e) => {
//Make each route visible, by setting the opacity to 50%.
map.setLayoutProperty('route' + e.id, 'visibility', 'visible');
 
//Get GeoJson LineString feature of route
var routeLine = polyline.toGeoJSON(e.geometry);
 
//Update the data for the route, updating the visual.
map.getSource('route' + e.id).setData(routeLine);
 
var collision = '';
var emoji = '';
var clear = turf.booleanDisjoint(obstacle, routeLine);
 
if (clear == true) {
collision = 'is good!';
detail = 'does not go';
emoji = '✔️';
report.className = 'item';
map.setPaintProperty('route' + e.id, 'line-color', '#74c476');
} else {
collision = 'is bad.';
detail = 'goes';
emoji = '⚠️';
report.className = 'item warning';
map.setPaintProperty('route' + e.id, 'line-color', '#de2d26');
}
 
//Add a new report section to the sidebar.
// Assign a unique `id` to the report.
report.id = 'report-' + e.id;
 
// Add the response to the individual report created above.
var heading = report.appendChild(document.createElement('h3'));
 
// Set the class type based on clear value.
if (clear == true) {
heading.className = 'title';
} else {
heading.className = 'warning';
}
 
heading.innerHTML = emoji + ' Route ' + (e.id + 1) + ' ' + collision;
 
// Add details to the individual report.
var details = report.appendChild(document.createElement('div'));
details.innerHTML =
'This route ' + detail + ' through an area with high traffic incidents.';
report.appendChild(document.createElement('hr'));
});
});