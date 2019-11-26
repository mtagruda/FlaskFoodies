function buildMetadata(sample) {
  
  var sampledata=`/metadata/${sample}`;
    d3.json(sampledata).then((sample) => {
      var samplemeta= d3.select("#sample-metadata");
      var tbody= d3.select("tbody");
      samplemeta.html("");

      var row=tbody.append("tr");
      Object.entries(sample).forEach(([key,value]) => {
      var cell= samplemeta.append("td");
      cell.text(`${key}: ${value}`)})



      // Object.entries(sample).forEach(([key,value]) => {
      //   var row= samplemeta.append("p");
      //   row.text(`${key}: ${value}`)})
      });
    }

function buildCharts(sample) {
  var plotdata= `/samples/${sample}`;
    d3.json(plotdata).then((data) => {
      var datafigures= data.sample_values;
      var colors= data.otu_ids;
      var trace=[{
        x: data.otu_ids,
        y: data.sample_values,
        mode: 'markers',
        marker: {size: datafigures, color: colors}
      }];
      var layout= {
        title: "Belly Button Bacteria Count",
        xaxis: {title: "OTU - ID"},
        yaxis: {title: "Sample Volume" }
      };
      Plotly.newPlot('bubble', trace, layout);

      let sample_values = data.sample_values;
      let otu_ids = data.otu_ids;
      let otu_labels = data.otu_labels;

    // .......... Pie plot ..........//
     let trace1 = {
      values: sample_values.slice(0, 10),
      labels: otu_ids.slice(0, 10),
      type: "pie",
      hovertext: otu_labels.slice(0, 10)
    };
     let layout_pie = {
      title: "Top Ten Belly Button OTUs"
    };
      let data_pie = [trace1];
      Plotly.newPlot("pie", data_pie, layout_pie);

    });
    }

function init() {
  var selector = d3.select("#selDataset");
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  buildCharts(newSample);
  buildMetadata(newSample);
}

init();
