var MapsGoogle = function () {

    var mapMarker = function () {
        var map = new GMaps({
            div: '#gmap_marker',
            lat: 1.86379575,
            lng: 103.08944285,
			zoom: 18
        });
        map.addMarker({
            lat: 1.86379575,
            lng: 103.08944285,
            title: 'Marker with InfoWindow',
			//icon: "img/map_marker.png",
            infoWindow: {
                content: '<p class="text-center">REALTIME D-MON</p>'
				//content: '<img src="img/logo_registered.png"/>'
            }
        });
    }

    
    return {
        //main function to initiate map samples
        init: function () {
            mapMarker();
        }

    };

}();