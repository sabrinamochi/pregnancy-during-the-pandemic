import loadData from './load-data';
import "intersection-observer";
import scrollama from "scrollama";
// import Stickyfill from 'stickyfilljs';

var Stickyfill = require('stickyfilljs')

const MARGIN = {
    top: 20,
    right: 40,
    bottom: 50,
    left: 40
}
let h = window.innerHeight,
    w = window.innerWidth,
    height = 0,
    width = 0,
    boundedWidth, boundedHeight,
    isMobile = w <= 600 ? true : false,
    xAxis, yAxis,
    dataset;

const $container = d3.select('.reddit__container');
const $graphic = $container.select('.scroll__graphic');
var $tip = $container.select(".tooltip");
const $text = $container.select('.scroll__text');
// const $step = $text.selectAll('.step')
const $svg = $graphic.select('svg')
const $gVis = $svg.select('.vis')
const $gLine = $gVis.select('#sentiment')
const $gBar = $gVis.select('#number')
const $xAxis = $svg.select('.x-axis')
const $yAxis = $svg.select('.y-axis')

const xScale = d3.scaleTime(),
    yScale = d3.scaleLinear();

const selValueCol = '30day_avg_sentiment';
const tipXOffset = 60;

function drawChart() {
    $gLine.selectAll('*').remove();
    $gVis.selectAll('text').remove();
    $gVis.select('.mouse-over-effects').remove();

    xScale
        .domain(d3.extent(dataset, d => d.date))
    yScale
        .domain([0.05, d3.max(dataset, d => d[selValueCol])])

    const callBottomAxis = isMobile ? d3.axisBottom(xScale)
        .tickSizeOuter(0).ticks(5) : d3.axisBottom(xScale).tickSizeOuter(0).ticks(5)

    xAxis = $xAxis
        .attr('transform', `translate(${MARGIN.left}, ${MARGIN.top + boundedHeight})`)
        .call(callBottomAxis)
    yAxis = $yAxis
        .attr('transform', `translate(${MARGIN.left + boundedWidth}, ${MARGIN.top})`)
        .call(d3.axisRight(yScale).tickSize((10)).ticks(5))
    yAxis
        .selectAll('.tick text')
        .attr('y', -10)
        .attr('x', 1)

    const yLabel = $gVis.append('text')
        .attr('class', 'label y-label')
        .attr('transform', `translate(-${boundedWidth}, 0)`)
        .selectAll('tspan')
        .data(['Sentiment', 'Score'])
        .enter().append('tspan')
    yLabel
        .text(d => d)
        .attr('x', -35)
        .attr('y', (d, i) => -MARGIN.top / 2 + i * 30)

    // const xLabel = $gVis.append('text')
    //     .attr('class', 'label', 'x-label')
    //     .text('Date')
    //     .attr('transform', `translate(${boundedWidth/2}, ${boundedHeight + 40})`)
    //     .attr('text-anchor', 'middle')

    const lineGen = d3.line()
        .x(d => xScale(d.date))
        .y(d => yScale(d[selValueCol]))
        .curve(d3.curveMonotoneX)

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

    const sentiment = $gLine
        .append('path')
        .datum(dataset)
        .attr('d', lineGen)
        .attr("stroke", "url(#line-gradient)")
        .attr('fill', 'none')
        .attr('stroke-width', 3)


    // interactive
    const bisect = d3.bisector(function (d) {
        return d.date;
    }).left // retrieve row index of date on parsed csv

    const mouseG = $gVis.append('g')
        .attr('class', 'mouse-over-effects')

    const mouseLine = mouseG.append('line') //the vertical line
        .attr('class', 'mouse-over-line')
        .attr('x0', 0)
        .attr('x1', 0)
        .attr('y0', yScale.range()[1])
        .attr('y1', yScale.range()[0])

    const mouseCircle = mouseG.append('circle')
        .attr('class', 'mouse-over-circle')
        .attr('r', 4)

    const formatTime = d3.timeFormat("%B %d, %Y")
    const barDataScale = d3.scaleLinear()
        .domain([0, 30])
        .range([0, 100])

    mouseG.append('rect') // append a rect to catch mouse movements on canvas
        .attr('width', boundedWidth)
        .attr('height', boundedHeight)
        .attr('fill', 'none')
        .attr('pointer-events', 'all')
        .on('mousemove', function (event) {
            d3.selectAll('.bar-group').remove()
            const mouse = d3.pointer(event, this),
                xDate = xScale.invert(mouse[0]),
                i = bisect(dataset, xDate, 1),
                selectedData = dataset[i],
                x = xScale(selectedData.date),
                y = yScale(selectedData[selValueCol]);
            mouseLine
                .attr('transform', `translate(${x}, 0)`);
            mouseCircle
                .attr('cx', x)
                .attr('cy', y)

            $tip
                .style('left', `${x + tipXOffset}px`)
                .style('top', `${y}px`)
            $tip.select('.date')
                .html(formatTime(selectedData.date))
            $tip.select('#avg-sentiment')
                .html(Math.round(selectedData[selValueCol] * 100) / 100)
            $tip.select('#num-of-posts')
                .html(selectedData.counts)

            let barData = selectedData.most_common_bigrams
                .replace(/\s/g, "")
                .replace("[", "")
                .replace("]", "")
                .replace("('", "")
                .replace("')", "")
                .split("),(")

            barData = barData.map(d => {
                return d = d.replaceAll("(", "")
                    .replaceAll(")", "")
                    .replaceAll("'", "")
                    .split(',')
            }).slice(0, 5)

            const barContainer = $tip.select('.bars')
                .selectAll('.bar-group')
                .data(barData)
                .enter()
                .append('div')
                .attr('class', 'bar-group')
            barContainer
                .append('div')
                .append('span')
                .html(d => `${d[0]} ${d[1]}`)
            barContainer
                .append('div')
                .append('span')
                .attr('class', 'bar')
                .style('width', d => barDataScale(d[2]) + '%')




        })
        .on('mouseover', function () {
            mouseLine
                .style('opacity', 1)
            mouseCircle
                .style('opacity', 1)
            $tip
                .style('opacity', 1)
        })
    // .on('mouseout', function () {
    //     mouseLine
    //         .style('opacity', 0)
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
    height = isMobile ? Math.floor(h * 0.6) : Math.floor(h * 0.7);
    width = $graphic.node().offsetWidth;
    boundedWidth = width - MARGIN.left - MARGIN.right
    boundedHeight = height - MARGIN.top - MARGIN.bottom
    $svg.attr('width', width)
        .attr('height', height)
    $gVis.attr('transform', `translate(${MARGIN.left}, ${MARGIN.top})`)
    xScale
        .range([0, boundedWidth])
    yScale
        .range([boundedHeight, 0])

}

function resize() {
    updateDimensions();
    drawChart();
}

const scroller = scrollama();
let currentStep = '';
const STEP = {
    '': () => {

    }
}

function handleStepEnter({
    index,
    element,
    direction
}) {
    currentStep = d3.select(element).attr('data-step')
    STEP[currentStep]();
}


function setupScroller() {
    Stickyfill.add($graphic.node());
    // scroller.setup({
    //         step: $step.nodes(),
    //         offset: isMobile ? Math.floor(window.innerHeight * 0.5) + "px" : 0.5
    //     })
    //     .onStepEnter(handleStepEnter)

}

const sentimentDataPath = '[final-rm-stwords]daily_posts_sentiment_since_2020_jan.csv'
// dailyPostDataPath = '[final]daily_posts_since_2020_jan.csv',
    

function init() {
    // loadData([dailyPostDataPath, sentimentDataPath]).then(result => {
    //     result[1].forEach(d => {
    //         d['30day_avg_sentiment'] = +d['30day_avg_sentiment'];
    //         d.date = new Date(d.date)
    //     })
    //     dataset = result[1].filter(d => d['30day_avg_sentiment'] !== '' && d['30day_avg_sentiment'] > 0)
    //     console.log(dataset)
    //     resize();
    //     setupScroller();
    // }).catch(console.error);
    loadData(sentimentDataPath).then(result => {
        result.forEach(d => {
            d['30day_avg_sentiment'] = +d['30day_avg_sentiment'];
            d.date = new Date(d.date)
        })
        dataset = result.filter(d => d['30day_avg_sentiment'] !== '' && d['30day_avg_sentiment'] > 0)
        console.log(dataset)
        resize();
        setupScroller();
    }).catch(console.error);
}

export default {
    init,
    resize
};