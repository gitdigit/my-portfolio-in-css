 // This function is called once the API has loaded
 function initMap() {
    // Coordinates for the center of the map (example: Paris)
    var myLatLng = {lat: 48.851751, lng: 2.287211};

    // Create a map object and specify the DOM element for display
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 12
    });

    // Create a marker and set its position
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
}