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