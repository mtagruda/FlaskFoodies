d3.json('/jsonified').then(function (foodData) {
  var mexican_hou = foodData.filter(respo => respo.type === 'mexican' && respo.city === 'houston');
  var american_hou = foodData.filter(respo => respo.type === 'american' && respo.city === 'houston');
  var bbq_hou = foodData.filter(respo => respo.type === 'bbq' && respo.city === 'houston');
  var italian_hou = foodData.filter(respo => respo.type === 'italian' && respo.city === 'houston');
  var mediterranean_hou = foodData.filter(respo => respo.type === 'mediterranean' && respo.city === 'houston');

  var mexican_ny = foodData.filter(respo => respo.type === 'mexican' && respo.city === 'ny');
  var american_ny = foodData.filter(respo => respo.type === 'american' && respo.city === 'ny');
  var bbq_ny = foodData.filter(respo => respo.type === 'bbq' && respo.city === 'ny');
  var italian_ny = foodData.filter(respo => respo.type === 'italian' && respo.city === 'ny');
  var mediterranean_ny = foodData.filter(respo => respo.type === 'mediterranean' && respo.city === 'ny');

  var houston_mexican_count = mexican_hou.length;
  var houston_mediterranean_count = mediterranean_hou.length;
  var houston_italian_count = italian_hou.length;
  var houston_american_count = american_hou.length;
  var houston_bbq_count = bbq_hou.length;

  var ny_mexican_count = mexican_ny.length;
  var ny_mediterranean_count = mediterranean_ny.length;
  var ny_italian_count = italian_ny.length;
  var ny_american_count = american_ny.length;
  var ny_bbq_count = bbq_ny.length;

  var type_list = ['American Cuisine', 'BBQ Cuisine', 'Italian Cuisine', 'Mediterannean Cuisine', 'Mexican Cuisine'];

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