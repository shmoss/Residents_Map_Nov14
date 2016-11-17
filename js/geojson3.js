/**starr
 * @author Starr
 */

function createMap() {
    /* Map of GeoJSON data from MegaCities.geojson */
    var statesData;
    var worldCountries;
    var GE_Countries = L.geoJson(GE_Countries);
    var GE_Cities = L.geoJson(GE_Cities);
    var map = L.map('map', {
        //set geographic center
        center: [41.4, -110],
        //set initial zoom level
        zoom: 4,
        maxZoom: 20,
        minZoom: 2
    });
    var attribute;
    var attributes;
    var index;
    var response;
    var popupContent;
    var IndexCounter = 0; //tracks attribute being mapped
    var geoJsonLayers = {};
    var index;

    var streets = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
        }),
        night = L.tileLayer('http://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            maxZoom: 19
        });


    //defining the other base maps to switch too
    var baseMaps = {
        "Night": night,
        "Streets": streets
    };
    L.control.layers(baseMaps).addTo(map);

//     var timeSlider = d3.select('#slider7').call(d3.slider().axis(true).min(1970).max(2000).step(1));
//     timeSlider.on("slide", function () {
//         console.log(this.value)
//         console.log("slidey")
//     });
// timeSlider.addTo(map)


// function createSliderUI(timestamps) {
//     2
//     3		var sliderControl = L.control({ position: ‘bottomleft’} );
//     4
//     5		sliderControl.onAdd = function(map) {
//         6
//         7			var slider = L.DomUtil.create(“input”, “range-slider”);
//         8
//         9			L.DomEvent.addListener(slider, ‘mousedown’, function(e) {
//             10				L.DomEvent.stopPropagation(e);
//             11			});
//         12
//         13			$(slider)
//         14				.attr({‘type’:’range’,
//         15					‘max’: 2014,
//             16					‘min’: 1970,
//             17					‘step’: 1,
//             18					‘value’: String(timestamps[0])})
//         19		  		.on(‘input change’, function() {
//             20		  		updatePropSymbols($(this).val().toString());
//             21		  			$(“.temporal-legend”).text(this.value);
//             22		  	});
//         23			return slider;
//         24		}
//     25
//     26		sliderControl.addTo(map)
//     27		createTemporalLegend(timestamps[0]);
//     28	}


//add OSM base tilelayer
    L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        //set attribute info (source)
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
        //and add it to map

    }).addTo(map);
    // L.geoJson(worldCountries).addTo(map);
    console.log(GE_Countries);

    //call getData function- will add our MegaCities data to the map
    //getResidentsData(map);
    //getWorldData(map)
    //getFellowsData(map)
    //getResidentsFellowsData(map)

    //getFacultyData(map)

    console.log(GE_Countries);
    console.log(GE_Cities);
    console.log;






    getResidentsData1971(map);
    getResidentsData1973(map);
    getResidentsData1984(map);
    getResidentsData1989(map);
    getResidentsData1990(map);
    getResidentsData1991(map);
    getResidentsData1992(map);
    getResidentsData1993(map);
    getResidentsData1994(map);
    getResidentsData1995(map);
    getResidentsData1996(map);
    getResidentsData1997(map);
    getResidentsData1998(map);
    getResidentsData2000(map);
    getResidentsData1999(map);
    getResidentsData2002(map);
    getResidentsData2003(map);
    getResidentsData2004(map);
    getResidentsData2005(map);
    getResidentsData2006(map);
    getResidentsData2008(map);
    getResidentsData2009(map);
    getResidentsData2010(map);
    getResidentsData2011(map);
    getResidentsData2013(map);
    getResidentsData2014(map);

    // getFellowsData1978(map);
    // getFellowsData1982(map);
    // getFellowsData1983(map);
    // getFellowsData1985(map);
    // getFellowsData1986(map);
    // getFellowsData1987(map);
    // getFellowsData1988(map);
    // getFellowsData1989(map);
    // getFellowsData1990(map);
    // getFellowsData1991(map);
    // getFellowsData1992(map);
    // getFellowsData1993(map);
    // getFellowsData1994(map);
    // getFellowsData1995(map);
    // getFellowsData1996(map);
    // getFellowsData1997(map);
    // getFellowsData1998(map);
    // getFellowsData1999(map);
    // getFellowsData2000(map);
    // getFellowsData2001(map);
    // getFellowsData2002(map);
    // getFellowsData2003(map);
    // getFellowsData2004(map);
    // getFellowsData2005(map);
    // getFellowsData2006(map);
    // getFellowsData2007(map);
    // getFellowsData2008(map);
    getFellowsData2009(map);
    if (map.hasLayer(geoJsonLayers.fellows_2009)) {
        console.log("hithere")
    } else {
        console.log("nope")
    }
    //map.removeLayer(geoJsonLayers.fellows_2009)
    // getFellowsData2010(map);
    // getFellowsData2011(map);
    // getFellowsData2012(map);
    // getFellowsData2013(map);
    // getFellowsData2014(map);
    // getFellowsData2015(map);


    map.on('zoomend', function () {
        console.log("level");
        zoomLevel = map.getZoom();
        console.log(zoomLevel);
        if (map.getZoom() < 7) {
            map.removeLayer(GE_Cities);
        }
    });

//calculate the radius of each proportional symbol
    function calcPropRadius(attValue) {
        //scale factor to adjust symbol size evenly
        var scaleFactor = 50;
        //area based on attribute value and scale factor
        var area = attValue * scaleFactor;
        //radius calculated based on area
        var radius = Math.sqrt(area / Math.PI);

        return radius;
    }

//Create popups with attribute information, based on raw and normalized attributes
    function createPopup(properties, attribute, layer, radius) {
        //add city to popup content string
        var popupContent = '<h3>' + "Names: " + properties.info_firstName + " " + properties.info_lastName + '</h3>';
        //add formatted attribute to panel content

        popupContent += "<p><b>Date of Graduation:</b> " + properties.info_date + "</p>" + "<p><b>Specialty:</b> " + properties.GE_Count + "</p>";


        //replace the layer popup
        layer.bindPopup(popupContent, {
            offset: new L.Point(0, -radius)
        });
    }

//convert geojson markers to circle markers
    function pointToLayer(feature, latlng, attributes, color) {
        attribute = attributes[23];
        //console.log(attribute)


        //console.log(attributes)
        //create marker style
        var options = {
            fillColor: color,
            color: "#666600",
            weight: 1.6,
            opacity: .7,
            fillOpacity: .5
        };

        //For each feature, determine its value for the selected attribute
        var attValue = Number(feature.properties[attribute]);

        //Give each feature's circle marker a radius based on its attribute value
        options.radius = calcPropRadius(attValue);

        //create circle marker layer
        var layer = L.circleMarker(latlng, options);

        createPopup(feature.properties, attribute, layer, options.radius);

        layer.on({
            mouseover: function () {
                this.openPopup();
            },
            mouseout: function () {
                this.closePopup();
            },
            click: function () {
                $("#panel").html(popupContent);
            }
        });


        return layer;
    }

//we'll create a Leaflet GeoJSON layer and add it to map, taking "response" data as parameter
    function createPropSymbols(data, map, attribute, layername, color) {
        var layer = L.geoJson(data, {
            //create a layer from original geojson points
            pointToLayer: function (feature, latlng) {
                //instead of markers, we want circles, so we return the geojsonMarkerOptions function with circle specs
                return pointToLayer(feature, latlng, attributes, color);
            }
            //now, we need to add the circle layer to the map
        }).addTo(map);
        geoJsonLayers[layername] = layer;
        console.log(layer);
        return layer

    }

    function processData(data) {
        //empty array to hold attributes
        attributes = [];

        //properties of the first feature in the dataset
        var properties = data.features[0].properties;

        //push each attribute name into attributes array
        for (var attribute in properties) {
            //only take attributes with population values
            if (attribute.indexOf("info") > -1) {
                attributes.push(attribute);
            }
        }
        console.log(attributes);
        return attributes;
    }

    function getResidentsData(map) {
        console.log(index)
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/residents.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "residents", "green");

                console.log(attributes);
                return response

            }
        });
    }


    function getResidentsData1971(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/residents_1971.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "residents_1971", "green");

                console.log(attributes);
                return response

            }
        });
    }

    function getResidentsData1973(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/residents_1973.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "residents_1973", "green");

                console.log(attributes);
                return response

            }
        });
    }

    function getResidentsData1984(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/residents_1984.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "residents_1984", "green");

                console.log(attributes);
                return response

            }
        });
    }

    function getResidentsData1989(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/residents_1989.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "residents_1989", "green");

                console.log(attributes);
                return response

            }
        });
    }

    function getResidentsData1990(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/residents_1990.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "residents_1990", "green");

                console.log(attributes);
                return response

            }
        });
    }

    function getResidentsData1991(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/residents_1991.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "residents_1991", "green");

                console.log(attributes);
                return response

            }
        });
    }

    function getResidentsData1992(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/residents_1992.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "residents_1992", "green");

                console.log(attributes);
                return response

            }
        });
    }

    function getResidentsData1993(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/residents_1993.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "residents_1993", "green");

                console.log(attributes);
                return response

            }
        });
    }

    function getResidentsData1994(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/residents_1994.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "residents_1994", "green");

                console.log(attributes);
                return response

            }
        });
    }

    function getResidentsData1995(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/residents_1995.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "residents_1995", "green");

                console.log(attributes);
                return response

            }
        });
    }

    function getResidentsData1996(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/residents_1996.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "residents_1996", "green");

                console.log(attributes);
                return response

            }
        });
    }

    function getResidentsData1997(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/residents_1997.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "residents_1997", "green");

                console.log(attributes);
                return response

            }
        });
    }

    function getResidentsData1998(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/residents_1998.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "residents_1998", "green");

                console.log(attributes);
                return response

            }
        });
    }

    function getResidentsData1999(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/residents_1999.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "residents_1999", "green");

                console.log(attributes);
                return response

            }
        });
    }

    function getResidentsData2000(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/residents_2000.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "residents_2000", "green");

                console.log(attributes);
                return response

            }
        });
    }

    function getResidentsData2002(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/residents_2002.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "residents_2002", "green");

                console.log(attributes);
                return response

            }
        });
    }

    function getResidentsData2003(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/residents_2003.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "residents_2003", "green");

                console.log(attributes);
                return response

            }
        });
    }

    function getResidentsData2004(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/residents_2004.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "residents_2004", "green");

                console.log(attributes);
                return response

            }
        });
    }

    function getResidentsData2005(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/residents_2005.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "residents_2005", "green");

                console.log(attributes);
                return response

            }
        });
    }

    function getResidentsData2006(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/residents_2006.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "residents_2006", "green");

                console.log(attributes);
                return response

            }
        });
    }

    function getResidentsData2008(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/residents_2008.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "residents_2008", "green");

                console.log(attributes);
                return response

            }
        });
    }

    function getResidentsData2009(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/residents_2009.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "residents_2009", "green");

                console.log(attributes);
                return response

            }
        });
    }

    function getResidentsData2010(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/residents_2010.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "residents_2010", "green");

                console.log(attributes);
                return response

            }
        });
    }

    function getResidentsData2011(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/residents_2011.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "residents_2011", "green");

                console.log(attributes);
                return response

            }
        });
    }

    function getResidentsData2013(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/residents_2013.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "residents_2013", "green");

                console.log(attributes);
                return response

            }
        });
    }

    function getResidentsData2014(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/residents_2014.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "residents_2014", "green");

                console.log(attributes);
                return response

            }
        });
    }


    function getFellowsData(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_dateString2.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData1978(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_1978.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData1982(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_1982.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData1983(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_1983.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData1985(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_1985.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData1986(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_1986.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData1987(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_1987.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData1988(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_1988.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData1989(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_1989.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData1990(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_1990.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData1991(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_1991.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData1992(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_1992.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData1993(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_1993.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData1994(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_1994.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData1995(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_1995.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData1996(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_1996.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData1997(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_1997.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData1998(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_1998.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData1999(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_1999.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData2000(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_2000.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData2001(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_2001.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData2002(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_2002.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData2003(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_2003.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData2004(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_2004.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData2005(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_2005.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData2006(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_2006.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData2007(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_2007.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData2008(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_2008.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData2009(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_2009.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows_2009", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData2010(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_2010.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData2011(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_2011.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData2012(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_2012.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData2013(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_2013.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData2014(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_2014.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getFellowsData2015(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/fellows_2015.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                console.log("successful");
                attributes = processData(response);
                //call function to create proportional symbols
                createPropSymbols(response, map, attributes, "fellows", "red");
                console.log(geoJsonLayers.fellows._layers.features);
                console.log(response);
                return response

            }
        });
    }

    function getResidentsFellowsData(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/residents_fellows.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                attributes = processData(response);
                createPropSymbols(response, map, attributes, "residentsFellows", "yellow");
                console.log(response);
                return response

            }
        });
    }

    function getFacultyData(map) {
        //ajax function to get MegaCities data layer loaded into map
        $.ajax("data/faculty.GeoJSON", {
            //datatype specified
            dataType: "json",
            //upon success, call the following function
            success: function (response) {
                attributes = processData(response);
                createPropSymbols(response, map, attributes, "faculty", "orange");
                console.log(response);
                return response

            }
        });
    }

    console.log("this is a test");
//function to determine whether or not to show raw or normalized attribute
    function selectValues(map) {
        //create "raw" and "normalized" buttons
        $('#panel').append('<button class="Cities" style="-moz-box-shadow: 0px 10px 14px -7px #383838; -webkit-box-shadow: 0px 10px 14px -7px #383838; box-shadow: 0px 10px 14px -7px #383838; background-color:#FFF; -moz-border-radius:8px; -webkit-border-radius:8px; border-radius:8px; display:inline-block; cursor:pointer; color:#000000; font-family:avenir; font-size:14px; font-weight:bold; padding:8px 14px; text-decoration:none;">Show US Cities</button>');
        $('#panel').append('<button class="Countries" style="-moz-box-shadow: 0px 10px 14px -7px #383838; -webkit-box-shadow: 0px 10px 14px -7px #383838; box-shadow: 0px 10px 14px -7px #383838; background-color:#FFF; -moz-border-radius:8px; -webkit-border-radius:8px; border-radius:8px; display:inline-block; cursor:pointer; color:#000000; font-family:avenir; font-size:14px; font-weight:bold; padding:8px 14px; text-decoration:none;">Show Global</button>');

        //If normalized button hit, call function
        $(".Cities").click(function () {
            console.log("cities");
            // var index = $('.range-slider').val();
            //  normalized = true
            //  raw = false
            // //create true false statement
            // if (normalized == true) {
            // //if true, update based on normalized attributes
            //     updatePropSymbols(map, attributes[index], rawAttributes[index]);
            // };

            map.setView(new L.LatLng(41.4, -110), 4);

            console.log("this is a test");
            if (map.hasLayer(geoJsonLayers.countries)) {
                console.log("map has countries");
                map.removeLayer(geoJsonLayers.countries);
                map.addLayer(geoJsonLayers.cities);
                map.removeLayer(geoJsonLayers.usa)
            }
            console.log(GE_Cities)

        });

        $(".Countries").click(function () {
            // var index = $('.range-slider').val();
            // //re-set statement
            // normalized = false
            // raw = true
            // if (raw == true) {
            //     //take off previous layer
            //     map.removeLayer(attributes);
            //     //call update prop symbols based on normalized data
            //     updatePropSymbols(map, rawAttributes[index], attributes[index]);
            // };
            map.setView(new L.LatLng(41.4, -0), 2);
            if (map.hasLayer(geoJsonLayers.cities)) {
                map.removeLayer(geoJsonLayers.cities);
                map.addLayer(geoJsonLayers.countries);
                map.addLayer(geoJsonLayers.usa)
            }
        });
    }

    selectValues(map);
//way at the bottom- we call the create map function once the doc has loaded.
//$(document).ready(createMap);
    function readZoom() {
        console.log("readZoom function");
        if (map.getZoom() < 7) {
            console.log("hello");
        }
    }

    readZoom();

//create slider, arrows
// function createSequenceControls(map, attributes){
//   //add slider, arrows
//   var SequenceControl=L.Control.extend({
//     options: {
//       position: 'bottomleft'
//     },
//     onAdd: function(map){
//       //create sequence-control-container div element
//       var container=L.DomUtil.create('div','sequence-control-container');

//       $(container).append('<input class="range-slider" type="range">');
//       $(container).append('<button class="skip" id="reverse"> Reverse</button>');
//       $(container).append('<button class="skip" id="forward">Skip</button>');
//       //prevent interaction with basemap when using slider, arrows
//       $(container).on('mousedown dblclick', function(e){
//         L.DomEvent.stopPropagation(e);
//       });

//       return container;
//     }
//   });
//   map.addControl(new SequenceControl());


// createSequenceControls(map, attributes);

//create the sequence controls to control temporal indexing
    function createSequenceControls(map) {
        console.log("adding sequence control");
        var SequenceControl = L.Control.extend({
            options: {
                position: 'bottomleft'
            },

            onAdd: function (map) {
                // create the sequence control container and give it class name
                var container = L.DomUtil.create('div', 'sequence-control-container');

                //create range input element
                $(container).append('<input class="range-slider" type="range">');

                //add skip buttons
                $(container).append('<button class="skip" id="reverse" title="Reverse">Reverse</button>');
                $(container).append('<button class="skip" id="forward" title="Forward">Skip</button>');

                //kill any mouse event listeners on the map
                $(container).on('mousedown dblclick', function (e) {
                    L.DomEvent.stopPropagation(e);
                });
                return container;
            }

        });

        map.addControl(new SequenceControl());

        $('.range-slider').attr({
            //set max, min-- 1990 thru 2014-- at one step increments
            max: 2016,
            min: 1971,
            value: 0,
            step: 1
        });
//add forward, backward arrows with icons

        $('#reverse').html('<img src="img/left2.png"">');
        $('#forward').html('<img src="img/right2.png">');
        $('.skip').click(function () {
            var index = $('.range-slider').val();
            //if forward clicked, increasing increments by 1
            if ($(this).attr('id') == 'forward') {
                index++;
                index = index > 2016 ? 1971 : index;
                if (index == 1972) {
                    //getResidentsData1973(map);
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_1973)
                    map.removeLayer(geoJsonLayers.residents_1984)
                    map.removeLayer(geoJsonLayers.residents_1989)
                    map.removeLayer(geoJsonLayers.residents_1990)
                    map.removeLayer(geoJsonLayers.residents_1991)
                    map.removeLayer(geoJsonLayers.residents_1992)
                    map.removeLayer(geoJsonLayers.residents_1993)
                    map.removeLayer(geoJsonLayers.residents_1994)
                    map.removeLayer(geoJsonLayers.residents_1995)
                    map.removeLayer(geoJsonLayers.residents_1996)
                    map.removeLayer(geoJsonLayers.residents_1997)
                    map.removeLayer(geoJsonLayers.residents_1998)
                    map.removeLayer(geoJsonLayers.residents_1999)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)


                    // var arr = [];//this array to hold your filterred object
                    // geoJsonLayers.eachLayer(function(layer){
                    //     if(layer.feature.properties.info_date === 2010){
                    //         console.log("hii")
                    //         arr.push(layer)
                    //     }
                    // })

                    //points.addTo(map)


                }
                if (index == 1973) {
                    //getResidentsData1984(map);
                    console.log(index)
                    //map.removeLayer(geoJsonLayers.fellows_2009)
                    map.addLayer(geoJsonLayers.residents_1973)

                }

                if (index == 1984) {
                    //getResidentsData1984(map);
                    console.log(index)
                    map.addLayer(geoJsonLayers.residents_1984)

                }
                if (index == 1989) {
                    console.log(index)
                    //getResidentsData1989(map);

                    map.addLayer(geoJsonLayers.residents_1989)
                }
                if (index == 1990) {
                    //getResidentsData1990(map);
                    console.log(index)
                    map.addLayer(geoJsonLayers.residents_1990)
                }
                if (index == 1991) {
                    console.log(index)
                    //getResidentsData1991(map);
                    map.addLayer(geoJsonLayers.residents_1991)
                }
                if (index == 1992) {
                    console.log(index)
                    //getResidentsData1992(map);
                    map.addLayer(geoJsonLayers.residents_1992)
                }
                if (index == 1993) {
                    console.log(index)
                    //getResidentsData1993(map);
                    map.addLayer(geoJsonLayers.residents_1993)
                }
                if (index == 1994) {
                    console.log(index)
                    //getResidentsData1994(map);
                    map.addLayer(geoJsonLayers.residents_1994)
                }
                if (index == 1995) {
                    console.log(index)
                    //getResidentsData1995(map);
                    map.addLayer(geoJsonLayers.residents_1995)
                }
                if (index == 1997) {
                    console.log(index)
                    //getResidentsData1973(map);
                    map.addLayer(geoJsonLayers.residents_1997)
                }
                if (index == 1998) {
                    console.log(index)
                    //getResidentsData1998(map);
                    map.addLayer(geoJsonLayers.residents_1998)
                }
                if (index == 1999) {
                    console.log(index)
                    //getResidentsData1999(map);
                    map.addLayer(geoJsonLayers.residents_1999)
                }
                if (index == 2000) {
                    console.log(index)
                    //getResidentsData1999(map);
                    map.addLayer(geoJsonLayers.residents_2000)
                }
                if (index == 2002) {
                    console.log(index)
                    //getResidentsData1999(map);
                    map.addLayer(geoJsonLayers.residents_2002)
                }
                if (index == 2003) {
                    console.log(index)
                    //getResidentsData1999(map);
                    map.addLayer(geoJsonLayers.residents_2003)
                }
                if (index == 2004) {
                    console.log(index)
                    //getResidentsData1999(map);
                    map.addLayer(geoJsonLayers.residents_2004)
                }
                if (index == 2005) {
                    console.log(index)
                    //getResidentsData1999(map);
                    map.addLayer(geoJsonLayers.residents_2005)
                }
                if (index == 2006) {
                    console.log(index)
                    //getResidentsData1999(map);
                    map.addLayer(geoJsonLayers.residents_2006)
                }
                if (index == 2008) {
                    console.log(index)
                    //getResidentsData1999(map);
                    map.addLayer(geoJsonLayers.residents_2008)
                }
                if (index == 2009) {
                    console.log(index)
                    //getResidentsData1999(map);
                    map.addLayer(geoJsonLayers.residents_2009)
                }
                if (index == 2010) {
                    console.log(index)
                    //getResidentsData1999(map);
                    map.addLayer(geoJsonLayers.residents_2010)
                }
                if (index == 2011) {
                    console.log(index)
                    //getResidentsData1999(map);
                    map.addLayer(geoJsonLayers.residents_2011)
                }
                if (index == 2013) {
                    console.log(index)
                    //getResidentsData1999(map);
                    map.addLayer(geoJsonLayers.residents_2013)
                }
                if (index == 2014) {
                    console.log(index)
                    //getResidentsData1999(map);
                    map.addLayer(geoJsonLayers.residents_2014)
                }

                //else if reverse clicked, decreasing increments by 1
            } else if ($(this).attr('id') == 'reverse') {
                index--;
                index = index < 1971 ? 2016 : index;
                console.log(index);
                if (index == 1972) {

                    map.removeLayer(geoJsonLayers.residents_1973)
                    map.removeLayer(geoJsonLayers.residents_1984)
                    map.removeLayer(geoJsonLayers.residents_1989)
                    map.removeLayer(geoJsonLayers.residents_1990)
                    map.removeLayer(geoJsonLayers.residents_1991)
                    map.removeLayer(geoJsonLayers.residents_1992)
                    map.removeLayer(geoJsonLayers.residents_1993)
                    map.removeLayer(geoJsonLayers.residents_1994)
                    map.removeLayer(geoJsonLayers.residents_1995)
                    map.removeLayer(geoJsonLayers.residents_1996)
                    map.removeLayer(geoJsonLayers.residents_1997)
                    map.removeLayer(geoJsonLayers.residents_1998)
                    map.removeLayer(geoJsonLayers.residents_1999)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)

                    //map.removeLayer(geoJsonLayers.residents_1973)
                    // year = 2013;
                    //
                    // console.log(year);
                    // console.log("2013 is the current index");
                    // console.log(geoJsonLayers);
                    //   map.removeLayer(geoJsonLayers.residents_1971);
                    //map.removeLayer(geoJsonLayers.fellows)
                    // var others = L.geoJson(geoJsonLayers.fellows, {
                    //     filter: function(feature, layer) {
                    //         console.log("amazing filter");
                    //         console.log(others);
                    //
                    //         return feature.properties.info_date == year;
                    //         map.addLayer(geoJsonLayers.fellows)
                    //     }
                    //
                    // });

                    //filterLayer(2013)

                    //filterByYear(fellows.geojson, year)
                    // map.removeLayer(geoJsonLayers.fellows)
                    //   date.addTo(Map)
                    // //map.removeLayer(geoJsonLayers.residentsFellows)
                    //map.removeLayer(geoJsonLayers.faculty)

                    //filterByYear(geoJsonLayers.fellows)
                }
                if (index == 1973) {
                    console.log(index)

                    map.removeLayer(geoJsonLayers.residents_1984)
                    map.removeLayer(geoJsonLayers.residents_1989)
                    map.removeLayer(geoJsonLayers.residents_1990)
                    map.removeLayer(geoJsonLayers.residents_1991)
                    map.removeLayer(geoJsonLayers.residents_1992)
                    map.removeLayer(geoJsonLayers.residents_1993)
                    map.removeLayer(geoJsonLayers.residents_1994)
                    map.removeLayer(geoJsonLayers.residents_1995)
                    map.removeLayer(geoJsonLayers.residents_1996)
                    map.removeLayer(geoJsonLayers.residents_1997)
                    map.removeLayer(geoJsonLayers.residents_1998)
                    map.removeLayer(geoJsonLayers.residents_1999)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)

                }

                if (index == 1974) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.fellows_2009)
                    map.removeLayer(geoJsonLayers.residents_1984)
                    map.removeLayer(geoJsonLayers.residents_1989)
                    map.removeLayer(geoJsonLayers.residents_1990)
                    map.removeLayer(geoJsonLayers.residents_1991)
                    map.removeLayer(geoJsonLayers.residents_1992)
                    map.removeLayer(geoJsonLayers.residents_1993)
                    map.removeLayer(geoJsonLayers.residents_1994)
                    map.removeLayer(geoJsonLayers.residents_1995)
                    map.removeLayer(geoJsonLayers.residents_1996)
                    map.removeLayer(geoJsonLayers.residents_1997)
                    map.removeLayer(geoJsonLayers.residents_1998)
                    map.removeLayer(geoJsonLayers.residents_1999)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)

                }

                if (index == 1975) {
                    console.log(index)

                    map.removeLayer(geoJsonLayers.residents_1984)
                    map.removeLayer(geoJsonLayers.residents_1989)
                    map.removeLayer(geoJsonLayers.residents_1990)
                    map.removeLayer(geoJsonLayers.residents_1991)
                    map.removeLayer(geoJsonLayers.residents_1992)
                    map.removeLayer(geoJsonLayers.residents_1993)
                    map.removeLayer(geoJsonLayers.residents_1994)
                    map.removeLayer(geoJsonLayers.residents_1995)
                    map.removeLayer(geoJsonLayers.residents_1996)
                    map.removeLayer(geoJsonLayers.residents_1997)
                    map.removeLayer(geoJsonLayers.residents_1998)
                    map.removeLayer(geoJsonLayers.residents_1999)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)

                }
                if (index == 1975) {
                    console.log(index)

                    map.removeLayer(geoJsonLayers.residents_1984)
                    map.removeLayer(geoJsonLayers.residents_1989)
                    map.removeLayer(geoJsonLayers.residents_1990)
                    map.removeLayer(geoJsonLayers.residents_1991)
                    map.removeLayer(geoJsonLayers.residents_1992)
                    map.removeLayer(geoJsonLayers.residents_1993)
                    map.removeLayer(geoJsonLayers.residents_1994)
                    map.removeLayer(geoJsonLayers.residents_1995)
                    map.removeLayer(geoJsonLayers.residents_1996)
                    map.removeLayer(geoJsonLayers.residents_1997)
                    map.removeLayer(geoJsonLayers.residents_1998)
                    map.removeLayer(geoJsonLayers.residents_1999)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)

                }
                if (index == 1976) {
                    console.log(index)

                    map.removeLayer(geoJsonLayers.residents_1984)
                    map.removeLayer(geoJsonLayers.residents_1989)
                    map.removeLayer(geoJsonLayers.residents_1990)
                    map.removeLayer(geoJsonLayers.residents_1991)
                    map.removeLayer(geoJsonLayers.residents_1992)
                    map.removeLayer(geoJsonLayers.residents_1993)
                    map.removeLayer(geoJsonLayers.residents_1994)
                    map.removeLayer(geoJsonLayers.residents_1995)
                    map.removeLayer(geoJsonLayers.residents_1996)
                    map.removeLayer(geoJsonLayers.residents_1997)
                    map.removeLayer(geoJsonLayers.residents_1998)
                    map.removeLayer(geoJsonLayers.residents_1999)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)

                }
                if (index == 1977) {
                    console.log(index)

                    map.removeLayer(geoJsonLayers.residents_1984)
                    map.removeLayer(geoJsonLayers.residents_1989)
                    map.removeLayer(geoJsonLayers.residents_1990)
                    map.removeLayer(geoJsonLayers.residents_1991)
                    map.removeLayer(geoJsonLayers.residents_1992)
                    map.removeLayer(geoJsonLayers.residents_1993)
                    map.removeLayer(geoJsonLayers.residents_1994)
                    map.removeLayer(geoJsonLayers.residents_1995)
                    map.removeLayer(geoJsonLayers.residents_1996)
                    map.removeLayer(geoJsonLayers.residents_1997)
                    map.removeLayer(geoJsonLayers.residents_1998)
                    map.removeLayer(geoJsonLayers.residents_1999)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)

                }
                if (index == 1978) {
                    console.log(index)

                    map.removeLayer(geoJsonLayers.residents_1984)
                    map.removeLayer(geoJsonLayers.residents_1989)
                    map.removeLayer(geoJsonLayers.residents_1990)
                    map.removeLayer(geoJsonLayers.residents_1991)
                    map.removeLayer(geoJsonLayers.residents_1992)
                    map.removeLayer(geoJsonLayers.residents_1993)
                    map.removeLayer(geoJsonLayers.residents_1994)
                    map.removeLayer(geoJsonLayers.residents_1995)
                    map.removeLayer(geoJsonLayers.residents_1996)
                    map.removeLayer(geoJsonLayers.residents_1997)
                    map.removeLayer(geoJsonLayers.residents_1998)
                    map.removeLayer(geoJsonLayers.residents_1999)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)

                }
                if (index == 1979) {
                    console.log(index)

                    map.removeLayer(geoJsonLayers.residents_1984)
                    map.removeLayer(geoJsonLayers.residents_1989)
                    map.removeLayer(geoJsonLayers.residents_1990)
                    map.removeLayer(geoJsonLayers.residents_1991)
                    map.removeLayer(geoJsonLayers.residents_1992)
                    map.removeLayer(geoJsonLayers.residents_1993)
                    map.removeLayer(geoJsonLayers.residents_1994)
                    map.removeLayer(geoJsonLayers.residents_1995)
                    map.removeLayer(geoJsonLayers.residents_1996)
                    map.removeLayer(geoJsonLayers.residents_1997)
                    map.removeLayer(geoJsonLayers.residents_1998)
                    map.removeLayer(geoJsonLayers.residents_1999)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)

                }
                if (index == 1980) {
                    console.log(index)

                    map.removeLayer(geoJsonLayers.residents_1984)
                    map.removeLayer(geoJsonLayers.residents_1989)
                    map.removeLayer(geoJsonLayers.residents_1990)
                    map.removeLayer(geoJsonLayers.residents_1991)
                    map.removeLayer(geoJsonLayers.residents_1992)
                    map.removeLayer(geoJsonLayers.residents_1993)
                    map.removeLayer(geoJsonLayers.residents_1994)
                    map.removeLayer(geoJsonLayers.residents_1995)
                    map.removeLayer(geoJsonLayers.residents_1996)
                    map.removeLayer(geoJsonLayers.residents_1997)
                    map.removeLayer(geoJsonLayers.residents_1998)
                    map.removeLayer(geoJsonLayers.residents_1999)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)

                }
                if (index == 1981) {
                    console.log(index)

                    map.removeLayer(geoJsonLayers.residents_1984)
                    map.removeLayer(geoJsonLayers.residents_1989)
                    map.removeLayer(geoJsonLayers.residents_1990)
                    map.removeLayer(geoJsonLayers.residents_1991)
                    map.removeLayer(geoJsonLayers.residents_1992)
                    map.removeLayer(geoJsonLayers.residents_1993)
                    map.removeLayer(geoJsonLayers.residents_1994)
                    map.removeLayer(geoJsonLayers.residents_1995)
                    map.removeLayer(geoJsonLayers.residents_1996)
                    map.removeLayer(geoJsonLayers.residents_1997)
                    map.removeLayer(geoJsonLayers.residents_1998)
                    map.removeLayer(geoJsonLayers.residents_1999)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)

                }
                if (index == 1982) {
                    console.log(index)

                    map.removeLayer(geoJsonLayers.residents_1984)
                    map.removeLayer(geoJsonLayers.residents_1989)
                    map.removeLayer(geoJsonLayers.residents_1990)
                    map.removeLayer(geoJsonLayers.residents_1991)
                    map.removeLayer(geoJsonLayers.residents_1992)
                    map.removeLayer(geoJsonLayers.residents_1993)
                    map.removeLayer(geoJsonLayers.residents_1994)
                    map.removeLayer(geoJsonLayers.residents_1995)
                    map.removeLayer(geoJsonLayers.residents_1996)
                    map.removeLayer(geoJsonLayers.residents_1997)
                    map.removeLayer(geoJsonLayers.residents_1998)
                    map.removeLayer(geoJsonLayers.residents_1999)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)

                }
                if (index == 1983) {
                    console.log(index)

                    map.removeLayer(geoJsonLayers.residents_1984)
                    map.removeLayer(geoJsonLayers.residents_1989)
                    map.removeLayer(geoJsonLayers.residents_1990)
                    map.removeLayer(geoJsonLayers.residents_1991)
                    map.removeLayer(geoJsonLayers.residents_1992)
                    map.removeLayer(geoJsonLayers.residents_1993)
                    map.removeLayer(geoJsonLayers.residents_1994)
                    map.removeLayer(geoJsonLayers.residents_1995)
                    map.removeLayer(geoJsonLayers.residents_1996)
                    map.removeLayer(geoJsonLayers.residents_1997)
                    map.removeLayer(geoJsonLayers.residents_1998)
                    map.removeLayer(geoJsonLayers.residents_1999)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)

                }
                if (index == 1984) {
                    console.log(index)


                    map.removeLayer(geoJsonLayers.residents_1989)
                    map.removeLayer(geoJsonLayers.residents_1990)
                    map.removeLayer(geoJsonLayers.residents_1991)
                    map.removeLayer(geoJsonLayers.residents_1992)
                    map.removeLayer(geoJsonLayers.residents_1993)
                    map.removeLayer(geoJsonLayers.residents_1994)
                    map.removeLayer(geoJsonLayers.residents_1995)
                    map.removeLayer(geoJsonLayers.residents_1996)
                    map.removeLayer(geoJsonLayers.residents_1997)
                    map.removeLayer(geoJsonLayers.residents_1998)
                    map.removeLayer(geoJsonLayers.residents_1999)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)

                }
                if (index == 1985) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_1989)
                    map.removeLayer(geoJsonLayers.residents_1990)
                    map.removeLayer(geoJsonLayers.residents_1991)
                    map.removeLayer(geoJsonLayers.residents_1992)
                    map.removeLayer(geoJsonLayers.residents_1993)
                    map.removeLayer(geoJsonLayers.residents_1994)
                    map.removeLayer(geoJsonLayers.residents_1995)
                    map.removeLayer(geoJsonLayers.residents_1996)
                    map.removeLayer(geoJsonLayers.residents_1997)
                    map.removeLayer(geoJsonLayers.residents_1998)
                    map.removeLayer(geoJsonLayers.residents_1999)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)

                }
                if (index == 1986) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_1989)
                    map.removeLayer(geoJsonLayers.residents_1990)
                    map.removeLayer(geoJsonLayers.residents_1991)
                    map.removeLayer(geoJsonLayers.residents_1992)
                    map.removeLayer(geoJsonLayers.residents_1993)
                    map.removeLayer(geoJsonLayers.residents_1994)
                    map.removeLayer(geoJsonLayers.residents_1995)
                    map.removeLayer(geoJsonLayers.residents_1996)
                    map.removeLayer(geoJsonLayers.residents_1997)
                    map.removeLayer(geoJsonLayers.residents_1998)
                    map.removeLayer(geoJsonLayers.residents_1999)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)

                }
                if (index == 1987) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_1989)
                    map.removeLayer(geoJsonLayers.residents_1990)
                    map.removeLayer(geoJsonLayers.residents_1991)
                    map.removeLayer(geoJsonLayers.residents_1992)
                    map.removeLayer(geoJsonLayers.residents_1993)
                    map.removeLayer(geoJsonLayers.residents_1994)
                    map.removeLayer(geoJsonLayers.residents_1995)
                    map.removeLayer(geoJsonLayers.residents_1996)
                    map.removeLayer(geoJsonLayers.residents_1997)
                    map.removeLayer(geoJsonLayers.residents_1998)
                    map.removeLayer(geoJsonLayers.residents_1999)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)

                }
                if (index == 1988) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_1989)
                    map.removeLayer(geoJsonLayers.residents_1990)
                    map.removeLayer(geoJsonLayers.residents_1991)
                    map.removeLayer(geoJsonLayers.residents_1992)
                    map.removeLayer(geoJsonLayers.residents_1993)
                    map.removeLayer(geoJsonLayers.residents_1994)
                    map.removeLayer(geoJsonLayers.residents_1995)
                    map.removeLayer(geoJsonLayers.residents_1996)
                    map.removeLayer(geoJsonLayers.residents_1997)
                    map.removeLayer(geoJsonLayers.residents_1998)
                    map.removeLayer(geoJsonLayers.residents_1999)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)

                }
                if (index == 1989) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_1990)
                    map.removeLayer(geoJsonLayers.residents_1991)
                    map.removeLayer(geoJsonLayers.residents_1992)
                    map.removeLayer(geoJsonLayers.residents_1993)
                    map.removeLayer(geoJsonLayers.residents_1994)
                    map.removeLayer(geoJsonLayers.residents_1995)
                    map.removeLayer(geoJsonLayers.residents_1996)
                    map.removeLayer(geoJsonLayers.residents_1997)
                    map.removeLayer(geoJsonLayers.residents_1998)
                    map.removeLayer(geoJsonLayers.residents_1999)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)

                }
                if (index == 1990) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_1991)
                    map.removeLayer(geoJsonLayers.residents_1992)
                    map.removeLayer(geoJsonLayers.residents_1993)
                    map.removeLayer(geoJsonLayers.residents_1994)
                    map.removeLayer(geoJsonLayers.residents_1995)
                    map.removeLayer(geoJsonLayers.residents_1996)
                    map.removeLayer(geoJsonLayers.residents_1997)
                    map.removeLayer(geoJsonLayers.residents_1998)
                    map.removeLayer(geoJsonLayers.residents_1999)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)

                }
                if (index == 1991) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_1992)
                    map.removeLayer(geoJsonLayers.residents_1993)
                    map.removeLayer(geoJsonLayers.residents_1994)
                    map.removeLayer(geoJsonLayers.residents_1995)
                    map.removeLayer(geoJsonLayers.residents_1996)
                    map.removeLayer(geoJsonLayers.residents_1997)
                    map.removeLayer(geoJsonLayers.residents_1998)
                    map.removeLayer(geoJsonLayers.residents_1999)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)

                }
                if (index == 1992) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_1993)
                    map.removeLayer(geoJsonLayers.residents_1994)
                    map.removeLayer(geoJsonLayers.residents_1995)
                    map.removeLayer(geoJsonLayers.residents_1996)
                    map.removeLayer(geoJsonLayers.residents_1997)
                    map.removeLayer(geoJsonLayers.residents_1998)
                    map.removeLayer(geoJsonLayers.residents_1999)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)

                }
                if (index == 1993) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_1994)
                    map.removeLayer(geoJsonLayers.residents_1995)
                    map.removeLayer(geoJsonLayers.residents_1996)
                    map.removeLayer(geoJsonLayers.residents_1997)
                    map.removeLayer(geoJsonLayers.residents_1998)
                    map.removeLayer(geoJsonLayers.residents_1999)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)

                }
                if (index == 1994) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_1995)
                    map.removeLayer(geoJsonLayers.residents_1996)
                    map.removeLayer(geoJsonLayers.residents_1997)
                    map.removeLayer(geoJsonLayers.residents_1998)
                    map.removeLayer(geoJsonLayers.residents_1999)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)

                }
                if (index == 1995) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_1996)
                    map.removeLayer(geoJsonLayers.residents_1997)
                    map.removeLayer(geoJsonLayers.residents_1998)
                    map.removeLayer(geoJsonLayers.residents_1999)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)

                }
                if (index == 1996) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_1997)
                    map.removeLayer(geoJsonLayers.residents_1998)
                    map.removeLayer(geoJsonLayers.residents_1999)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)
                }
                if (index == 1997) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_1998)
                    map.removeLayer(geoJsonLayers.residents_1999)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)
                }
                if (index == 1998) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_1999)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)
                }
                if (index == 1999) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_2000)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)
                }
                if (index == 2000) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)
                }
                if (index == 2001) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_2002)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)
                }
                if (index == 2002) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_2003)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)
                }
                if (index == 2003) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_2004)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)
                }
                if (index == 2004) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_2005)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)
                }
                if (index == 2005) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_2006)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)
                }
                if (index == 2006) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)
                }
                if (index == 2007) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_2008)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)
                }
                if (index == 2008) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_2009)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)
                }
                if (index == 2009) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_2010)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)
                }
                if (index == 2010) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_2011)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)
                }
                if (index == 2011) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)
                }
                if (index == 2012) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_2013)
                    map.removeLayer(geoJsonLayers.residents_2014)
                }
                if (index == 2013) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_2014)
                }
                if (index == 2014) {
                    console.log(index)
                    map.removeLayer(geoJsonLayers.residents_2014)
                }


            }
//add slider
            $('.range-slider').val(index);
//should updatePropSymbols with interaction
            // if (index = 2015) {
            //     console.log(hellsyea)
            //   }

        });


        $('.range-slider').on('input', function () {
            var index = $(this).val();
            //if forward clicked, increasing increments by 1
            // if ($(this).attr('id')=='forward'){
            //     index++;
            //     index=index> 2016 ? 1971 : index;
            if (index == 1971) {
                //map.removeLayer(geoJsonLayers.residents_1973)
                //map.addLayer(geoJsonLayers.residents_1973)
                console.log(index)
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 1972) {
                console.log(index)
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 1973) {
                console.log(index)
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 1974) {
                console.log(index)
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 1975) {
                console.log(index)
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 1976) {
                console.log(index)
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 1977) {
                console.log(index)
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 1978) {
                console.log(index)
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 1979) {
                console.log(index)
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 1980) {
                console.log(index)
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 1981) {
                console.log(index)
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 1982) {
                console.log(index)
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 1983) {
                console.log(index)
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 1984) {
                console.log(index)
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 1985) {
                console.log(index)
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 1986) {
                console.log(index)
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 1987) {
                console.log(index)
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 1988) {
                console.log(index)
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 1989) {
                console.log(index)
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.addLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 1990) {
                console.log(index)
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.addLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.addLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 1991) {
                console.log(index)
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.addLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.addLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.addLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 1992) {
                console.log(index)
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.addLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.addLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.addLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.addLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 1993) {
                console.log(index)
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.addLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.addLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.addLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.addLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.addLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 1994) {
                console.log(index)
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.addLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.addLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.addLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.addLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.addLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.addLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 1995) {
                console.log(index)
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.addLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.addLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.addLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.addLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.addLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.addLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.addLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 1996) {
                console.log(index)
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.addLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.addLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.addLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.addLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.addLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.addLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.addLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.addLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 1997) {
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.addLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.addLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.addLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.addLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.addLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.addLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.addLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.addLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.addLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 1998) {
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.addLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.addLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.addLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.addLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.addLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.addLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.addLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.addLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.addLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.addLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 1999) {
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.addLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.addLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.addLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.addLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.addLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.addLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.addLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.addLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.addLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.addLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.addLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 2000) {
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.addLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.addLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.addLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.addLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.addLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.addLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.addLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.addLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.addLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.addLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.addLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.addLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 2001) {
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.addLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.addLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.addLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.addLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.addLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.addLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.addLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.addLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.addLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.addLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.addLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.addLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 2002) {
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.addLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.addLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.addLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.addLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.addLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.addLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.addLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.addLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.addLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.addLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.addLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.addLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.addLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 2003) {
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.addLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.addLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.addLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.addLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.addLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.addLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.addLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.addLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.addLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.addLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.addLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.addLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.addLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.addLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 2004) {
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.addLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.addLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.addLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.addLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.addLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.addLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.addLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.addLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.addLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.addLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.addLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.addLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.addLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.addLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.addLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 2005) {
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.addLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.addLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.addLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.addLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.addLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.addLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.addLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.addLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.addLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.addLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.addLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.addLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.addLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.addLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.addLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.addLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 2006) {
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.addLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.addLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.addLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.addLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.addLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.addLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.addLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.addLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.addLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.addLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.addLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.addLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.addLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.addLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.addLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.addLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.addLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 2007) {
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.addLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.addLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.addLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.addLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.addLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.addLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.addLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.addLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.addLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.addLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.addLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.addLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.addLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.addLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.addLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.addLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.addLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 2008) {
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.addLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.addLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.addLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.addLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.addLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.addLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.addLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.addLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.addLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.addLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.addLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.addLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.addLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.addLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.addLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.addLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.addLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.addLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 2009) {
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.addLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.addLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.addLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.addLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.addLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.addLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.addLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.addLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.addLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.addLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.addLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.addLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.addLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.addLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.addLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.addLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.addLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.addLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.addLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 2010) {
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.addLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.addLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.addLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.addLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.addLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.addLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.addLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.addLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.addLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.addLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.addLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.addLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.addLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.addLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.addLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.addLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.addLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.addLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.addLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.addLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 2011) {
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.addLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.addLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.addLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.addLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.addLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.addLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.addLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.addLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.addLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.addLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.addLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.addLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.addLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.addLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.addLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.addLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.addLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.addLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.addLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.addLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.addLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 2012) {
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.addLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.addLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.addLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.addLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.addLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.addLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.addLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.addLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.addLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.addLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.addLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.addLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.addLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.addLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.addLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.addLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.addLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.addLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.addLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.addLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.addLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 2013) {
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.addLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.addLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.addLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.addLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.addLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.addLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.addLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.addLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.addLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.addLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.addLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.addLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.addLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.addLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.addLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.addLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.addLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.addLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.addLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.addLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.addLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.addLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
            }
            if (index == 2014) {
                map.removeLayer(geoJsonLayers.residents_1971)
                map.addLayer(geoJsonLayers.residents_1971)
                map.removeLayer(geoJsonLayers.residents_1973)
                map.addLayer(geoJsonLayers.residents_1973)
                map.removeLayer(geoJsonLayers.residents_1984)
                map.addLayer(geoJsonLayers.residents_1984)
                map.removeLayer(geoJsonLayers.residents_1989)
                map.addLayer(geoJsonLayers.residents_1989)
                map.removeLayer(geoJsonLayers.residents_1990)
                map.addLayer(geoJsonLayers.residents_1990)
                map.removeLayer(geoJsonLayers.residents_1991)
                map.addLayer(geoJsonLayers.residents_1991)
                map.removeLayer(geoJsonLayers.residents_1992)
                map.addLayer(geoJsonLayers.residents_1992)
                map.removeLayer(geoJsonLayers.residents_1993)
                map.addLayer(geoJsonLayers.residents_1993)
                map.removeLayer(geoJsonLayers.residents_1994)
                map.addLayer(geoJsonLayers.residents_1994)
                map.removeLayer(geoJsonLayers.residents_1995)
                map.addLayer(geoJsonLayers.residents_1995)
                map.removeLayer(geoJsonLayers.residents_1996)
                map.addLayer(geoJsonLayers.residents_1996)
                map.removeLayer(geoJsonLayers.residents_1997)
                map.addLayer(geoJsonLayers.residents_1997)
                map.removeLayer(geoJsonLayers.residents_1998)
                map.addLayer(geoJsonLayers.residents_1998)
                map.removeLayer(geoJsonLayers.residents_1999)
                map.addLayer(geoJsonLayers.residents_1999)
                map.removeLayer(geoJsonLayers.residents_2000)
                map.addLayer(geoJsonLayers.residents_2000)
                map.removeLayer(geoJsonLayers.residents_2002)
                map.addLayer(geoJsonLayers.residents_2002)
                map.removeLayer(geoJsonLayers.residents_2003)
                map.addLayer(geoJsonLayers.residents_2003)
                map.removeLayer(geoJsonLayers.residents_2004)
                map.addLayer(geoJsonLayers.residents_2004)
                map.removeLayer(geoJsonLayers.residents_2005)
                map.addLayer(geoJsonLayers.residents_2005)
                map.removeLayer(geoJsonLayers.residents_2006)
                map.addLayer(geoJsonLayers.residents_2006)
                map.removeLayer(geoJsonLayers.residents_2008)
                map.addLayer(geoJsonLayers.residents_2008)
                map.removeLayer(geoJsonLayers.residents_2009)
                map.addLayer(geoJsonLayers.residents_2009)
                map.removeLayer(geoJsonLayers.residents_2010)
                map.addLayer(geoJsonLayers.residents_2010)
                map.removeLayer(geoJsonLayers.residents_2011)
                map.addLayer(geoJsonLayers.residents_2011)
                map.removeLayer(geoJsonLayers.residents_2013)
                map.addLayer(geoJsonLayers.residents_2013)
                map.removeLayer(geoJsonLayers.residents_2014)
                map.addLayer(geoJsonLayers.residents_2014)
            }


            //     //else if reverse clicked, decreasing increments by 1
            // } else if ($(this).attr('id')=='reverse'){
            //     index--;
            //     index=index < 1971 ? 2016 : index;
            //     console.log(index);
            //     if (index == 1973) {
            //         getResidentsData1973(map)
            //         // year = 2013;
            //         //
            //         // console.log(year);
            //         // console.log("2013 is the current index");
            //         // console.log(geoJsonLayers);
            //         //   map.removeLayer(geoJsonLayers.residents_1971);
            //         //map.removeLayer(geoJsonLayers.fellows)
            //         var others = L.geoJson(geoJsonLayers.fellows, {
            //             filter: function(feature, layer) {
            //                 console.log("amazing filter");
            //                 console.log(others);
            //
            //                 return feature.properties.info_date == year;
            //                 map.addLayer(geoJsonLayers.fellows)
            //             }
            //
            //         });
            //
            //         //filterLayer(2013)
            //
            //         //filterByYear(fellows.geojson, year)
            //         // map.removeLayer(geoJsonLayers.fellows)
            //         //   date.addTo(Map)
            //         // //map.removeLayer(geoJsonLayers.residentsFellows)
            //         //map.removeLayer(geoJsonLayers.faculty)
            //
            //         //filterByYear(geoJsonLayers.fellows)
            //     }
            //
            // }
//add slider
            $('.range-slider').val(index);
//should updatePropSymbols with interaction
            // if (index = 2015) {
            //     console.log(hellsyea)
            //   }

        });


    }

    createSequenceControls(map);


//     // Initialize a new plugin instance for all
//     // e.g. $('input[type="range"]') elements.
//     $('input[type="range"]').rangeslider();

//     // Destroy all plugin instances created from the
//     // e.g. $('input[type="range"]') elements.
//     $('input[type="range"]').rangeslider('destroy');

//     // Update all rangeslider instances for all
//     // e.g. $('input[type="range"]') elements.
//     // Usefull if you changed some attributes e.g. `min` or `max` etc.
//     $('input[type="range"]').rangeslider('update', true);

// $('input[type="range"]').rangeslider({

//     // Feature detection the default is `true`.
//     // Set this to `false` if you want to use
//     // the polyfill also in Browsers which support
//     // the native <input type="range"> element.
//     polyfill: true,

//     // Default CSS classes
//     rangeClass: 'rangeslider',
//     disabledClass: 'rangeslider--disabled',
//     horizontalClass: 'rangeslider--horizontal',
//     verticalClass: 'rangeslider--vertical',
//     fillClass: 'rangeslider__fill',
//     handleClass: 'rangeslider__handle',

//     // Callback function
//     onInit: function() {},

//     // Callback function
//     onSlide: function(position, value) {},

//     // Callback function
//     onSlideEnd: function(position, value) {}
// });

// onInit()
// onSlide()
// onSlideEnd()


// var $element = $('input[type="range"]');
// var $handle;

// $element
//   .rangeslider({
//     polyfill: false,
//     onInit: function() {
//       $handle = $('.rangeslider__handle', this.$range);
//       updateHandle($handle[0], this.value);
//     }
//   })
//   .on('input', function() {
//     updateHandle($handle[0], this.value);
//   });

// function updateHandle(el, val) {
//   el.textContent = val;
// }


    function filterByYear(data, year) {
        f = data.filter(function (d) {
            return d.features.properties.info_date == year;
        });
        return f;
    }

//map.removeLayer(geoJsonLayer.fellows)
    var date = L.geoJson(geoJsonLayers.fellows, {
        filter: function (feature, layer) {
            return feature.properties.info_date == 2013;
        }
    });

// function filterLayer(year) {
//     filter: function(feature, geoJsonLayers.fellows) {
//         return feature.properties.info_date == year;
//     }
// }

    console.log(geoJsonLayers);

    var picnic_parks = L.geoJson(myJson, {filter: picnicFilter}).addTo(map);

    function picnicFilter(feature) {
        if (feature.properties.Picnic === "Yes") return true
    }

    var arr = {};//this array to hold your filterred object
    geoJsonLayers.eachLayer(function (layer) {
        if (layer.feature.properties.info_date === 2010) {
            console.log("ture")
            arr.push(layer)
        }
    })


// $( "input" ).change(function( event ) {
//     console.log("clicky")
//     geoJsonLayers.residents_1995 = window[event.target.value];
//     if (map.hasLayer(geoJsonLayers.residents_1995)) {
//         map.removeLayer(geoJsonLayers.residents_1995);
//     }
//
// });


}
$(document).ready(createMap);