import loadData from './load-data';
import "intersection-observer";
import scrollama from "scrollama";

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
    boundedWidth, boundedHeight, barChartWidth,
    isMobile = w <= 600 ? true : false,
    datasetRace, datasetIncome;

const $container = d3.select('#less-baby');
const $graphic = $container.select('.disparity-bar-charts');
// var $tip = $container.select(".tooltip");
const $svg = $graphic.select('svg')
const $gVis = $svg.select('.vis')
const $gVisRace = $gVis.select('#race')
const $gVisRaceBars = $gVisRace.select('.bars')
const $gVisRaceXAxis = $gVisRace.select('.x-axis')
const $gVisIncome = $gVis.select('#income')
const $gVisIncomeBars = $gVisIncome.select('.bars')
const $gVisIncomeXAxis = $gVisIncome.select('.x-axis')


const xScale = d3.scaleBand().paddingInner(0.1).paddingOuter(0.2),
    yScale = d3.scaleLinear();

function drawChart() {
    yScale
        .domain([0, d3.max(datasetRace, d => d.value)])

    $gVisRaceXAxis
        .attr('transform', `translate(0, ${boundedHeight})`)

    $gVisIncome
        .attr('transform', `translate(${barChartWidth + 10}, 0)`)
    $gVisIncomeXAxis
        .attr('transform', `translate(0, ${boundedHeight})`)

    xScale
        .domain(['white', 'black', 'hispanic']);
    
    const raceBar = $gVisRaceBars
        .selectAll('.race-bar')
        .data(datasetRace)
    
    const raceBarEnter = raceBar
        .enter()
        .append('rect')
        .attr('class', 'race-bar')

    const raceBarMerge = raceBarEnter.merge(raceBar)
        .attr('x', d => xScale(d.race_ethinicity))
        .attr('y', d => yScale(d.value))
        .attr('width', xScale.bandwidth())
        .attr('height', d => boundedHeight - yScale(d.value))
        .attr('fill', '#EDB95A')

    $gVisRaceXAxis.call(d3.axisBottom(xScale)
        .tickSizeOuter(0));

    xScale
        .domain(['lower_income', 'higher_income']);

    const incomeBar = $gVisIncomeBars
        .selectAll('.income-bar')
        .data(datasetIncome);
    
    const incomeBarEnter = incomeBar.enter()
        .append('rect')
        .attr('class', 'income-bar')
    
    const incomeBarMerge = incomeBarEnter.merge(incomeBar)
        .attr('x', d => xScale(d.income))
        .attr('y', d => yScale(d.value))
        .attr('width', xScale.bandwidth())
        .attr('height', d => boundedHeight - yScale(d.value))
        .attr('fill', '#1583DF')

    $gVisIncomeXAxis.call(d3.axisBottom(xScale)
        .tickSizeOuter(0));

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
    barChartWidth = isMobile ? boundedWidth / 2 - 10 : boundedWidth / 2 - 10;

    xScale
        .range([0, barChartWidth])
    yScale
        .range([boundedHeight, 0])
}

function resize() {
    updateDimensions()
    drawChart()
}

const columnName = 'percentag_women_report_want_delay_childbearing_or_have_fewer_kids';

function init() {
    const raceDataPath = 'percentage_race_delay_pregnancy.csv',
        incomeDataPath = 'percentage_income_delay_pregnancy.csv';

    loadData([raceDataPath, incomeDataPath]).then(result => {

        result[0].forEach(d => {
            d.value = +d[columnName];
        })
        result[1].forEach(d => {
            d.value = +d[columnName];
        })
        datasetRace = result[0]
        datasetIncome = result[1]
        resize();
        // setupScroller();
    }).catch(console.error);
}

export default {
    init,
    resize
}