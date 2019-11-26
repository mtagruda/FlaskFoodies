// Heatmap on votes- Italian food
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

d3.csv("../data/df_all_NN.csv").then(function (response) {

  response.forEach(function (data) {
    data.Rating = +data.Rating;
    data.Votes = +data.Votes;
  })

  var mexican = response.filter(respo => respo.Type === 'mexican');
  var american = response.filter(respo => respo.Type === 'american');
  var bbq = response.filter(respo => respo.Type === 'bbq');
  var indian = response.filter(respo => respo.Type === 'indian');
  var italian = response.filter(respo => respo.Type === 'italian');
  var mediterranean = response.filter(respo => respo.Type === 'mediterranean');

  var heat_list=['mexican', 'american', 'bbq', 'indian', 'italian', 'mediterranean'];

  var overlayMaps = {}

  var mylist = [mexican, american, bbq, indian, italian, mediterranean];

  for (var i = 0; i < mylist.length; i++) {

    var heatArray = [];

    var cityMarkers = [];

    for (var i = 0; i < response.length; i++) {
      var location = response[i];
      if (location) {
        heatArray.push([location.Latitude, location.Longitude, location.Rating]);
        cityMarkers.push(
          L.marker([location.Latitude, location.Longitude])
            .bindPopup("<h3>" + location.Name + "</h3> <hr> <h3>Rating: " + location.Rating + "</h3>")
            .addTo(myMap));
      }
    }
    var cities_markers = L.layerGroup(cityMarkers);
    overlayMaps[heat_list[i]] = cities_markers;
    var baseMaps = {
      "Street map": streetmap
    };

    console.log(overlayMaps);

  //   var overlayMaps = {
  //     "Markers": cities_markers,
  //     "Mexican Heatmap": heat_mex,
  //     "American Heatmap": heat_american,
  //     "BBQ Heatmap": heat_bbq,
  //     "Italian Heatmap": heat_italian,
  //     "Mediterranean": heat_mediterranean
  // };

    //Add control layer

    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(myMap);

    var heat = L.heatLayer(heatArray, {
      radius: 20
    }).addTo(myMap);
  }
});


// New library
var options = {
  addToZoomControl: true,
  modal: true,
  title: "Box area zoom"
};

var control_zoom = L.control.zoomBox(options);
myMap.addControl(control_zoom);






