

var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

var streetmap2 = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
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

var lightmap2= L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
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

  var baseMaps2 = {
    "Street map": streetmap2
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

  var heat_mexican2 = L.heatLayer(heatArray_mexican, {
    radius: 20
  });
  var heat_american2 = L.heatLayer(heatArray_american, {
    radius: 20
  });

  var heat_bbq2 = L.heatLayer(heatArray_bbq, {
    radius: 20
  });
  var heat_italian2 = L.heatLayer(heatArray_italian, {
    radius: 20
  });

  var heat_indian2 = L.heatLayer(heatArray_indian, {
    radius: 20
  });
  var heat_mediterranean2 = L.heatLayer(heatArray_mediterranean, {
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

  var overlayMaps2 = {
    "Mexican Heatmap": heat_mexican2,
    "American Heatmap": heat_american2,
    "Bbq Heatmap": heat_bbq2,
    "Italian Heatmap": heat_italian2,
    "Indian Heatmap": heat_indian2,
    "Mediterranea Heatmap": heat_mediterranean2
  };

  var myMap = L.map("map1", {
    center: [29.8,-95.40],
    zoom: 11
  });

  myMap.attributionControl.setPrefix('');

  var myMap2 = L.map("map2", {
    center: [29.8,-95.40]
    // zoom: 6
  });



  streetmap.addTo(myMap);
  streetmap2.addTo(myMap2);

  heat_mexican.addTo(myMap);
  heat_american.addTo(myMap);
  heat_bbq.addTo(myMap);
  heat_italian.addTo(myMap);
  heat_indian.addTo(myMap);
  heat_mediterranean.addTo(myMap);

  heat_mexican2.addTo(myMap2);
  heat_american2.addTo(myMap2);
  heat_bbq2.addTo(myMap2);
  heat_italian2.addTo(myMap2);
  heat_indian2.addTo(myMap2);
  heat_mediterranean2.addTo(myMap2);

  //Add control layer

  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

  L.control.layers(baseMaps2, overlayMaps2, {
    collapsed: false
  }).addTo(myMap2);

  myMap.sync(myMap2, {offsetFn: L.Sync.offsetHelper([0, 0.4], [-57.0, 24.5])});
  myMap2.sync(myMap, {offsetFn: L.Sync.offsetHelper([-57.0, 24.5], [0, 0.4])});

  // New library
  var options = {
    addToZoomControl: true,
    modal: true,
    title: "Box area zoom"
  };

  var control_zoom = L.control.zoomBox(options);
  myMap.addControl(control_zoom);

  var control_zoom2 = L.control.zoomBox(options);
  myMap2.addControl(control_zoom2);

  
var a1= L.control.sideBySide(streetmap.addTo(myMap), lightmap.addTo(myMap)).addTo(myMap);

var a2= L.control.sideBySide(streetmap2.addTo(myMap2), lightmap2.addTo(myMap2)).addTo(myMap2);

}
);







