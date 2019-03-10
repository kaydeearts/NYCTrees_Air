var currentGraph = 1;
var secondGraphMade = false;
treeBorough();


function treeBorough() {
    d3.select("p").remove();
    d3.select("svg").remove();
    currentGraph = 1;
    var title = "Trees Per Borough"
    var xAxisText = "Boroughs";
    var yAxisText = "Tree Amounts (In Hundred-Thousands)";
    var Manhattan = 0; //1
    var Bronx = 0; //2
    var Brooklyn = 0 //3
    var Queens = 0 //4
    var StatenIsland = 0 //5
    var dataLoaded = false;

    d3.csv("treeData.csv").get(function (error, treeData) {
        console.log("file read")
        var boroughNumbers;
        treeData.forEach(function (d) {
            d.borocode = +d.borocode;
            //console.log(treeData[0]);



            //        //go to each row, add to the counter of each borough
            //        
            //        indicator = parse(d.borocode).getID();
            //        console.log("borocode:", d.borocode, borocode)


            if (d.borocode == 1) {
                Manhattan++;
            } else if (d.borocode == 2) {
                Bronx++;
            } else if (d.borocode == 3) {
                Brooklyn++;
            } else if (d.borocode == 4) {
                Queens++;
            } else {
                StatenIsland++;
            }
            boroughNumbers = [Manhattan, Bronx, Brooklyn, Queens, StatenIsland];
            boroughNames = ["Manhattan", "Bronx", "Brooklyn", "Queens", "Staten Island"];


        });
        console.log("the boro nums : ");
        console.log(boroughNumbers);
        for (i = 0; i < boroughNumbers.length; i++) {
            boroughNumbers[i] = Math.ceil(boroughNumbers[i] / 1000);
            console.log(boroughNumbers[i]);
        }
        var data = boroughNumbers;
        console.log("data " + data);
        //});
        //    return data;
        dataLoaded = true;
        makeGraph(data, boroughNames, title, currentGraph, xAxisText, yAxisText);


    });
}


function makeGraph(data, NAMES, title, currentGraph, xAxisText, yAxisText) {

    console.log("data has loaded, moving on");
    var names = NAMES;
    var graphWidth = 800;
    var graphHeight = d3.max(data) + 100;
    var marginLeft = 30
    var marginRight = 30
    var marginTop = 30
    var marginBottom = 30
    console.log(graphHeight)
    var paddingLR = 20;
    console.log("HELLO? " + data);
    var x = graphWidth / data.length;

    //create the svg field
    var svg = d3.select("#lab2")
        .append("svg")
        .attr("width", graphWidth)
        .attr("height", graphHeight)

    var Xscale = d3.scale.linear()
        .domain([0, 5]) //find the min and the max!
        .range([0, graphWidth - 100]);
    var Yscale = d3.scale.linear()
        .domain([d3.min(data), d3.max(data)]) //find the min and the max!
        .range([graphHeight, 0]); //
    var Xaxis = d3.svg.axis()
        .scale(Xscale);
    var Yaxis = d3.svg.axis()
        .orient('left')
        .scale(Yscale);

    svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .append('g')
        .style("fill", "#ADD8E6")


    svg.selectAll("dataNumbers")
        .data(data)
        .enter()
        .append("text")
        .text(function (d) {
            return d; // Value of the text
        })
        //    .attr("transform", function(d, i){
        //        return "translate(" + (150 * i) + ", 200)";
        //    })
        .attr("id", function (d, i) {
            return ("dataValue" + i);
        })
        .style("text-anchor", "middle")
        .style('opacity', '0.0')
        .style('fill', 'black')
        .style("font-family", "'Oswald', sans-serif")
        .attr("x", function (d, i) {
            return i * x + 130;
        })
        .attr("y", function (d, i) {
            return 78;
        })

    svg.selectAll("dataLabelX")
        .data(names)
        .enter()
        .append("text")
        .text(function (d) {
            return d; // Value of the text
        })
        .attr("id", function (d, i) {
            return ("dataLabel" + i);
        })
        .attr("x", function (d, i) {
            return i * x + 130;
        })
        .attr("y", function (d, i) {
            return graphHeight;
        })

    svg.selectAll("rect")
        .on("mouseover", function (d, i) {
            d3.select("#dataValue" + i).style('opacity', '1.0');
            d3.selectAll("#circ" + i).style("opacity", "1.0");
            d3.select("#rect" + i).style("fill", "turquoise");
            d3.select(this)
                .attr("width", (graphWidth / data.length - paddingLR) * 1.03)
            d3.select(this)
                .attr("y", function (d, i) {
                    return graphHeight - d - 20;
                })
                .attr("height", function (d) {
                    return (d + 30);
                })
            console.log("X" + x);
        })
        .on('mouseout', function (d, i) {
            d3.select("#dataValue" + i).style('opacity', '0.0');
            d3.select("#rect" + i).style("fill", "#267257");
            d3.selectAll("#circ" + i).style("opacity", "0.0");
            d3.select(this)
                .attr("width", (graphWidth / data.length - paddingLR))
                .attr("y", function (d, i) {
                    return graphHeight - d;
                })
                .attr("height", function () {
                    return d;
                })

            console.log('out');
        })



        //        .on("click", function () {
        //            //isThisGraphTwo: a boolean variable that shows if the current graph is graph 2. It is passed into here as false, then that is passed onto the function. In the function, if its false, it will throw it into graph 3 dataset. If true, it will set it as false and make the second graph
        //            if (currentGraph == 1) {
        //                dataRecorderType();
        //            } else if (currentGraph == 2) {
        //                airQuality();
        //            } else {
        //                treeBorough();
        //            }
        //        })

        .attr("id", function (d, i) {
            return ("rect" + i);
        })
        .attr("x", function (d, i) {
            return i * x + 50;
        })
        .attr("y", function (d) {
            return graphHeight - d;
        })
        .attr("width", graphWidth / data.length - paddingLR)
        .attr("height", function (d) {
            return d;
        })

//    var btn = document.createElement("BUTTON");
//    var t = document.createTextNode("CLICK ME");
//    btn.appendChild(t);
//    document.getElementById('lab2').appendChild(btn);

    $("#showAll").click(function () {
         d3.selectAll("#circ0").style("opacity", "1.0");
        d3.selectAll("#circ1").style("opacity", "1.0");
        d3.selectAll("#circ2").style("opacity", "1.0");
        d3.selectAll("#circ3").style("opacity", "1.0");
        d3.selectAll("#circ4").style("opacity", "1.0");
     });
    
     $("#hideAll").click(function () {
         d3.selectAll("#circ0").style("opacity", "0.0");
        d3.selectAll("#circ1").style("opacity", "0.0");
        d3.selectAll("#circ2").style("opacity", "0.0");
        d3.selectAll("#circ3").style("opacity", "0.0");
        d3.selectAll("#circ4").style("opacity", "0.0");
     });
    
    $("#nitrogen").click(function () {
         d3.selectAll(".element0").style("opacity", "1.0");
     });
    $("#fpm").click(function () {
         d3.selectAll(".element1").style("opacity", "1.0");
     });
    $("#nitricOxide").click(function () {
         d3.selectAll(".element2").style("opacity", "1.0");
     });
    $("#ozone").click(function () {
         d3.selectAll(".element3").style("opacity", "1.0");
     });
    $("#sulfureDioxide").click(function () {
         d3.selectAll(".element4").style("opacity", "1.0");
     });
    $("#carbonDioxide").click(function () {
         d3.selectAll(".element5").style("opacity", "1.0");
     });


    d3.select("div").insert("p").attr("id", "textTitle").text(xAxisText);

    svg.append('text')
        .attr('x', graphWidth / 2 + 30)
        .attr('y', 40)
        .attr('text-anchor', 'middle')
        .attr("id", "textTitle")
        .text(title)

    svg.append('text')
        .attr('x', (graphHeight / 2) - 280)
        .attr('y', 30 / 2.4)
        .style("fill", "black")
        .style("font-family", "'Oswald', sans-serif")
        .attr('transform', 'rotate(-90)')
        .attr('text-anchor', 'left')
        .text(yAxisText)

    svg.append("g")
        .attr("transform", "translate(50, 40)")
        .call(Yaxis);

    svg.selectAll("labelsBar")
        .data(data)
        .enter()
        .append("labelsBar")
        .append("text")
        .text(function (d) {
            return d; //the data is being represented in thousands
        })
        .attr("x", function (d, i) {
            return i * x + 30;
        })
        .attr("y", function (d, i) {
            return graphHeight - d;
        })
        .style("fill", "blue");

    //    airQuality();
    //    dataRecorderType
    if (!secondGraphMade) {
        console.log(!secondGraphMade)
        airQuality();
    }
}
ScatterPlot();
TwoAxisParallelGraph();
parallelGraph();

////Data Recorder Type
////--------------------------------------------------------------------------------------------------------------------------------------

//function dataRecorderType() {
//    currentGraph = 2;
//    var title = "Numbers per Data Recorder Type (In Hundred-Thousands)";
//    var TreesCountStaff = 0;
//    var Volunteer = 0;
//    var NYCParksStaff = 0
//    var userTypesNumbers;
//    var userTypesNames;
//
//    d3.csv("treeData.csv").get(function (error, treeData) {
//        console.log("file read")
//        treeData.forEach(function (d) {
//            if ((d.user_type) == ("TreesCount Staff")) {
//                TreesCountStaff++;
//            } else if (d.user_type == ("Volunteer")) {
//                Volunteer++;
//            } else {
//                NYCParksStaff++;
//            }
//            userTypesNumbers = [TreesCountStaff, Volunteer, NYCParksStaff];
//            userTypesNames = ["Trees Count Staff", "Volunteer", "NYC Parks Staff"];
//
//        });
//        console.log(userTypesNumbers);
//        for (i = 0; i < userTypesNumbers.length; i++) {
//            userTypesNumbers[i] = Math.ceil(userTypesNumbers[i] / 1000);
//            console.log(userTypesNumbers[i]);
//        }
//        var data = userTypesNumbers;
//        //});
//        //    return data;
//        dataLoaded = true;
//    });
//}

//AIR QUALITY
//--------------------------------------------------------------------------------------------------------------------------------------
var airQualityArray = [];

function airQuality() {
    console.log("296");

    var title = "Air Quality per borough (Elemental Carbon)";
    var currentGrapb = 3;
    var ManhattanCarbon = 0;
    var MCounter = 0;

    var BronxCarbon = 0;
    var BCounter = 0;

    var BrooklynCarbon = 0;
    var BYCounter = 0;

    var QueensCarbon = 0;
    var QCounter = 0;

    var StatenIslandCarbon = 0;
    var SCounter = 0;

    var boroughCarbonNumbers;
    var boroughCarbonNames;


    d3.csv("airQuality.csv").get(function (error, data) {
        console.log("file read")
        data.forEach(function (d) {
            d.indicator_id = +d.indicator_id;
            d.geo_entity_id = +d.geo_entity_id;
            console.log(d.indicator_id)
            if (d.indicator_id == 375) {
                console.log("yes 370");
                console.log(d.geo_entity_id);
                if (100 <= d.geo_entity_id && 199 >= d.geo_entity_id) {
                    console.log("yes Manhattan");
                    console.log(d.data_value);
                    d.data_value = +d.data_value;
                    console.log(d.data_value);
                    ManhattanCarbon = ManhattanCarbon + d.data_value;
                    console.log("Manhattan Carbon is now " + ManhattanCarbon)
                    MCounter++;
                } else if (200 <= d.geo_entity_id && 299 >= d.geo_entity_id) {
                    console.log("yes bronx");
                    d.data_value = +d.data_value;
                    BronxCarbon = BronxCarbon + d.data_value;
                    BCounter++
                } else if (300 <= d.geo_entity_id && 399 >= d.geo_entity_id) {
                    console.log("yes broooklyn");
                    d.data_value = +d.data_value;
                    BrooklynCarbon = BrooklynCarbon + d.data_value;
                    BYCounter++;
                } else if (400 <= d.geo_entity_id && 499 >= d.geo_entity_id) {
                    console.log("yes queens");
                    d.data_value = +d.data_value;
                    QueensCarbon = QueensCarbon + d.data_value;
                    QCounter++;
                } else if (500 <= d.geo_entity_id && 599 >= d.geo_entity_id) {
                    console.log("yes staten island");
                    d.data_value = +d.data_value;
                    StatenIslandCarbon = StatenIslandCarbon + d.data_value;
                    SCounter++;
                }
            }
        });
        nitrogenDioxide(3);
        boroughCarbonNumbers = [ManhattanCarbon, BronxCarbon, BrooklynCarbon, QueensCarbon, StatenIslandCarbon];
        //console.log("ARRAY: " + boroughCarbonNumbers);
        console.log(MCounter + "MCOUNTER");
        boroughCarbonNames = ["Manhattan", "Bronx", "Brooklyn", "Queens", "Staten Island"];

        boroughCarbonNumbers[0] = Math.ceil(boroughCarbonNumbers[0] / MCounter);
        boroughCarbonNumbers[1] = Math.ceil(boroughCarbonNumbers[1] / BCounter);
        boroughCarbonNumbers[2] = Math.ceil(boroughCarbonNumbers[2] / BYCounter);
        boroughCarbonNumbers[3] = Math.ceil(boroughCarbonNumbers[3] / QCounter);
        boroughCarbonNumbers[4] = Math.ceil(boroughCarbonNumbers[4] / SCounter);

        airQualityArray.push(boroughCarbonNumbers[0]);
        airQualityArray.push(boroughCarbonNumbers[1]);
        airQualityArray.push(boroughCarbonNumbers[2]);
        airQualityArray.push(boroughCarbonNumbers[3]);
        airQualityArray.push(boroughCarbonNumbers[4]);
        console.log("array" + airQualityArray);

        var data = boroughCarbonNumbers;
        console.log(data);
        dataLoaded = true;
        makeGraph(data, boroughCarbonNames, title, currentGraph, "Boroughs", "Mean Amount of Pollutant (In Thousands)");
    });
    secondGraphMade = true;

};
