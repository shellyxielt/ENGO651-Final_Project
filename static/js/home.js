mapboxgl.accessToken = 'pk.eyJ1IjoieWVrb25nc3VuIiwiYSI6ImNqem5meTh4MzAyMGgzbmx0ZGdoanBob3AifQ.gcnWxBHpvBwnZHCluPWiKw';
var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/light-v10",
    center: [-114.06, 51.05],
    zoom: 10
});

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');

map.on('load', function() {
    map.addSource('contours', {
        type: 'vector',
        url: 'mapbox://yekongsun.ahq0bna1'
    });
    map.addLayer({
        'id': 'contours',
        "type": "line",
        "source": "contours",
        'paint': {
            'line-color': {
                property: 'volume',
                stops: [
                    [1000, '#69cbf5'],
                    [48250, '#5E9FC7'],
                    [95500, '#9AD17B'],
                    [142750, '#EF6769'],
                    [190000, '#FCBA70']
                ]
            },
            'line-width': 2,
            'line-opacity': 1,
        },
        "source-layer": "1-5pi9vx"
    });
});
