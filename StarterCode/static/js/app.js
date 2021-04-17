//Use the D3 library to read in samples.json
d3.json("samples.json").then(function(data) {
   
    // drop down menu
    d3.selectAll("#selDataset").on("change", subjectID)

    function subjectID() {
        var drowDownMenu = d3.select("#selDataset");
        var dataSet = dropDownMenu.property("value");
        
    }  
    // grab values from the data
    var name = data.names
    var demographic = data.metadata;
    var samples = data.samples;

    console.log(name);

    var trace = {
        x: samples.sample_values,
        y: samples.otu_ids,
        type: "bar"
    };

    var data = [trace];

    var layout = {
        title: "bar Chart"
    }

    // Plotly.newPlot("plot", data, layout);
});

// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
// Use sample_values as the values for the bar chart
// Use otu_ids as the labels for the bar chart
// Use otu_labels as the hovertext for the chart
// Create a bubble chart that displays each sample.



// Use otu_ids for the x values.
// Use sample_values for the y values.
// Use sample_values for the marker size.
// Use otu_ids for the marker colors.
// Use otu_labels for the text values.

// Display the sample metadata, i.e., an individual's demographic information.
// Display each key-value pair from the metadata JSON object somewhere on the page.

// Update all of the plots any time that a new sample is selected.