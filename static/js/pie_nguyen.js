// d3.csv("../static/data/df_all_NN.csv").then(function (foodData) {

d3.json('/jsonified').then(function (foodData) {

  foodData.forEach(function (data) {
    data.Rating = +data.Rating;
    data.Votes = +data.Votes;
  })

  var mexican_hou = foodData.filter(respo => respo.Type === 'mexican' && respo.City === 'houston');
  var american_hou = foodData.filter(respo => respo.Type === 'american' && respo.City === 'houston');
  var bbq_hou = foodData.filter(respo => respo.Type === 'bbq' && respo.City === 'houston');
  var indian_hou = foodData.filter(respo => respo.Type === 'indian' && respo.City === 'houston');
  var italian_hou = foodData.filter(respo => respo.Type === 'italian' && respo.City === 'houston');
  var mediterranean_hou = foodData.filter(respo => respo.Type === 'mediterranean' && respo.City === 'houston');

  var mexican_ny = foodData.filter(respo => respo.Type === 'mexican' && respo.City === 'ny');
  var american_ny = foodData.filter(respo => respo.Type === 'american' && respo.City === 'ny');
  var bbq_ny = foodData.filter(respo => respo.Type === 'bbq' && respo.City === 'ny');
  var indian_ny = foodData.filter(respo => respo.Type === 'indian' && respo.City === 'ny');
  var italian_ny = foodData.filter(respo => respo.Type === 'italian' && respo.City === 'ny');
  var mediterranean_ny = foodData.filter(respo => respo.Type === 'mediterranean' && respo.City === 'ny');

  var houston_mexican_count = mexican_hou.length;
  var houston_mediterranean_count = mediterranean_hou.length;
  var houston_italian_count = italian_hou.length;
  var houston_american_count = american_hou.length + 378;
  var houston_bbq_count = bbq_hou.length;
  var houston_indian_count = indian_hou.length;

  var ny_mexican_count = mexican_ny.length + 3339;
  var ny_mediterranean_count = mediterranean_ny.length;
  var ny_italian_count = italian_ny.length + 4813;
  var ny_american_count = american_ny.length + 5695;
  var ny_bbq_count = bbq_ny.length;
  var ny_indian_count = indian_ny.length;

  var type_list = ['American Cuisine', 'BBQ Cuisine', 'Italian Cuisine', 'Mediterannean Cuisine', 'Mexican Cuisine'];


  //   data = [ny_american_count, ny_bbq_count, ny_italian_count, ny_mediterranean_count, ny_mexican_count];

  function init() {
    var data_hou = [{
      values: [houston_american_count, houston_bbq_count, houston_italian_count, houston_mediterranean_count, houston_mexican_count],
      labels: type_list,
      marker: {
        colors: ['#006492', '#8f7bd3', '#bc5090', '#ff6361', '#ffa600']
      },
      type: "pie"
    }];

    var layout_hou = {
      height: 540,
      width: 490,
      title: "Number of Restaurants in Houston"
    };

    Plotly.plot("pie", data_hou, layout_hou);

    var data_ny = [{
      values: [ny_american_count, ny_bbq_count, ny_italian_count, ny_mediterranean_count, ny_mexican_count],
      labels: type_list,
      marker: {
        colors: ['#006492', '#8f7bd3', '#bc5090', '#ff6361', '#ffa600']
      },
      type: "pie"
    }];

    var layout_ny = {
      height: 540,
      width: 490,
      title: "Number of Restaurants in New York"
    };

    Plotly.plot("pie2", data_ny, layout_ny);

  }


  init();
});