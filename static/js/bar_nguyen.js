d3.json('/jsonified').then(function (foodData) {

  var mexican_hou = foodData.filter(respo => respo.type === 'mexican' && respo.city === 'houston');
  var american_hou = foodData.filter(respo => respo.type === 'american' && respo.city === 'houston');
  var bbq_hou = foodData.filter(respo => respo.type === 'bbq' && respo.city === 'houston');
  var indian_hou = foodData.filter(respo => respo.type === 'indian' && respo.city === 'houston');
  var italian_hou = foodData.filter(respo => respo.type === 'italian' && respo.city === 'houston');
  var mediterranean_hou = foodData.filter(respo => respo.type === 'mediterranean' && respo.city === 'houston');


  var mexican_ny = foodData.filter(respo => respo.type === 'mexican' && respo.city === 'ny');
  var american_ny = foodData.filter(respo => respo.type === 'american' && respo.city === 'ny');
  var bbq_ny = foodData.filter(respo => respo.type === 'bbq' && respo.city === 'ny');
  var indian_ny = foodData.filter(respo => respo.type === 'indian' && respo.city === 'ny');
  var italian_ny = foodData.filter(respo => respo.type === 'italian' && respo.city === 'ny');
  var mediterranean_ny = foodData.filter(respo => respo.type === 'mediterranean' && respo.city === 'ny');

  var houston_mexican_count = mexican_hou.length;
  var houston_mediterranean_count = mediterranean_hou.length;
  var houston_italian_count = italian_hou.length;
  var houston_american_count = american_hou.length;
  var houston_bbq_count = bbq_hou.length;
  var houston_indian_count = indian_hou.length;

  var ny_mexican_count = mexican_ny.length;
  var ny_mediterranean_count = mediterranean_ny.length;
  var ny_italian_count = italian_ny.length;
  var ny_american_count = american_ny.length;
  var ny_bbq_count = bbq_ny.length;
  var ny_indian_count = indian_ny.length;

  // Get reviews per category
  var mex_hou_rev_per = ss.sum(mexican_hou.map(row => row.votes)) / houston_mexican_count;
  var ame_hou_rev_per = ss.sum(american_hou.map(row => row.votes)) / houston_american_count;
  var bbq_hou_rev_per = ss.sum(bbq_hou.map(row => row.votes)) / houston_bbq_count;
  var indian_hou_rev_per = ss.sum(indian_hou.map(row => row.votes)) / houston_indian_count;
  var italian_hou_rev_per = ss.sum(italian_hou.map(row => row.votes)) / houston_italian_count;
  var mediterranean_hou_rev_per = ss.sum(mediterranean_hou.map(row => row.votes)) / houston_mediterranean_count;

  var mex_ny_rev_per = ss.sum(mexican_ny.map(row => row.Votes)) / ny_mexican_count;
  var ame_ny_rev_per = ss.sum(american_ny.map(row => row.votes)) / ny_american_count;
  var bbq_ny_rev_per = ss.sum(bbq_ny.map(row => row.votes)) / ny_bbq_count;
  var indian_ny_rev_per = ss.sum(indian_ny.map(row => row.votes)) / ny_indian_count;
  var italian_ny_rev_per = ss.sum(italian_ny.map(row => row.votes)) / ny_italian_count;
  var mediterranean_ny_rev_per = ss.sum(mediterranean_ny.map(row => row.votes)) / ny_mediterranean_count;

  // Trace1 for Houston
  var type_list = ['American Cuisine', 'BBQ Cuisine', 'Italian Cuisine', 'Mediterannean Cuisine', 'Mexican Cuisine'];
  var trace1 = {
    x: type_list,
    y: [ame_hou_rev_per, bbq_hou_rev_per, italian_hou_rev_per, mediterranean_hou_rev_per, mex_hou_rev_per],
    text: 'Houston',
    name: "Houston",
    marker: {
      color: '#58508d'
    },
    type: "bar"
  };
  // Trace 2 for New York
  var trace2 = {
    x: type_list,
    y: [ame_ny_rev_per, bbq_ny_rev_per, italian_ny_rev_per, mediterranean_ny_rev_per, mex_ny_rev_per],
    text: 'New York',
    name: "New York",
    marker: {
      color: '#269F93'
    },
    type: "bar"
  };
  // Combining both traces
  var data = [trace1, trace2];
  // Apply the group barmode to the layout
  var layout = {
    title: "Number of Reviews per Restaurant in Houston and New York",
    yaxis: { title: "Reviews per Restaurant" },
    barmode: "group"
  };
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot", data, layout);
});