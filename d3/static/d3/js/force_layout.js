//$(function() {
    var svgContainer = d3.select("#body")
        .append("svg")
        .attr("width", 400)
        .attr("height", 400);

    var nodes = [
        { name: "Item1" },
        { name: "Item1a" },
        { name: "Item1b" }
    ];

    // The `links` array contains objects with a `source` and a `target`
    // property. The values of those properties are the indices in
    // the `nodes` array of the two endpoints of the link.

    var links = [
        { source: 0, target: 1 },
        { source: 0, target: 2 }
    ];

    var force = d3.layout.force()
    .nodes(nodes)
    .links(links)
    .size([400, 400])
    .linkStrength(0.1)
    .friction(0.9)
    .linkDistance(20)
    .charge(-30)
    .gravity(0.1)
    .theta(0.8)
    .alpha(0.1)
    .start();

    //force.linkDistance(width/3.05);

    //force.start();

//});
