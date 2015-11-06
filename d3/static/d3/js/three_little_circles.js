$(function() {

    var spaceCircles = [30, 70, 110];

    var svgContainer = d3.select("body").append("svg")
                                        .attr("width", 200)
                                        .attr("height", 200);

    var circles = svgContainer.selectAll("circle")
                              .data(spaceCircles)
                              .enter()
                              .append("circle");

    var circleAttr = circles
                     .attr("cx", function(d) { return d; })
                     .attr("cy", function(d) { return d; })
                     .attr("r", 20)
                     .style("fill", function(d) {
                        var returnColor;
                        switch(d) {
                            case 30:
                                returnColor = "green";
                                break;
                            case 70:
                                returnColor = "purple";
                                break;
                            case 110:
                                returnColor = "red";
                                break;
                        }
                        return returnColor;
                     });


});
