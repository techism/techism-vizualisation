/* var data; // a global

d3.csv("http://localhost:8000/data/event_short.csv", function(csv) {
  data = csv;
  visualizeit();
});

function visualizeit(){
	console.log("visualisation");
        console.log(data);
	var svg = d3.select("body").append("svg").attr("width", 720).attr("height", 240).append("g").attr("transform", "translate(0,128)");
	svg.append("circle").attr("cx", 5).attr("cy", 5).attr("r", 2.5);
}*/



d3.text("http://localhost:8000/data/event_short.csv", function(datasetText) {

var parsedCSV = d3.csv.parseRows(datasetText);

var sampleHTML = d3.select("#viz")
    .append("table")
    .style("border-collapse", "collapse")
    .style("border", "2px black solid")

    .selectAll("tr")
    .data(parsedCSV)
    .enter().append("tr")

    .selectAll("td")
    .data(function(d){return d;})
    .enter().append("td")
    .style("border", "1px black solid")
    .style("padding", "5px")
    .on("mouseover", function(){d3.select(this).style("background-color", "aliceblue")})
    .on("mouseout", function(){d3.select(this).style("background-color", "white")})
    .text(function(d){return d;})
    .style("font-size", "12px");
});
