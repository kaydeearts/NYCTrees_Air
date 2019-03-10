function makeBivariateScatterPlot(data1, data2, text1, text2) {

    console.log("Making Bivariate Scatterplot");
    var data1Text = text1;
    var data2Text = text2;
    var graphWidth = 800;
    var graphHeight = 500;
    var marginLeft = 30
    var marginRight = 30
    var marginTop = 30
    var marginBottom = 30
    graphWidth = graphWidth - marginLeft - marginRight;
    graphWidth = graphHeight - marginTop - marginBottom;
    var yValueCounter = -1;

    /* 
     * value accessor - returns the value to encode for a given data object.
     * scale - maps value to a visual display encoding, such as a pixel position.
     * map function - maps from data value to display value
     * axis - sets up axis
     */

    // setup x 
    var xValue = function (d) {
            yValueCounter++;
            return d;

        }, // data -> value          //RETURNS THE VALUE OF CALORIES
        xScale = d3.scale.linear().range([0, graphWidth]), // value -> display     //?
        xMap = function (d) {
            return xScale(xValue(d));
        }, // data -> display   //?
        xAxis = d3.svg.axis().scale(xScale).orient("bottom"); //X AXIS

    // setup y
    var yValue = function (d) {
            return 200; //data2[yValueCounter]
        }, // data -> value    //Add protein data
        yScale = d3.scale.linear().range([graphHeight, 0]), // value -> display
        yMap = function (d) {
            return yScale(yValue(d));
        }, // data -> display
        yAxis = d3.svg.axis().scale(yScale).orient("left"); //Y AXIS

    // setup fill color
    var cValue = function (d) {
            return d.Manufacturer;
        },
        color = d3.scale.category10();

    // add the graph canvas to the body of the webpage
    var svg = d3.select("#bivariateScatterplot").append("svg") //Add to webpage
        .attr("width", graphWidth + marginLeft + marginRight)
        .attr("height", graphHeight + marginBottom + marginTop)
        .append("g")
        .attr("transform", "translate(" + marginLeft + "," + marginTop + ")");
    console.log("SVG");


    // don't want dots overlapping axis, so add in buffer to data domain
    xScale.domain([d3.min(data1, xValue) - 1, d3.max(data1, xValue) + 1]);
    yScale.domain([d3.min(data2, yValue) - 1, d3.max(data2, yValue) + 1]);

    // x-axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + graphHeight + ")")
        .call(xAxis)
        .append("text")
        .attr("class", "label")
        .attr("x", graphWidth)
        .attr("y", -6)
        .style("text-anchor", "end")
        .text(data1Text);
    console.log("X AXIS");

    // y-axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("class", "label")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text(data2Text);



    svg.selectAll(".dot")
        .data(data1)
        .enter().append("circle")
        .attr("class", "dot")
        .attr("r", 3.5)
        .attr("cx", xMap)
        .attr("cy", yMap)
        .style("fill", function (d) {
            return color(cValue(d));
        });

    // draw legend
    var legend = svg.selectAll(".legend")
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function (d, i) {
            return "translate(0," + i * 20 + ")";
        });

    // draw legend colored rectangles
    legend.append("rect")
        .attr("x", graphWidth - 18)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", 'blue');

    // draw legend text
    legend.append("text")
        .attr("x", width - 24)
        .attr("y", 9)
        .attr("dy", ".35em")
        .style("text-anchor", "end")
        .text("HELLO")
}

///////// 10 by 10 Scatterplot /////////////

function Matrix(options) {
    var margin = {
            top: 50,
            right: 50,
            bottom: 100,
            left: 100
        },
        width = 350,
        height = 350,
        data = options.data,
        container = options.container,
        labelsData = options.labels,
        startColor = options.start_color,
        endColor = options.end_color;

    var widthLegend = 100;

    var maxValue = d3.max(data, function (layer) {
        return d3.max(layer, function (d) {
            return d;
        });
    });
    var minValue = d3.min(data, function (layer) {
        return d3.min(layer, function (d) {
            return d;
        });
    });

    var numrows = data.length;
    var numcols = data[0].length;

    var svg = d3.select(container).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var background = svg.append("rect")
        .style("stroke", "black")
        .style("stroke-width", "2px")
        .attr("width", width)
        .attr("height", height);

    var x = d3.scale.ordinal()
        .domain(d3.range(numcols))
        .rangeBands([0, width]);

    var y = d3.scale.ordinal()
        .domain(d3.range(numrows))
        .rangeBands([0, height]);

    var colorMap = d3.scale.linear()
        .domain([minValue, maxValue])
        .range([startColor, endColor]);

    var row = svg.selectAll(".row")
        .data(data)
        .enter().append("g")
        .attr("class", "row")
        .attr("transform", function (d, i) {
            return "translate(0," + y(i) + ")";
        });

    var cell = row.selectAll(".cell")
        .data(function (d) {
            return d;
        })
        .enter().append("g")
        .attr("class", "cell")
        .attr("transform", function (d, i) {
            return "translate(" + x(i) + ", 0)";
        });

    cell.append('rect')
        .attr("width", x.rangeBand())
        .attr("height", y.rangeBand())
        .style("stroke-width", 0);

    cell.append("text")
        .attr("dy", ".32em")
        .attr("x", x.rangeBand() / 2)
        .attr("y", y.rangeBand() / 2)
        .attr("text-anchor", "middle")
        .style("fill", function (d, i) {
            return d >= maxValue / 2 ? 'white' : 'black';
        })
        .text(function (d, i) {
            return d;
        });

    row.selectAll(".cell")
        .data(function (d, i) {
            return data[i];
        })
        .style("fill", colorMap);

    var labels = svg.append('g')
        .attr('class', "labels");

    var columnLabels = labels.selectAll(".column-label")
        .data(labelsData)
        .enter().append("g")
        .attr("class", "column-label")
        .attr("transform", function (d, i) {
            return "translate(" + x(i) + "," + height + ")";
        });

    columnLabels.append("line")
        .style("stroke", "black")
        .style("stroke-width", "1px")
        .attr("x1", x.rangeBand() / 2)
        .attr("x2", x.rangeBand() / 2)
        .attr("y1", 0)
        .attr("y2", 5);

    columnLabels.append("text")
        .attr("x", 0)
        .attr("y", y.rangeBand() / 2)
        .attr("dy", ".82em")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-60)")
        .text(function (d, i) {
            return d;
        });

    var rowLabels = labels.selectAll(".row-label")
        .data(labelsData)
        .enter().append("g")
        .attr("class", "row-label")
        .attr("transform", function (d, i) {
            return "translate(" + 0 + "," + y(i) + ")";
        });

    rowLabels.append("line")
        .style("stroke", "black")
        .style("stroke-width", "1px")
        .attr("x1", 0)
        .attr("x2", -5)
        .attr("y1", y.rangeBand() / 2)
        .attr("y2", y.rangeBand() / 2);

    rowLabels.append("text")
        .attr("x", -8)
        .attr("y", y.rangeBand() / 2)
        .attr("dy", ".32em")
        .attr("text-anchor", "end")
        .text(function (d, i) {
            return d;
        });



    var y = d3.scale.linear()
        .range([height, 0])
        .domain([minValue, maxValue]);

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("right");

    key.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(41," + margin.top + ")")
        .call(yAxis)
}

///////// 5 by 5 Scatterplot /////////////

function ScatterPlot() {
    console.log("scatter plot")
    var width = 500;
    var size = 100;
    var padding = 25;




    var x = d3.scale.linear()
        .range([padding / 2, size - padding / 2]);

    var y = d3.scale.linear()
        .range([size - padding / 2, padding / 2]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .ticks(4);

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(4);

    var color = d3.scale.category10();

    function indicatorColor(d) {
        if (d == 375) {
            console.log("NITROGEN DIOXIDE: YELLOW");
            return 'yellow';
        } else if (d == 365) {
            console.log("FPM: BLUE");
            return 'blue';
        } else if (d == 391) {
            console.log("NITRIC OXIDE: PURPLE");
            return 'purple';
        } else if (d == 386) {
            console.log("OZONE: GREEN");
            return 'green';
        } else if (d == 383) {
            console.log("SULFUR DIOXIDE: WHITE");
            return 'white';
        } else if (d == 370) {
            console.log("CARBON: ORANGE");
            return 'orange';
        } else {
            return 'transparent';
        }
    };

    function indicatorID(d) {
        if (d == 375) {
            console.log("NITROGEN DIOXIDE: YELLOW");
            return 0;
        } else if (d == 365) {
            console.log("FPM: BLUE");
            return 1;
        } else if (d == 391) {
            console.log("NITRIC OXIDE: PURPLE");
            return 2;
        } else if (d == 386) {
            console.log("OZONE: GREEN");
            return 3;
        } else if (d == 383) {
            console.log("SULFUR DIOXIDE: WHITE");
            return 4;
        } else if (d == 370) {
            console.log("CARBON: ORANGE");
            return 5;
        }
    };

    function boroughID(d) {
        if (100 <= d && 199 >= d) {
            console.log("MANHATTAN: 0");
            return 0;
        } else if (200 <= d && 299 >= d) {
            console.log("BRONX: 1");
            return 1;
        } else if (300 <= d && 399 >= d) {
            console.log("BROOKLYN: 2");
            return 2;
        } else if (400 <= d && 499 >= d) {
            console.log("QUEENS: 3");
            return 3;
        } else if (500 <= d && 599 >= d) {
            console.log("STATEN ISLAND: 4");
            return 4;
        }
    };


    d3.csv("airQuality.csv", function (data) {

        data.forEach(function (d) {
            d.indicator_id = +d.indicator_id;
            d.geo_entity_id = +d.geo_entity_id;
            console.log("INDICATOR ID " + d.indicator_id)
            if (100 <= d.geo_entity_id && 199 >= d.geo_entity_id) {
                console.log("yes Manhattan");
            } else if (200 <= d.geo_entity_id && 299 >= d.geo_entity_id) {
                console.log("BRONX");
            } else if (300 <= d.geo_entity_id && 399 >= d.geo_entity_id) {
                console.log("BROOKLYN");
            } else if (400 <= d.geo_entity_id && 499 >= d.geo_entity_id) {
                console.log("QUEENS");
            } else if (500 <= d.geo_entity_id && 599 >= d.geo_entity_id) {
                console.log("STATEN ISLAND");
            }
        });
        var domainByTrait = {},
            traits = d3.keys(data[0]).filter(function (d) {
                return d !== "unreliability_flag";
            }),
            n = traits.length;


        traits.forEach(function (trait) {
            domainByTrait[trait] = d3.extent(data, function (d) {
                return d[trait];
            });
        });

        xAxis.tickSize(size * n);
        yAxis.tickSize(-size * n);

        //This is the part where the crossed points are added; for length of each y axis and x axis it takes the data of that 'cell' and attaches it there to that x and y axis. it then returns the whole thing comppiled.
        function cross(a, b) {
            var c = [],
                n = a.length,
                m = b.length,
                i, j;
            for (i = -1; ++i < n;)
                for (j = -1; ++j < m;) c.push({
                    x: a[i],
                    i: i,
                    y: b[j],
                    j: j
                });
            return c;
        }

        //this is where the graph is appended
        var svg = d3.select("#lab2").append("svg")
            .attr("width", size * n + padding)
            .attr("height", size * n + padding)
            .append("g")
            .attr("transform", "translate(" + padding + "," + padding / 2 + ")")
            .attr("id", "scatterplot")


        svg.selectAll(".x.axis")
            .data(traits)
            .enter().append("g")
            .attr("class", "x axis")
            .attr("transform", function (d, i) {
                return "translate(" + (n - i - 1) * size + ",0)";
            })
            .each(function (d) {
                x.domain(domainByTrait[d]);
                d3.select(this).call(xAxis);
            });

        svg.selectAll(".y.axis")
            .data(traits)
            .enter().append("g")
            .attr("class", "y axis")
            .attr("transform", function (d, i) {
                return "translate(0," + i * size + ")";
            })
            .each(function (d) {
                y.domain(domainByTrait[d]);
                d3.select(this).call(yAxis);
            });

        var cell = svg.selectAll(".cell")
            .data(cross(traits, traits))
            .enter().append("g")
            .attr("class", "cell")
            .attr("transform", function (d) {
                return "translate(" + (n - d.i - 1) * size + "," + d.j * size + ")";
            })
            .each(plot);

        // Titles for the diagonal.
        cell.filter(function (d) {
                return d.i === d.j;
            }).append("text")
            .attr("dy", ".50em")
            .text(function (d) {
                return d.x;
            });

        function plot(p) {
            var cell = d3.select(this);

            x.domain(domainByTrait[p.x]);
            y.domain(domainByTrait[p.y]);

            cell.append("rect")
                .attr("class", "frame")
                .attr("x", padding / 2)
                .attr("y", padding / 2)
                .attr("width", size - padding)
                .attr("height", size - padding)
                .attr("id", "noFillRect");


            cell.selectAll("circle")
                .data(data)
                .enter().append("circle")
                .attr("cx", function (d) {
                    return x(d[p.x]);
                })
                .attr("cy", function (d) {
                    return y(d[p.y]);
                })
                .attr("r", 4)
                .style("fill", function (d) {
                    return indicatorColor(d.indicator_id);
                })
                .attr("id", function (d) {
                    console.log("circ" + boroughID(d.geo_entity_id));
                    return ("circ" + boroughID(d.geo_entity_id));
                })
                .attr("class", function (d) {
                    return ("element" + indicatorID(d.indicator_id));
                })
                .style("opacity", "0");;
        }

        svg.selectAll("#circ2")
            .on("mouseover", function (d, i) {
                console.log("MOUSEOVER")
                //                d3.select(this).get(i)
                //                d3.selectAll("#circ2").style("fill", "turquoise");
                //                d3.selectAll("#circ0").style("opacity", "0");
                //                d3.selectAll("#circ1").style("opacity", "0");
                //                d3.selectAll("#circ3").style("opacity", "0");
                //                d3.selectAll("#circ4").style("opacity", "0");
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
                console.log("MOUSEOUT")

                d3.selectAll("#circ2").style("fill", 'red');
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
    });

}

// P A R A L L E L  G R A P H //////////////////////////////////////////////////////////////////////////////////////////////

function TwoAxisParallelGraph() {

    var margin = {
            top: 30,
            right: 30,
            bottom: 30,
            left: 30
        },
        width = 500 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;

    var x = d3.scale.ordinal().rangePoints([0, width], 1),
        y = {},
        dragging = {};

    var line = d3.svg.line(),
        axis = d3.svg.axis().orient("left"),
        background,
        foreground;

    var svg = d3.select("#lab2").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.csv("airQuality.csv", function (error, data) {

        // Extract the list of dimensions and create a scale for each.
        x.domain(dimensions = d3.keys(data[0]).filter(function (d) {
            return d != "unreliability_flag" && d != "year_id" && d != "geo_type_id" && d != "indicator_id" && (y[d] = d3.scale.linear()
                .domain(d3.extent(data, function (p) {
                    return +p[d];
                }))
                .range([height, 0]));
        }));

        // Add grey background lines for context.
        background = svg.append("g")
            .attr("class", "background")
            .selectAll("path")
            .data(data)
            .enter().append("path")
            .attr("d", path);

        // Add blue foreground lines for focus.
        foreground = svg.append("g")
            .attr("class", "foreground")
            .selectAll("path")
            .data(data)
            .enter().append("path")
            .attr("d", path);

        // Add a group element for each dimension.
        var g = svg.selectAll(".dimension")
            .data(dimensions)
            .enter().append("g")
            .attr("class", "dimension")
            .attr("transform", function (d) {
                return "translate(" + x(d) + ")";
            })


        // Add an axis and title.
        g.append("g")
            .attr("class", "axis")
            .each(function (d) {
                d3.select(this).call(axis.scale(y[d]));
            })
            .append("text")
            .style("text-anchor", "middle")
            .attr("y", -9)
            .text(function (d) {
                return d;
            });


     // Add and store a brush for each axis.
        g.append("g")
            .attr("class", "brush")
            .each(function (d) {
                d3.select(this).call(y[d].brush = d3.svg.brush().y(y[d]).on("brushstart", brushstart).on("brush", brush));
            })
            .selectAll("rect")
            .attr("x", -8)
            .attr("width", 16);
    });

    function position(d) {
        var v = dragging[d];
        return v == null ? x(d) : v;
    }

    function transition(g) {
        return g.transition().duration(500);
    }

    // Returns the path for a given data point.
    function path(d) {
        return line(dimensions.map(function (p) {
            return [position(p), y[p](d[p])];
        }));
    }

    function brushstart() {
        d3.event.sourceEvent.stopPropagation();
    }

    // Handles a brush event, toggling the display of foreground lines.
    function brush() {
        var actives = dimensions.filter(function (p) {
                return !y[p].brush.empty();
            }),
            extents = actives.map(function (p) {
                return y[p].brush.extent();
            });
        foreground.style("display", function (d) {
            return actives.every(function (p, i) {
                return extents[i][0] <= d[p] && d[p] <= extents[i][1];
            }) ? null : "none";
        });
    }





}

/////////////////////////////////////////////////////////////////////////////////////////////////
function parallelGraph() {

    var graphWidth = 500;
    var graphHeight = 300;
    var marginLeft = 30;
    var marginRight = 30;
    var marginTop = 30;
    var marginBottom = 30;
    var width = graphWidth - marginLeft - marginRight;
    var height = graphHeight - marginTop - marginBottom;

    var x = d3.scale.ordinal().rangePoints([0, width], 1),
        y = {},
        dragging = {};

    var line = d3.svg.line(),
        axis = d3.svg.axis().orient("left"),
        background,
        foreground;

    var svg = d3.select("#lab2").append("svg")
        .attr("width", graphWidth)
        .attr("height", graphHeight)
        .append("g")
        .attr("transform", "translate(" + marginLeft + "," + marginTop + ")");

    d3.csv("airQuality.csv", function (error, data) {

        // Extract the list of dimensions and create a scale for each.
        x.domain(dimensions = d3.keys(data[0]).filter(function (d) {
            return d != "unreliability_flag" && (y[d] = d3.scale.linear()
                .domain(d3.extent(data, function (p) {
                    return +p[d];
                }))
                .range([height, 0]));
        }));

        // Add grey background lines for context.
        background = svg.append("g")
            .attr("class", "background")
            .selectAll("path")
            .data(data)
            .enter().append("path")
            .attr("d", path);

        // Add blue foreground lines for focus.
        foreground = svg.append("g")
            .attr("class", "foreground")
            .selectAll("path")
            .data(data)
            .enter().append("path")
            .attr("d", path);

        // Add a group element for each dimension.
        var g = svg.selectAll(".dimension")
            .data(dimensions)
            .enter().append("g")
            .attr("class", "dimension")
            .attr("transform", function (d) {
                return "translate(" + x(d) + ")";
            })


        // Add an axis and title.
        g.append("g")
            .attr("class", "axis")
            .each(function (d) {
                d3.select(this).call(axis.scale(y[d]));
            })
            .append("text")
            .style("text-anchor", "middle")
            .attr("y", -9)
            .text(function (d) {
                return d;
            });

        // Add and store a brush for each axis.
        g.append("g")
            .attr("class", "brush")
            .each(function (d) {
                d3.select(this).call(y[d].brush = d3.svg.brush().y(y[d]).on("brushstart", brushstart).on("brush", brush));
            })
            .selectAll("rect")
            .attr("x", -8)
            .attr("width", 16);
    });

    function position(d) {
        var v = dragging[d];
        return v == null ? x(d) : v;
    }

    function transition(g) {
        return g.transition().duration(500);
    }

    // Returns the path for a given data point.
    function path(d) {
        return line(dimensions.map(function (p) {
            return [position(p), y[p](d[p])];
        }));
    }

    function brushstart() {
        d3.event.sourceEvent.stopPropagation();
    }

    // Handles a brush event, toggling the display of foreground lines.
    function brush() {
        var actives = dimensions.filter(function (p) {
                return !y[p].brush.empty();
            }),
            extents = actives.map(function (p) {
                return y[p].brush.extent();
            });
        foreground.style("display", function (d) {
            return actives.every(function (p, i) {
                return extents[i][0] <= d[p] && d[p] <= extents[i][1];
            }) ? null : "none";
        });
    }


}
