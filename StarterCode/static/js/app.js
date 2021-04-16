//Use the D3 library to read in samples.json
d3.json("samples.json").then(function(data) {
    // console.log(data);
    console.log(data.samples);
    
    // grab values from the data
    var name = data.name;
    var demographic = data.metadata;
    var samples = data.samples;

    console.log(samples);

    var trace = {
        x: samples.sample_values,
        y: samples.otu_ids,
        type: "bar"
    };

    var data = [trace];

    var layout = {
        title: "bar Chart"
    }

    Plotly.newPlot("plot", data, layout);
});

// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
// Use sample_values as the values for the bar chart
// Use otu_ids as the labels for the bar chart
// Use otu_labels as the hovertext for the chart
