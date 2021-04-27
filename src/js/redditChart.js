import loadData from './load-data';
import "intersection-observer";
import scrollama from "scrollama";
// import Stickyfill from 'stickyfilljs';

var Stickyfill = require('stickyfilljs')

const $container = d3.select('.reddit__container');
const $graphic = $container.select('.scroll__graphic');
var $tip = $container.select(".tooltip");
const $text = $container.select('.scroll__text');
const $step = $text.selectAll('.step')
const $svg = $graphic.select('svg')
const $gVis = $svg.select('.vis')
const $gLine = $gVis.select('#sentiment')
const $gBar = $gVis.select('#number')
const $xAxis = $svg.select('.x-axis')
const $yAxis = $svg.select('.y-axis')
const $explain = $graphic.select('.explain')


let h = window.innerHeight,
    w = window.innerWidth,
    height = 0,
    width = 0,
    explainTextHeight = $explain.node() ? $explain.node().getBoundingClientRect().height : 100,
    boundedWidth, boundedHeight,
    isMobile = w <= 600 ? true : false,
    yAxis,
    dataset;

const MARGIN = {
    top: 40,
    right: isMobile ? 20 : 40,
    bottom: 30,
    left: isMobile ? 0 :20
}

const xScale = d3.scaleTime(),
    yScale = d3.scaleLinear();

const selValueCol = '30day_avg_sentiment';
let tipXOffset = isMobile ? 0 : 60;

const formatTime = d3.timeFormat("%B %d, %Y");
const barDataScale = d3.scaleLinear()
    .domain([0, 20])
    .range([0, 100])

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

    $xAxis
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
        .attr('transform', `translate(${boundedWidth}, 0)`)
        .selectAll('tspan')
        .data(['Sentiment', 'Score'])
        .enter().append('tspan')
        .text(d => d)
        .attr('x', 15)
        .attr('y', (d, i) => -MARGIN.top / 1.5 + i * 12)


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

    // const mouseLine = mouseG.append('line') //the vertical line
    //     .attr('class', 'mouse-over-line')
    //     .attr('x0', 0)
    //     .attr('x1', 0)
    //     .attr('y0', yScale.range()[1])
    //     .attr('y1', yScale.range()[0])

    const mouseCircle = mouseG.append('circle')
        .attr('class', 'mouse-over-circle')
        .attr('r', 4)

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
            // mouseLine
            //     .attr('transform', `translate(${x}, 0)`);
            mouseCircle
                .attr('cx', x)
                .attr('cy', y)

            const tipW = $tip.node().getBoundingClientRect().width,
                tipH = $tip.node().getBoundingClientRect().height;

            $tip
                .style('left', () => {

                    if ((boundedWidth - x) < 100) {
                        return `${x - tipXOffset / 2 - tipW }px`
                    } else {
                        return `${x + tipXOffset}px`
                    }
                })
                .style('top', () => {

                    if ((boundedHeight - y) < 100) {
                        return `${y - tipXOffset / 2 - tipH }px`
                    } else {
                        return `${y}px`
                    }
                })
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

            const bar = barContainer
                .append('div')
                .attr('class', (d, i) => `barDiv${i}`)

            bar.append('span')
                .attr('class', 'bar')
                .style('width', d => barDataScale(d[2]) + '%')

            // const bar0Height = d3.selectAll('.barDiv0').nodes()[0].clientHeight

            d3.selectAll('.barDiv0')
                .append('span')
                .attr('class', 'scale-0')
                .html('0')
            d3.selectAll('.barDiv0')
                .append('span')
                .attr('class', 'scale-25')
                .html('25')
        })
        .on('mouseover', function () {
            // mouseLine
            //     .style('opacity', 1)
            mouseCircle
                .style('opacity', 1)
            $tip
                .style('opacity', 1)
                .style('display', 'block')
        })
        .on('mouseout', function () {
            // mouseLine
            //     .style('opacity', 0)
            mouseCircle
                .style('opacity', 0)
            $tip
                .style('opacity', 0)
                .style('display', 'none')
        })

}

function updateDimensions() {
    h = window.innerHeight;
    w = window.innerWidth;
    isMobile = w <= 600 ? true : false;
    tipXOffset = isMobile ? 0 : 60;
    explainTextHeight = $explain.node() ? $explain.node().getBoundingClientRect().height : 100,
        height = isMobile ? h * 0.6 - explainTextHeight : h * 0.6 - explainTextHeight;
    width = $graphic.node() ? $graphic.node().offsetWidth : 100;
    MARGIN.bottom = 30;
    MARGIN.right = isMobile ? 20 : 40;
    MARGIN.left = isMobile ? 0 : 20;
    boundedWidth = width - MARGIN.left - MARGIN.right
    boundedHeight = height - MARGIN.top - MARGIN.bottom
    $svg.attr('width', width)
        .attr('height', height)
    $gVis.attr('transform', `translate(${MARGIN.left}, ${MARGIN.top})`)
    $explain.style('transform', `translate(${MARGIN.left}px, ${MARGIN.top}px)`)
        .style('width', `${boundedWidth}px`)
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
    'turned-negative': () => {
        d3.select('.mouse-over-circle')
            .style('opacity', 0)
        $tip
            .style('opacity', 0)
            .style('display', 'none')
    },
    'most-used-word': () => {
        // console.log(dataset)
        const selectedData = dataset.filter(d => d.most_common_bigrams=="[(('covid', '19'), 10), (('my', 'husband'), 9), (('home', 'work'), 5), (('blood', 'pressure'), 5), (('first', 'time'), 5), (('time', 'pregnant'), 5), (('minutes', 'apart'), 5), (('freaking', 'out'), 4), (('due', 'covid'), 4), (('5', 'minutes'), 4)]")[0],
            x = xScale(selectedData.date),
            y = yScale(selectedData[selValueCol]);
        console.log(selectedData)

        d3.select('.mouse-over-circle')
            .attr('cx', x)
            .attr('cy', y)
            .style('opacity', 1)

        const tipW = $tip.node().getBoundingClientRect().width,
            tipH = $tip.node().getBoundingClientRect().height;

        $tip
            .style('left', () => {

                if ((boundedWidth - x) < 100) {
                    return `${x - tipXOffset / 2 - tipW }px`
                } else {
                    return `${x + tipXOffset}px`
                }
            })
            .style('top', () => {

                if ((boundedHeight - y) < 100) {
                    return `${y - tipXOffset / 2 - tipH }px`
                } else {
                    return `${y}px`
                }
            })
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

        const bar = barContainer
            .append('div')
            .attr('class', (d, i) => `barDiv${i}`)

        bar.append('span')
            .attr('class', 'bar')
            .style('width', d => barDataScale(d[2]) + '%')

        // const bar0Height = d3.selectAll('.barDiv0').nodes()[0].clientHeight

        d3.selectAll('.barDiv0')
            .append('span')
            .attr('class', 'scale-0')
            .html('0')
        d3.selectAll('.barDiv0')
            .append('span')
            .attr('class', 'scale-25')
            .html('25')

        $tip
            .style('opacity', 1)
            .style('display', 'block')


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
    if ($graphic.node()) {
        Stickyfill.add($graphic.node());
    }
    if($step.nodes()==true){
        scroller.setup({
            step: $step.nodes(),
            offset: isMobile ? Math.floor(window.innerHeight * 0.9) + "px" : 0.8
        })
        .onStepEnter(handleStepEnter)
    }

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
        // console.log(d3.extent())
        resize();
        setupScroller();
    }).catch(console.error);
}

export default {
    init,
    resize
};