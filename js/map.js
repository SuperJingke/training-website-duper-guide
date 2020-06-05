$(function () {
  var map = L.map('map').setView([43.653225, -79.383186], 13);
  
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGNjaGFuZyIsImEiOiJja2IxbzllNnEwNWV4MndyMTU3bW44ZHdnIn0.dd2_wVFOagtppgigsZuRMQ'
  }).addTo(map);


  L.marker([43.589046,-79.644119]).addTo(map)
    .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();


  var popup = L.popup();

  function onMapClick(e) {
    popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(map);
  }

  map.on('click', onMapClick);
})