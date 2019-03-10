// T R E E S   P E R   B O R O U G H  ////////////////////////////////////////////////////////////////////////
function treeBorough(graphNumber) {
    console.log("Tree Borough Entered");
    //    d3.select("p").remove();
    //    d3.select("svg").remove();
    //    currentGraph = 1;
    console.log("this should be first");
    var title = "Trees Per Borough (In Hundred-Thousands)"
    var Manhattan = 0; //1
    var Bronx = 0; //2
    var Brooklyn = 0 //3
    var Queens = 0 //4
    var StatenIsland = 0 //5
    //    var dataLoaded = false;

    d3.csv("treeData.csv").get(function (error, treeData) {
        console.log("file read")
        var boroughNumbers; //array with data numbers
        treeData.forEach(function (d) {
            d.borocode = +d.borocode;
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

        //return data;

        //        dataLoaded = true;
        console.log("DATA  " + data);
        console.log("this should be second");
        var text = "Tree Amounts"
        if (graphNumber == 1) {
            setData(data, text);
        } else if (graphNumber == 2) {
            setData1(data);
        }
    });
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function treeBoroughLargeNumbers(graphNumber) {
    console.log("Tree Borough Entered");

    console.log("this should be first");
    var title = "Trees Per Borough (In Hundred-Thousands)"
    var Manhattan = 0; //1
    var Bronx = 0; //2
    var Brooklyn = 0 //3
    var Queens = 0 //4
    var StatenIsland = 0 //5
    //    var dataLoaded = false;

    d3.csv("treeData.csv").get(function (error, treeData) {
        console.log("file read")
        var boroughNumbers; //array with data numbers
        treeData.forEach(function (d) {
            d.borocode = +d.borocode;
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

        //return data;

        //        dataLoaded = true;
        console.log("DATA  " + data);
        console.log("this should be second");
        var text = "Tree Amounts"
        if (graphNumber == 1) {
            setData(data, text);
        } else if (graphNumber == 2) {
            setData1(data);
        }
    });
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// D A T A  R E C O R D E R  T Y P E  ////////////////////////////////////////////////////////////////////////
function dataRecorderType(graphNumber) {
    console.log("Data Recorder Type");
    var title = "Numbers per Data Recorder Type (In Hundred-Thousands)";
    var TreesCountStaff = 0;
    var Volunteer = 0;
    var NYCParksStaff = 0
    var userTypesNumbers;
    var userTypesNames;

    d3.csv("treeData.csv").get(function (error, treeData) {
        console.log("file read")
        treeData.forEach(function (d) {
            if ((d.user_type) == ("TreesCount Staff")) {
                TreesCountStaff++;
            } else if (d.user_type == ("Volunteer")) {
                Volunteer++;
            } else {
                NYCParksStaff++;
            }
            userTypesNumbers = [TreesCountStaff, Volunteer, NYCParksStaff];
            userTypesNames = ["Trees Count Staff", "Volunteer", "NYC Parks Staff"];

        });
        console.log(userTypesNumbers);
        for (i = 0; i < userTypesNumbers.length; i++) {
            userTypesNumbers[i] = Math.ceil(userTypesNumbers[i] / 1000);
            console.log(userTypesNumbers[i]);
        }
        var data = userTypesNumbers;
        //});
        // return data;
        //        dataLoaded = true;
        console.log("DATA  " + data);
        var text = "Recorder Types";
        if (graphNumber == 1) {
            setData(data, text);
        } else if (graphNumber == 2) {
            setData2(data);
        }
        //        makeGraph(data, userTypesNames, title, currentGraph);
    });
}

// S I D E W A L K  S T A T U S  ////////////////////////////////////////////////////////////////////////
function sidewalk(graphNumber) {
    console.log("Sidewalk Status");
    var title = "Sidewalk status";
    var NoDamage = 0;
    var Damage = 0;
    var sidewalkNumbers;
    var sidewalkNames;

    d3.csv("treeData.csv").get(function (error, treeData) {
        console.log("file read")
        treeData.forEach(function (d) {
            if ((d.sidewalk) == ("NoDamage")) {
                NoDamage++;
            } else {
                Damage++;
            }
            sidewalkNumbers = [NoDamage, Damage];
            sidewalkNames = ["No Damage", "Damage"];
        });
        console.log(sidewalkNumbers);
        for (i = 0; i < sidewalkNumbers.length; i++) {
            sidewalkNumbers[i] = Math.ceil(sidewalkNumbers[i] / 1000);
            console.log(sidewalkNumbers[i]);
        }
        var data = sidewalkNumbers;
        //});
        // return data;
        //        dataLoaded = true;
        if (graphNumber == 1) {
            setData(data, text);
        } else if (graphNumber == 2) {
            console.log("two is detected");
            setData3(data);

        }
        //        makeGraph(data, userTypesNames, title, currentGraph);
    });
}

// H E A L T H   S T A T U S  ////////////////////////////////////////////////////////////////////////
function health(graphNumber) {
    console.log("Health Status");
    var title = "Health Status";
    var Fair = 0;
    var Good = 0;
    var Poor = 0;
    var healthNumbers;
    var healthNames;

    d3.csv("treeData.csv").get(function (error, treeData) {
        console.log("file read")
        treeData.forEach(function (d) {
            if ((d.health) == ("Fair")) {
                Fair++;
            } else if ((d.health) == ("Good")) {
                Good++;
            } else {
                Poor++;
            }
            healthNumbers = [Fair, Good, Poor];
            healthNames = ["Good", "Fair", "Poor"];
        });
        console.log(healthNumbers);
        for (i = 0; i < healthNumbers.length; i++) {
            healthNumbers[i] = Math.ceil(healthNumbers[i] / 1000);
            console.log(healthNumbers[i]);
        }
        var data = healthNumbers;
        //});
        // return data;
        //        dataLoaded = true;
        if (graphNumber == 1) {
            setData(data, text);
            console.log("UM HELLO???");
        } else if (graphNumber == 2) {
            setData4(data);

        }
        //        makeGraph(data, userTypesNames, title, currentGraph);
    });
}

// N I T R O G E N  D I O X I D E  ////////////////////////////////////////////////////////////////////////
function nitrogenDioxide(graphNumber) {
    console.log("Nitrogen Dioxide Graph");
    //    d3.select("p").remove();
    //    d3.select("svg").remove();
    var title = "Nitrogen Dioxide";
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
        boroughCarbonNumbers = [ManhattanCarbon, BronxCarbon, BrooklynCarbon, QueensCarbon, StatenIslandCarbon];
        console.log("ARRAY: " + boroughCarbonNumbers);
        console.log(MCounter + "MCOUNTER");
        boroughCarbonNames = ["Manhattan", "Bronx", "Brooklyn", "Queens", "Staten Island"];

        boroughCarbonNumbers[0] = Math.ceil(boroughCarbonNumbers[0] / MCounter);
        boroughCarbonNumbers[1] = Math.ceil(boroughCarbonNumbers[1] / BCounter);
        boroughCarbonNumbers[2] = Math.ceil(boroughCarbonNumbers[2] / BYCounter);
        boroughCarbonNumbers[3] = Math.ceil(boroughCarbonNumbers[3] / QCounter);
        boroughCarbonNumbers[4] = Math.ceil(boroughCarbonNumbers[4] / SCounter);
        
        

        var data = boroughCarbonNumbers;
        //        console.log(data);
        //        dataLoaded = true;

        if (graphNumber == 1) {
            setData(data, text);
        } else if (graphNumber == 2) {
            setData5(data);
        } else if (graphNumber == 3) {
            airQualityArray.push(boroughCarbonNumbers[0]);
            airQualityArray.push(boroughCarbonNumbers[1]);
            airQualityArray.push(boroughCarbonNumbers[2]);
            airQualityArray.push(boroughCarbonNumbers[3]);
            airQualityArray.push(boroughCarbonNumbers[4]);
            console.log("array" + airQualityArray);
        }
        // makeGraph(data, boroughCarbonNames, title, currentGraph);

    });
    
};

// F I N E  P A R T I C U L A T E  M A T T E R ////////////////////////////////////////////////////////////////////////
function FPM(graphNumber) {
    console.log("Fine Particular Matter");
    var title = "Fine Particular Matter";
    //    var currentGraph = 3;
    var ManhattanFPM = 0;
    var MCounterFPM = 0;

    var BronxCarbonFPM = 0;
    var BCounterFPM = 0;

    var BrooklynCarbonFPM = 0;
    var BYCounterFPM = 0;

    var QueensCarbonFPM = 0;
    var QCounterFPM = 0;

    var StatenIslandCarbonFPM = 0;
    var SCounterFPM = 0;

    var boroughFPMNumbers;
    var boroughFPMNames;


    d3.csv("airQuality.csv").get(function (error, data) {
        console.log("file read")
        data.forEach(function (d) {
            d.indicator_id = +d.indicator_id;
            d.geo_entity_id = +d.geo_entity_id;
            console.log(d.indicator_id)
            if (d.indicator_id == 365) {
                console.log(d.geo_entity_id);
                if (100 <= d.geo_entity_id && 199 >= d.geo_entity_id) {
                    console.log("yes Manhattan");
                    d.data_value = +d.data_value;
                    console.log(d.data_value);
                    ManhattanFPM = ManhattanFPM + d.data_value;
                    //console.log("Manhattan Carbon is now " + ManhattanCarbon)
                    MCounterFPM++;
                } else if (200 <= d.geo_entity_id && 299 >= d.geo_entity_id) {
                    console.log("yes bronx");
                    d.data_value = +d.data_value;
                    BronxCarbonFPM = BronxCarbonFPM + d.data_value;
                    BCounterFPM++
                } else if (300 <= d.geo_entity_id && 399 >= d.geo_entity_id) {
                    console.log("yes broooklyn");
                    d.data_value = +d.data_value;
                    BrooklynCarbonFPM = BrooklynCarbonFPM + d.data_value;
                    BYCounterFPM++;
                } else if (400 <= d.geo_entity_id && 499 >= d.geo_entity_id) {
                    console.log("yes queens");
                    d.data_value = +d.data_value;
                    QueensCarbonFPM = QueensCarbonFPM + d.data_value;
                    QCounterFPM++;
                } else if (500 <= d.geo_entity_id && 599 >= d.geo_entity_id) {
                    console.log("yes staten island");
                    d.data_value = +d.data_value;
                    StatenIslandCarbonFPM = StatenIslandCarbonFPM + d.data_value;
                    SCounterFPM++;
                }
            }
        });
        boroughFPMNumbers = [ManhattanFPM, BronxCarbonFPM, BrooklynCarbonFPM, QueensCarbonFPM, StatenIslandCarbonFPM];
        console.log("ARRAY: " + boroughFPMNumbers);
        console.log(MCounterFPM + "MCOUNTER");
        boroughFPMNames = ["Manhattan", "Bronx", "Brooklyn", "Queens", "Staten Island"];

        boroughFPMNumbers[0] = Math.ceil(boroughFPMNumbers[0] / MCounterFPM);
        boroughFPMNumbers[1] = Math.ceil(boroughFPMNumbers[1] / BCounterFPM);
        boroughFPMNumbers[2] = Math.ceil(boroughFPMNumbers[2] / BYCounterFPM);
        boroughFPMNumbers[3] = Math.ceil(boroughFPMNumbers[3] / QCounterFPM);
        boroughFPMNumbers[4] = Math.ceil(boroughFPMNumbers[4] / SCounterFPM);

        var data = boroughFPMNumbers;
        //        console.log(data);
        //        dataLoaded = true;

        if (graphNumber == 1) {
            setData(data, text);
        } else if (graphNumber == 2) {
            setData6(data);
        }else if (graphNumber == 3) {
            airQualityArray.push(boroughFPMNumbers[0]);
            airQualityArray.push(boroughFPMNumbers[1]);
            airQualityArray.push(boroughFPMNumbers[2]);
            airQualityArray.push(boroughFPMNumbers[3]);
            airQualityArray.push(boroughFPMNumbers[4]);
            console.log("array" + airQualityArray);
        }
        // makeGraph(data, boroughCarbonNames, title, currentGraph);

    });
};

// N I T R I C  O X I D E  ////////////////////////////////////////////////////////////////////////
function nitricOxide(graphNumber) {
    console.log("Nitric oxide");
    var title = "Nitric Oxide";

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
            if (d.indicator_id == 391) {
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
        boroughCarbonNumbers = [ManhattanCarbon, BronxCarbon, BrooklynCarbon, QueensCarbon, StatenIslandCarbon];
        console.log("ARRAY: " + boroughCarbonNumbers);
        console.log(MCounter + "MCOUNTER");
        boroughCarbonNames = ["Manhattan", "Bronx", "Brooklyn", "Queens", "Staten Island"];

        boroughCarbonNumbers[0] = Math.ceil(boroughCarbonNumbers[0] / MCounter);
        boroughCarbonNumbers[1] = Math.ceil(boroughCarbonNumbers[1] / BCounter);
        boroughCarbonNumbers[2] = Math.ceil(boroughCarbonNumbers[2] / BYCounter);
        boroughCarbonNumbers[3] = Math.ceil(boroughCarbonNumbers[3] / QCounter);
        boroughCarbonNumbers[4] = Math.ceil(boroughCarbonNumbers[4] / SCounter);

        var data = boroughCarbonNumbers;
        //        console.log(data);
        //        dataLoaded = true;

        if (graphNumber == 1) {
            setData(data, text);
        } else if (graphNumber == 2) {
            setData7(data);
        }else if (graphNumber == 3) {
            airQualityArray.push( boroughCarbonNumbers[0]);
            airQualityArray.push( boroughCarbonNumbers[1]);
            airQualityArray.push( boroughCarbonNumbers[2]);
            airQualityArray.push( boroughCarbonNumbers[3]);
            airQualityArray.push( boroughCarbonNumbers[4]);
            console.log("array" + airQualityArray);
        }
        // makeGraph(data, boroughCarbonNames, title, currentGraph);

    });
};

// O Z O N E ////////////////////////////////////////////////////////////////////////
function ozone(graphNumber) {
    console.log("Ozone");
    var title = "Ozone";
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
            if (d.indicator_id == 386) {
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
        boroughCarbonNumbers = [ManhattanCarbon, BronxCarbon, BrooklynCarbon, QueensCarbon, StatenIslandCarbon];
        console.log("ARRAY: " + boroughCarbonNumbers);
        console.log(MCounter + "MCOUNTER");
        boroughCarbonNames = ["Manhattan", "Bronx", "Brooklyn", "Queens", "Staten Island"];

        boroughCarbonNumbers[0] = Math.ceil(boroughCarbonNumbers[0] / MCounter);
        boroughCarbonNumbers[1] = Math.ceil(boroughCarbonNumbers[1] / BCounter);
        boroughCarbonNumbers[2] = Math.ceil(boroughCarbonNumbers[2] / BYCounter);
        boroughCarbonNumbers[3] = Math.ceil(boroughCarbonNumbers[3] / QCounter);
        boroughCarbonNumbers[4] = Math.ceil(boroughCarbonNumbers[4] / SCounter);

        var data = boroughCarbonNumbers;
        //        console.log(data);
        //        dataLoaded = true;

        if (graphNumber == 1) {
            setData(data, text);
        } else if (graphNumber == 2) {
            setData8(data);
        }else if (graphNumber == 3) {
            airQualityArray.push( boroughCarbonNumbers[0]);
            airQualityArray.push( boroughCarbonNumbers[1]);
            airQualityArray.push( boroughCarbonNumbers[2]);
            airQualityArray.push( boroughCarbonNumbers[3]);
            airQualityArray.push( boroughCarbonNumbers[4]);
            console.log("array" + airQualityArray);
        }
        // makeGraph(data, boroughCarbonNames, title, currentGraph);

    });
};

// S U L F U R  D I O X I D E  ////////////////////////////////////////////////////////////////////////
function sulfureDioxide(graphNumber) {
    console.log("Sulfure Dioxide");
    var title = "Sulfure Dioxide";
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
            if (d.indicator_id == 383) {
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
        boroughCarbonNumbers = [ManhattanCarbon, BronxCarbon, BrooklynCarbon, QueensCarbon, StatenIslandCarbon];
        console.log("ARRAY: " + boroughCarbonNumbers);
        console.log(MCounter + "MCOUNTER");
        boroughCarbonNames = ["Manhattan", "Bronx", "Brooklyn", "Queens", "Staten Island"];

        boroughCarbonNumbers[0] = Math.ceil(boroughCarbonNumbers[0] / MCounter);
        boroughCarbonNumbers[1] = Math.ceil(boroughCarbonNumbers[1] / BCounter);
        boroughCarbonNumbers[2] = Math.ceil(boroughCarbonNumbers[2] / BYCounter);
        boroughCarbonNumbers[3] = Math.ceil(boroughCarbonNumbers[3] / QCounter);
        boroughCarbonNumbers[4] = Math.ceil(boroughCarbonNumbers[4] / SCounter);

        var data = boroughCarbonNumbers;
        console.log(boroughCarbonNumbers);
        console.log("SULFUR " + data);
        if (graphNumber == 1) {
            setData(data, text);
        } else if (graphNumber == 2) {
            setData9(data);
        }else if (graphNumber == 3) {
            airQualityArray.push( boroughCarbonNumbers[0]);
            airQualityArray.push( boroughCarbonNumbers[1]);
            airQualityArray.push( boroughCarbonNumbers[2]);
            airQualityArray.push( boroughCarbonNumbers[3]);
            airQualityArray.push( boroughCarbonNumbers[4]);
            console.log("array" + airQualityArray);
        }
        // makeGraph(data, boroughCarbonNames, title, currentGraph);

    });
};

// C A R B O N ////////////////////////////////////////////////////////////////////////
function carbon(graphNumber) {
    console.log("Carbon");
    var title = "Carbon";
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
            if (d.indicator_id == 370) {
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
        boroughCarbonNumbers = [ManhattanCarbon, BronxCarbon, BrooklynCarbon, QueensCarbon, StatenIslandCarbon];
        console.log("ARRAY: " + boroughCarbonNumbers);
        console.log(MCounter + " MCOUNTER");
        boroughCarbonNames = ["Manhattan", "Bronx", "Brooklyn", "Queens", "Staten Island"];

        boroughCarbonNumbers[0] = Math.ceil(boroughCarbonNumbers[0] / MCounter);
        boroughCarbonNumbers[1] = Math.ceil(boroughCarbonNumbers[1] / BCounter);
        boroughCarbonNumbers[2] = Math.ceil(boroughCarbonNumbers[2] / BYCounter);
        boroughCarbonNumbers[3] = Math.ceil(boroughCarbonNumbers[3] / QCounter);
        boroughCarbonNumbers[4] = Math.ceil(boroughCarbonNumbers[4] / SCounter);

        var data = boroughCarbonNumbers;
        //        console.log(data);
        //        dataLoaded = true;

        if (graphNumber == 1) {
            setData(data, text);
        } else if (graphNumber == 2) {
            setData10(data);
            console.log("TWOOOOOO")
        }else if (graphNumber == 3) {
            airQualityArray.push( boroughCarbonNumbers[0]);
            airQualityArray.push( boroughCarbonNumbers[1]);
            airQualityArray.push( boroughCarbonNumbers[2]);
            airQualityArray.push( boroughCarbonNumbers[3]);
            airQualityArray.push( boroughCarbonNumbers[4]);
            console.log("array" + airQualityArray);
        }
    });
};
