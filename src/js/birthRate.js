import loadData from './load-data';
import "intersection-observer";
import scrollama from "scrollama";
// import Stickyfill from 'stickyfilljs';

var Stickyfill = require('stickyfilljs')

const MARGIN = {
    top: 50,
    right: 40,
    bottom: 50,
    left: 20
}
let h = window.innerHeight,
    w = window.innerWidth,
    height = 0,
    width = 0,
    boundedWidth, boundedHeight, lineChartWidth, lineChartHeight,
    isMobile = w <= 600 ? true : false,
    dataset;

const $container = d3.select('#less-baby');
const $graphic = $container.select('.birth-rates-chart');
// var $tip = $container.select(".tooltip");
const $svg = $graphic.select('svg')
const $gVis = $svg.select('g.vis')
// const $gLine = $gVis.select('#sentiment')
// const $gBar = $gVis.select('#number')
// const $xAxis = $svg.select('.x-axis')
// const $yAxis = $svg.select('.y-axis')

const xScale = d3.scaleTime(),
    yScale = d3.scaleLinear();

// const tipXOffset = 60;

function drawChart() {

    $gVis.selectAll('.line-group').remove()

    xScale
        .domain(d3.extent(dataset, d => d.date))

    const callBottomAxis = isMobile ? d3.axisBottom(xScale)
        .tickSizeOuter(0).ticks(2) : d3.axisBottom(xScale).tickSizeOuter(0).ticks(2)

    // Set the gradient
    $svg.append("linearGradient")
        .attr("id", "line-gradient")
        .attr("gradientUnits", "userSpaceOnUse")
        .attr("x1", xScale.range()[0])
        .attr("y1", yScale.range()[0])
        .attr("x2", xScale.range()[1])
        .attr("y2", yScale.range()[1])
        .selectAll("stop")
        .data([{
                offset: "0%",
                color: "#0E4FB3"
            },
            {
                offset: "100%",
                color: "#EDB95A"
            }
        ])
        .enter().append("stop")
        .attr("offset", function (d) {
            return d.offset;
        })
        .attr("stop-color", function (d) {
            return d.color;
        });

    const states = [...new Set(dataset.map(d => d.State))]
    const groupedData = d3.group(dataset, d => d.State)

    const lineGroup = $gVis.selectAll('.line-group')
        .data(groupedData)
        .enter()
        .append('g')
        .attr('class', 'line-group')
        .attr('transform', (d, i) => {
            const yPosition = i <= 2 ? 0 : 1;
            if (i <= 2) {
                return `translate(${i*boundedWidth/3}, ${yPosition*boundedHeight/2})`
            } else {
                return `translate(${(i-3)*boundedWidth/3}, ${yPosition*boundedHeight/2})`
            }

        })


    const stateLabel = lineGroup.append('text')
        .attr('class', 'label')
        .append('tspan')
        .text(d => d[0])

    const xAxis = lineGroup.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0, ${lineChartHeight})`)
        .call(callBottomAxis)

    const yAxis = lineGroup.append('g')
        .attr('id', d => `${d[0]}-y-axis`)
        .attr('class', 'y-axis')
        .attr('transform', `translate(${-5}, 0)`)

    yAxis.selectAll('.tick')
        .select('text')
        
    const line = lineGroup
        .append('path')
        .datum(d => [d[1]][0])
        .attr('stroke-width', 3)
        .attr('d', d => {
            yScale.domain(d3.extent(d, s => s.Count));
            const selState = d[0].State
            d3.select(`#${selState}-y-axis`)
                .call(d3.axisLeft(yScale).tickFormat(d3.formatPrefix(".1", 1e5)).tickSize((5)).ticks(2))
            return d3.line()
                .x(d => xScale(d.date))
                .y(d => yScale(d.Count))
                .curve(d3.curveMonotoneX)(d)
        })
        // .attr("stroke", "url(#line-gradient)")
        .attr('stroke', "rgb(0,0,0)")
        .attr('fill', 'none')
        .attr('stroke-width', 2)




    // // interactive
    // const bisect = d3.bisector(function (d) {
    //     return d.date;
    // }).left // retrieve row index of date on parsed csv

    // const mouseG = $gVis.append('g')
    //     .attr('class', 'mouse-over-effects')

    // // const mouseLine = mouseG.append('line') //the vertical line
    // //     .attr('class', 'mouse-over-line')
    // //     .attr('x0', 0)
    // //     .attr('x1', 0)
    // //     .attr('y0', yScale.range()[1])
    // //     .attr('y1', yScale.range()[0])

    // const mouseCircle = mouseG.append('circle')
    //     .attr('class', 'mouse-over-circle')
    //     .attr('r', 4)

    // const formatTime = d3.timeFormat("%B %d, %Y")
    // const barDataScale = d3.scaleLinear()
    //     .domain([0, 30])
    //     .range([0, 100])

    // mouseG.append('rect') // append a rect to catch mouse movements on canvas
    //     .attr('width', boundedWidth)
    //     .attr('height', boundedHeight)
    //     .attr('fill', 'none')
    //     .attr('pointer-events', 'all')
    //     .on('mousemove', function (event) {
    //         d3.selectAll('.bar-group').remove()
    //         const mouse = d3.pointer(event, this),
    //             xDate = xScale.invert(mouse[0]),
    //             i = bisect(dataset, xDate, 1),
    //             selectedData = dataset[i],
    //             x = xScale(selectedData.date),
    //             y = yScale(selectedData[selValueCol]);
    //         // mouseLine
    //         //     .attr('transform', `translate(${x}, 0)`);
    //         mouseCircle
    //             .attr('cx', x)
    //             .attr('cy', y)

    //         const tipW = $tip.node().getBoundingClientRect().width

    //         $tip
    //             .style('left', ()=>{
    //                 if ((boundedWidth - x) < 50){
    //                     return `${x - tipXOffset / 2 - tipW }px`
    //                 } else{
    //                     return `${x + tipXOffset}px`
    //                 }
    //             })
    //             .style('top', `${y}px`)
    //         $tip.select('.date')
    //             .html(formatTime(selectedData.date))
    //         $tip.select('#avg-sentiment')
    //             .html(Math.round(selectedData[selValueCol] * 100) / 100)
    //         $tip.select('#num-of-posts')
    //             .html(selectedData.counts)

    //         let barData = selectedData.most_common_bigrams
    //             .replace(/\s/g, "")
    //             .replace("[", "")
    //             .replace("]", "")
    //             .replace("('", "")
    //             .replace("')", "")
    //             .split("),(")

    //         barData = barData.map(d => {
    //             return d = d.replaceAll("(", "")
    //                 .replaceAll(")", "")
    //                 .replaceAll("'", "")
    //                 .split(',')
    //         }).slice(0, 5)

    //         const barContainer = $tip.select('.bars')
    //             .selectAll('.bar-group')
    //             .data(barData)
    //             .enter()
    //             .append('div')
    //             .attr('class', 'bar-group')
    //         barContainer
    //             .append('div')
    //             .append('span')
    //             .html(d => `${d[0]} ${d[1]}`)
    //         barContainer
    //             .append('div')
    //             .append('span')
    //             .attr('class', 'bar')
    //             .style('width', d => barDataScale(d[2]) + '%')




    //     })
    //     .on('mouseover', function () {
    //         // mouseLine
    //         //     .style('opacity', 1)
    //         mouseCircle
    //             .style('opacity', 1)
    //         $tip
    //             .style('opacity', 1)
    //     })
    // .on('mouseout', function () {
    //     // mouseLine
    //     //     .style('opacity', 0)
    //     mouseCircle
    //         .style('opacity', 0)
    //     $tip
    //         .style('opacity', 0)
    // })

}

function updateDimensions() {
    h = window.innerHeight;
    w = window.innerWidth;
    isMobile = w <= 600 ? true : false;
    height = $graphic.node().offsetHeight;
    width = $graphic.node().offsetWidth;
    boundedWidth = width - MARGIN.left - MARGIN.right
    boundedHeight = height - MARGIN.top - MARGIN.bottom
    $svg.attr('width', width)
        .attr('height', height)
    $gVis.attr('transform', `translate(${MARGIN.left}, ${MARGIN.top})`)
    lineChartWidth = boundedWidth / 3 - 30;
    lineChartHeight = boundedHeight / 2 - 100;
    xScale
        .range([0, lineChartWidth])
    yScale
        .range([lineChartHeight, 0])

}

function resize() {
    updateDimensions();
    drawChart();
}

// const scroller = scrollama();
// let currentStep = '';
// const STEP = {
//     '': () => {

//     }
// }

// function handleStepEnter({
//     index,
//     element,
//     direction
// }) {
//     currentStep = d3.select(element).attr('data-step')
//     STEP[currentStep]();
// }


// function setupScroller() {
//     Stickyfill.add($graphic.node());
//     // scroller.setup({
//     //         step: $step.nodes(),
//     //         offset: isMobile ? Math.floor(window.innerHeight * 0.5) + "px" : 0.5
//     //     })
//     //     .onStepEnter(handleStepEnter)

// }

const birthCountsPath = 'birth_rates/[final]all_states_births.csv',
    birthYoYPath = 'birth_rates/[final]all_states_yoybirths.csv'


function init() {
    loadData([birthCountsPath, birthYoYPath]).then(result => {

        result[0].forEach(d => {
            d.Count = +d.Count;
            d.date = new Date(`${d.Year}-${d.Month}`)
        })
        result[1].forEach(d => {
            d.birth_yoy = +d.birth_yoy;
            d.date = new Date(`${d.Year}-${d.month}`)
        })
        dataset = result[0]
        resize();
        // setupScroller();
    }).catch(console.error);
}

export default {
    init,
    resize
};