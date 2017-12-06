/*MAP*/

function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: new google.maps.LatLng(50.40, 30.37),
    });

    let location = [
        {
            position: new google.maps.LatLng(50.402542, 30.377655)
        }, {
            position: new google.maps.LatLng(50.3919, 30.368267)
        }
    ];

    location.forEach(function (locations) {
        let marker = new google.maps.Marker({
            position: locations.position,
            icon: 'img/map.png',
            map: map
        });
    });
}

/*END MAP*/