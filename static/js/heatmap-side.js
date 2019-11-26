

var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

var lightmap= L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
});

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

  var heatArray_mexican = [];
  var heatArray_american = [];
  var heatArray_bbq = [];
  var heatArray_indian = [];
  var heatArray_italian = [];
  var heatArray_mediterranean = [];

  for (var i = 0; i < mexican.length; i++) {
    var location = mexican[i];
    if (location) {
      heatArray_mexican.push([location.Latitude, location.Longitude, location.Rating]);
    }
  }

  for (var i = 0; i < american.length; i++) {
    var location = american[i];
    if (location) {
      heatArray_american.push([location.Latitude, location.Longitude, location.Rating]);
    }
  }

  for (var i = 0; i < bbq.length; i++) {
    var location = bbq[i];
    if (location) {
      heatArray_bbq.push([location.Latitude, location.Longitude, location.Rating]);
    }
  }

  for (var i = 0; i < italian.length; i++) {
    var location = italian[i];
    if (location) {
      heatArray_italian.push([location.Latitude, location.Longitude, location.Rating]);
    }
  }

  for (var i = 0; i < indian.length; i++) {
    var location = indian[i];
    if (location) {
      heatArray_indian.push([location.Latitude, location.Longitude, location.Rating]);
    }
  }

  for (var i = 0; i < mediterranean.length; i++) {
    var location = mediterranean[i];
    if (location) {
      heatArray_mediterranean.push([location.Latitude, location.Longitude, location.Rating]);
    }
  }

  var baseMaps = {
    "Street map": streetmap
  };

  var heat_mexican = L.heatLayer(heatArray_mexican, {
    radius: 20
  });
  var heat_american = L.heatLayer(heatArray_american, {
    radius: 20
  });

  var heat_bbq = L.heatLayer(heatArray_bbq, {
    radius: 20
  });
  var heat_italian = L.heatLayer(heatArray_italian, {
    radius: 20
  });

  var heat_indian = L.heatLayer(heatArray_indian, {
    radius: 20
  });
  var heat_mediterranean = L.heatLayer(heatArray_mediterranean, {
    radius: 20
  });

  var overlayMaps = {
    "Mexican Heatmap": heat_mexican,
    "American Heatmap": heat_american,
    "Bbq Heatmap": heat_bbq,
    "Italian Heatmap": heat_italian,
    "Indian Heatmap": heat_indian,
    "Mediterranea Heatmap": heat_mediterranean
  };

  var myMap = L.map("map", {
    center: [39.09, -75.71],
    zoom: 5
  });

  heat_mexican.addTo(myMap);
  heat_american.addTo(myMap);
  heat_bbq.addTo(myMap);
  heat_italian.addTo(myMap);
  heat_indian.addTo(myMap);
  heat_mediterranean.addTo(myMap);

  //Add control layer

  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);




  // var map = L.map('map').setView([51.505, -0.09], 13);

  var myLayer1 = streetmap.addTo(myMap);

  var myLayer2 = lightmap.addTo(myMap);

  L.control.sideBySide(myLayer1, myLayer2).addTo(myMap);



  // New library
  var options = {
    addToZoomControl: true,
    modal: true,
    title: "Box area zoom"
  };

  var control_zoom = L.control.zoomBox(options);
  myMap.addControl(control_zoom);
}
);







