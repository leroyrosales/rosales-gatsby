var incapDataPath = "/innealta-capital/wp-content/themes/innealta/USA_Inflation_2017.txt";
var incapLogOrLinear = "log";

//growth of wealth vars
var colorsInCap = ["#E5E5E5", "#CBE1E5", "#78BCE7","#006E80", "#002A56","#B2BFCC"];

var incapMargin = {top: 20, right: 0, bottom: 200, left: 0};
var incapSvgHeight = 0;
var incapSvgWidth = 0;
var incapIsDrawn = false;
var incapFinalFundData = [];
var incapInitialFundData = [];
var incapXMin = 0;
var incapXMax = 0
var incapWidth = incapSvgWidth - incapMargin.left - incapMargin.right;
var incapHeight = incapSvgHeight - incapMargin.top - incapMargin.bottom;
var incapSvg;
var incapArea;

var parseDate;

var incapScaleX;
var incapScaleY;
var fundNames;
var allFundValues = [];

var incapDelay = 200;
var incapDuration = 2200;
var incapAxisFadeIn = 500;
var incapMarginSize = 24;

var incapMinYear = 1998;
var incapMaxYear = 2017;

var incapMinVal = 0;
var incapMaxVal = 1;
var incapCurrencySym;
var incapCurrencyLabel;
var incapTwoDecimal = false;

function initializeGoD() {
	"use strict";

	var incapPathsNoFill;	
	var indices;

	incapSvgHeight = windowSize.width < breakpoints.mobile ? 400 : windowSize.width < breakpoints.tablet ? 500 : 660;
	incapSvgWidth = $("#incap-graph").width();
	incapMarginSize = windowSize.width < breakpoints.mobile ? 12 : 24;

	parseDate = d3.time.format("%x").parse;

	d3.tsv(incapDataPath, function(error, data){
		if(error) throw error;

		incapCurrencySym = data.splice(0,1)[0].Date;
		incapCurrencyLabel = data.splice(0,1)[0].Date;
		indices = data.splice(0,1)[0];
		
		fundNames = d3.keys(data[0]);
		fundNames.shift();
		
		incapFinalFundData = orderFundData(data, fundNames, false, indices);
		incapMinVal = d3.min(incapFinalFundData, function(af){ return d3.min(af.values, function(d) { return parseFloat(d.value); }); });
		incapMaxVal = d3.max(incapFinalFundData, function(af){ return d3.max(af.values, function(d) { return parseFloat(d.value); }); });

		incapMargin.bottom = incapMinVal < 1 ? incapSvgHeight/7 * (1-incapMinVal) : 0;

		incapWidth = incapSvgWidth - incapMargin.left - incapMargin.right;
		incapHeight = incapSvgHeight - incapMargin.top - incapMargin.bottom;

		incapScaleX = d3.time.scale().range([0, incapWidth]);
		incapScaleY = incapLogOrLinear === "linear" ? d3.scale.linear() : d3.scale.log();

		incapScaleY.range([incapHeight, 0]);

		incapArea = d3.svg.area()
			.x(function(d) { return incapScaleX(d.date); })
			.y0(incapHeight)
			.y1(function(d) { return incapScaleY(d.value); })
			.interpolate("linear");

		d3.select("#incap-graph svg")
			.attr("class", "incap-svg")
			.attr("width", incapSvgWidth)
			.attr("height", incapSvgHeight)
			.append("g")
			.attr("transform", "translate(" + incapMargin.left + "," + incapMargin.top + ")");
		incapSvg = d3.select("#incap-graph svg");

		incapMinYear = incapFinalFundData[0].values[1].date.getYear() + 1900;
		incapMaxYear = incapFinalFundData[0].values[incapFinalFundData[0].values.length - 1].date.getYear() + 1900;

		incapXMin = d3.min(data, function(d){ return parseDate(d.Date) });
		incapXMax = d3.max(data, function(d){ return parseDate(d.Date) })
		incapScaleX.domain(d3.extent(data, function(d) {return parseDate(d.Date)}));
		incapScaleY.domain([1, incapMaxVal]);

		incapInitialFundData = orderFundData(data, fundNames, true, indices);
		incapPathsNoFill = incapSvg.selectAll(".incap-path")
			.data(incapInitialFundData)
			.enter().append("g")
			.attr("class", "incap-path")
			.attr("transform", "translate(0," + (incapMargin.top)/2 + ")");
		incapPathsNoFill.append("path")
			.attr("fill", function(d, i) { return colorsInCap[i]; })
			.attr("d", function(d) { return incapArea(d.values); })
	});

	setTimeout(function () {
		checkGoD();
	}, incapDelay);
}

function orderFundData(data, names, empty, indices) {
	"use strict";

	var incapFinalFundData = [];
	var dateValue = [];
	var singleFund = [];

	incapTwoDecimal = !empty ? true : incapTwoDecimal;

	names.forEach(function(name, i) {
		data.map(function(fund){
			dateValue.push({
				date: parseDate(fund.Date),
				value: !empty ? fund[name] : 1
			});
		});
		incapFinalFundData.push({
			fundName: $.trim(name),
			indexName: $.trim(indices[name]) || null,
			values: dateValue,
			maxValue: parseFloat(dateValue[dateValue.length-1].value)
		});

		if (parseFloat(dateValue[dateValue.length-1].value) >= 10 && !empty) {
			incapTwoDecimal = false;
		}
		dateValue = [];
	});
	incapFinalFundData.sort(function (a, b) {
		return b.maxValue - a.maxValue;
	});

	incapFinalFundData.forEach(function (fund, i) {
		fund.prevMax = parseFloat(i !== incapFinalFundData.length - 1 ? incapFinalFundData[i+1].maxValue : 1);
	});

	return incapFinalFundData;
}

function checkGoD() {
	"use strict";

	if (!incapIsDrawn && scrollTop >= $('#incap-graph').offset().top - incapSvgHeight && scrollTop <= $('#incap-graph').offset().top + incapSvgHeight) {
		drawGoD();
		incapIsDrawn = true;
	}
}

function drawGoD() {
	"use strict";

	incapArea = d3.svg.area()
		.x(function(d) { return incapScaleX(d.date); })
		.y0(incapHeight)
		.y1(function(d) { return incapScaleY(d.value); })
		.interpolate("linear");

	var xAxisLeftLabel = d3.svg.axis().scale(incapScaleX).orient("bottom");
	var xAxisRightLabel = d3.svg.axis().scale(incapScaleX).orient("bottom");

	var line = d3.svg.line()
		.x(function(d){ return incapScaleX(d.date); })
		.y(function(d){ return incapScaleY(d.value); })
		.interpolate("linear");

	var initialFill;
	var labelGroup;

	d3.selectAll(".incap-path")
		.data(incapFinalFundData)		
		.select("path")
		.attr("transform", "translate(0," + (incapMargin.top)/2 + ")")
		.transition()
		.delay(incapDelay)
		.duration(incapDuration)
		.attr("fill", function(d, i) { return colorsInCap[i]; })
		.attr("d", function(d) { return incapArea(d.values); })


	d3.selectAll(".incap-path")
		.append("text")
		.attr("class", "fund-label")  
		.attr("font-size","14px")    
		.attr("transform","translate(" + (incapWidth - incapMarginSize) + ",0)")
		.attr("y", function (d, i) { return ((incapScaleY(d.prevMax) - incapScaleY(d.maxValue))/2) + incapScaleY(d.maxValue) + incapMargin.top - 6; })
		.attr("text-anchor", "end")
		.text(function (d) { return d.fundName +  ": " + incapCurrencySym + (incapTwoDecimal ? parseFloat(d.maxValue).toFixed(2) : Math.round(d.maxValue).toLocaleString())})
		.attr("fill", function (d, i) {return i < 2 ? "rgba(54,61,67,1)"  : "rgba(255,255,255,1)"})
		.attr("opacity", 0)
		
		.transition()
		.ease("linear")
		.delay(incapAxisFadeIn/2)
		.duration(incapAxisFadeIn)
		.attr("opacity",1);

	d3.selectAll(".incap-path")
		.each(function(d, i) {
			var label = d3.select(this).select(".fund-label")
			if (d.fundName.length > 20) {
				label.text("");

				var fundName = d.fundName.split(" ");
				var line1 = Math.ceil(fundName.length/1);
				var text = "";
				var i;

				for (i = 0; i < line1; i += 1) {
					text += " " + fundName[i];
				}
				label.append("tspan")
					//.attr("dy", "1.2em")
					.attr("x", "-3em")
					.text(text);

				text = "";
				for (i = line1; i < fundName.length; i += 1) {
					text += " " + fundName[i];
				}

				label.append("tspan")
					//.attr("dy", "1.2em")
					.attr("x", 0)
					.text(text + ": " + incapCurrencySym + (incapTwoDecimal ? parseFloat(d.maxValue).toFixed(2) : Math.round(d.maxValue).toLocaleString()));
			}
		})

	incapSvg.append("text")
		.attr("class", "incap-x-dollar")
		.attr("transform", "translate(0,0)")
		.attr("opacity", 0)
		.attr("x", (incapWidth / 2))
		.attr("y",  incapHeight)
		.attr("text-anchor", "middle")
		.text(incapCurrencySym + "1")
		.transition()
		.delay(incapAxisFadeIn)
		.duration(incapAxisFadeIn)
		.attr("opacity", 1)
		.style("fill","white");


	xAxisLeftLabel.tickFormat(function() { return incapMinYear; });
	xAxisLeftLabel.tickValues([incapXMin]);
	incapSvg.append("g")
		.attr("class", "incap-x-axis-l")
		.attr("transform", "translate(" + incapMarginSize + "," + (incapHeight + incapMargin.top + 6) + ")")
		.call(xAxisLeftLabel);

	xAxisRightLabel.tickFormat(d3.time.format("%Y"));
	xAxisRightLabel.tickValues([incapXMax]);
	incapSvg.append("g")
		.attr("class", "incap-x-axis-r")
		.attr("transform", "translate(-" + incapMarginSize + "," + (incapHeight + incapMargin.top + 6) + ")")
		.call(xAxisRightLabel);

	incapSvg.selectAll(".incap-x-axis-r text")
		.style("text-anchor", "end");
	incapSvg.selectAll(".incap-x-axis-l text")
		.style("text-anchor", "start");

	incapSvg.append("g")
		.attr("class", "incap-y-axis");
	setYAxis();  

	$(".incap-x-axis-l").delay(incapAxisFadeIn).show(3000);
	$(".incap-x-axis-r").delay(incapAxisFadeIn).show(3000);
}

function resizeGoD() {
	"use strict";

	incapSvgWidth = $("#incap-graph").width();
	incapSvgHeight = windowSize.width < breakpoints.mobile ? 400 : windowSize.width < breakpoints.tablet ? 500 : 660;	
	incapMargin.bottom = incapMinVal < 1 ? incapSvgHeight/7 * (1-incapMinVal) : 0;
	incapMarginSize = windowSize.width < breakpoints.mobile ? 12 : 24;

	incapWidth = incapSvgWidth - incapMargin.left - incapMargin.right;
	incapHeight = incapSvgHeight - incapMargin.top - incapMargin.bottom;

	incapScaleX.range([0, incapWidth]);
	incapScaleY.range([incapHeight, 0]);

	incapArea.x(function(d) { return incapScaleX(d.date); })
		.y0(incapHeight)
		.y1(function(d) { return incapScaleY(d.value); });

	incapSvg.attr("width", incapSvgWidth)
		.attr("height", incapSvgHeight);

	incapSvg.selectAll(".incap-path")
		.selectAll("path")
		.attr("d", function(d) { return incapArea(d.values); });;

	incapSvg.selectAll(".fund-label")
		.attr("transform","translate(" + (incapWidth - incapMarginSize) + ",0)")         
		.attr("y", function (d, i) { return ((incapScaleY(d.prevMax) - incapScaleY(d.maxValue))/2) + incapScaleY(d.maxValue) + incapMargin.top - 6; });
		
	incapSvg.selectAll(".incap-x-dollar")
		.attr("x", (incapWidth / 2))
		.attr("y",  incapHeight);

	incapSvg.selectAll(".incap-x-axis-l")
		.attr("transform", "translate(" + incapMarginSize + "," + (incapHeight + incapMargin.top + 6) + ")");
	incapSvg.selectAll(".incap-x-axis-r")
		.attr("transform", "translate(-" + incapMarginSize + "," + (incapHeight + incapMargin.top + 6) + ")");
	incapSvg.selectAll(".incap-x-axis-r .tick")
		.attr("transform", "translate(" + incapSvgWidth +", 0)");

	setYAxis();
}

function setYAxis() {
	"use strict";

	var incapYAxis = incapSvg.select(".incap-y-axis");
	var tickValues = getGoDYAxisVals();
	var incapYAxisScale = d3.svg.axis().scale(incapScaleY)
		.tickSize(0)
		.tickValues(tickValues)
		.tickFormat(function(d) {
			return incapScaleY.tickFormat(4,d3.format(",d"))(d)
		})
		.orient("left");
	var transY = incapMargin.top + 18;
	var tickColor = "#002a56";

	incapYAxis.selectAll("*").remove();
	incapYAxis.call(incapYAxisScale);

	if(incapWidth > breakpoints.tablet) {
		incapYAxis.attr("transform", "translate("+ (incapWidth/2) + "," + transY +")");
		incapYAxis.selectAll(".tick")
			.attr("x1", 40)
			.attr("x2", 120)
			.attr("stroke", tickColor)
			.attr("stroke-width", 1);
		incapYAxis.selectAll(".tick text")
			.each(function(data) {
				var text = d3.select(this);
				text.text(incapCurrencySym + data.toLocaleString())
				text.attr("x", 0);
				text.style("text-anchor", "middle");
				text.attr("fill", tickColor);
			});
	}
	else {
		incapYAxis.attr("transform", "translate(" + incapMarginSize + "," + transY +")");
		incapYAxis.selectAll(".tick text")
			.each(function(data) {
				var text = d3.select(this);
				text.text(incapCurrencySym + data.toLocaleString())
				text.attr("x", 34);
				text.style("text-anchor", "start")
				text.attr("fill", tickColor);
			});
	} 

	if (!incapIsDrawn) {
		$(".incap-y-axis").delay(incapAxisFadeIn).show(incapAxisFadeIn);
	}
}

function getGoDYAxisVals(){
	"use strict";
	var vals = [];
	var i;
	var j;

	if (incapMaxVal >= 10) {
		if (incapLogOrLinear === "linear") {
			var max = incapMaxVal < 40 ? parseInt((incapMaxVal + 1) / 6, 10) * 6 : parseInt(incapMaxVal/ 10, 10) * 10;
			if (max === 10) {
				vals.push(2,4,6,8,10);
			} else {
				for (i = 4; i > 0; i -= 1) {
					if (max%i === 0) {
						for (j = 1; j <= i; j += 1) {
							vals.push(max/i * j);
						}
						break;
					}
				}
			}
		} else {
			var len = Math.max(1, parseInt(parseInt(incapMaxVal, 10).toString().length, 10) - 1);
			for (i = 1; i <= len; i += 1) {
				vals.push(Math.pow(10, i));
			}
		}
	}

	return vals;
}