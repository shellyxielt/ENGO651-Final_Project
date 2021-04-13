var mymap = L.map('mapid').setView([51.05,-114.06], 10);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2hlbGx5eGllbHQiLCJhIjoiY2tsb3lucWZ1MHhzYjJ4cG12djl1eWd3diJ9.9kcdVU9p_jrvgY_CCom0_g'
}).addTo(mymap);

function identify(geojson){
    var oms = new OverlappingMarkerSpiderfier(mymap);
    var popup = new L.Popup();
    oms.addListener('click', function(marker) {
    popup.setContent(marker.desc);
    popup.setLatLng(marker.getLatLng());
    mymap.openPopup(popup);
    });
    oms.addListener('spiderfy', function(markers) {
        mymap.closePopup();
    });

    var markers = L.markerClusterGroup();
    for (var i=0; i<geojson.features.length;i++){
        var datum=geojson.features[i];
        var loc = new L.LatLng(datum.geometry.coordinates[1], datum.geometry.coordinates[0]);
        var marker = new L.Marker(loc);
        var popcontent="Date: "+datum.properties.start_dt+"<br>"+
                        "Description: "+datum.properties.description+"<br>"+
                        "Info: "+datum.properties.incident_info;
        marker.desc = popcontent;
        mymap.addLayer(markers);
        oms.addMarker(marker);
        markers.addLayer(marker);
    }
}
