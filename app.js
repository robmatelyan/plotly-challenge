//Use the D3 library to read in samples.json
d3.json("samples.json").then(function(data) {
    
    // drop down menu
    d3.selectAll("#selDataset").on("change", subjectID)

    // select id numbers from data
    var name = Object.values(data.names);

    function subjectID() {
        var dropDownMenu = d3.select("#selDataset");
        var dataSet = dropDownMenu.property("value");
        
        // loop through 'names'
        name.forEach(function(sample) {
            dropDownMenu.append("option")
            .text(sample)
            .property("value", sample);    
        });
        // id selection
        function selectID(output) {
            return output.id == dataSet;
        }
        
        // assign variables for necessary data
        var sample = Object.values(data.samples);
        var selectedSample = sample.filter(selectID)[0];
        // console.log(selectedSample);
        var OTU = Object.values(selectedSample.otu_ids);
        var OTU_labels = selectedSample.otu_labels;
        var values = selectedSample.sample_values; 
        console.log(values);


        // demographic info
        var demographic = Object.values(data.metadata);
        var selectedDemographic = demographic.filter(selectID)[0];
        var idDemographic = d3.select("#sample-metadata")
        //build metadata table
        idDemographic.html("");
        Object.entries(selectedDemographic).forEach(([key,value]) => {
        idDemographic.append("p").text(`${key}: ${value}`)


        })

        // slice variables
        var sliceOTU = OTU.slice(0, 10).reverse;
 
        var sliceValues = values.slice(0, 10);
    
        var sliceOTU_labels = OTU_labels.slice(0, 10).reverse;
    
        console.log(sliceOTU_labels);
                        
                        
                        
    // bar chart
        var trace1 = {
            x: sliceOTU,
            y: sliceValues.map(function(x) {
                return `OTU ${x}`
            }),
            type: "bar",
            orientation: "h",

                
            }
        // chart data        
        var chartData = [trace1];
        // chart layout
        var layout = {
            title: "Top 10 OTU by Individual",
            yaxis: { title: "OTU ID" },
            xaxis: { title: "Sample Values" },
            text: sliceOTU_labels,
            

        };
        //plot bar chart        
        Plotly.newPlot("bar", chartData, layout);

        // bubble chart set up
        var trace2 = {
            x: OTU,
            y: values,
            text: OTU_labels,
            mode: "markers",
            marker: {
                color: OTU,
                size: values,
                type: "heatmap"
                }
        };
        // bubble chart data
        var bubbleData = [trace2];
        //bubble chart layout
        var layout2 = {
            title: "OTUs",
            showlegend: false,
            height: 600,
            width: 600

            };
            //plot bubbel chart
        Plotly.newPlot("bubble", bubbleData, layout2);
        
    }

subjectID();
});

