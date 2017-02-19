import React from "react";

import * as d3 from "d3";

import ContactStore from "../stores/ContactStore";

import * as ContactActions from "../actions/ContactActions";

export default class GenderChart extends React.Component {

    drawChart = (data) => {

        d3.select("#gender-chart svg").remove()

        var width = 230,
            height = 230,
            radius = Math.min(width, height) / 2;

        var color = d3.scale.ordinal()
            .range(["#f39c12", "#2980b9", "#f1c40f", "#34495e", "#e74c3c", "#f39c12", "#2980b9"]);

        data = d3.nest()
            .key(function(d) { return d.gender; })
            .entries(data);

        var pie = d3.layout.pie()
            .sort(null)
            .value(function(d) { return d.values.length; });

        var arc = d3.svg.arc()
            .outerRadius(radius - 10)
            .innerRadius(0);

        var labelArc = d3.svg.arc()
            .outerRadius(radius - 40)
            .innerRadius(radius - 40);

        if (!svg) {
            var svg = d3.select("#gender-chart").append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        }

        var g = svg.selectAll(".arc")
            .data(pie(data))
            .enter().append("g")
            .attr("class", "arc");

        g.append("path")
            .attr("d", arc)
            .attr("fill", function(d) { return color(d.data.values) });

        g.append("text")
            .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
            .attr("dy", ".35em")
            .text(function(d) { return d.data.key + " (" + d.data.values.length + ")"; });

    };

    componentWillMount() {
        ContactStore.on("change", () => {
            this.drawChart(this.props.contacts)
        });
    }

    render() {
        return (
            <div>
                <h2>Male/Female distribution</h2>
                <div id="gender-chart"></div>
            </div>
        );
    }
}