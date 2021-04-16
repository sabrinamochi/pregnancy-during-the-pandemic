import "intersection-observer";
import scrollama from "scrollama";

var Stickyfill = require('stickyfilljs');

let w = window.innerWidth,
    isMobile = w <= 600 ? true : false;

// original opacity
d3.select('.opening__text:first-of-type')
    .transition().duration(500)
    .style('opacity', 1)

d3.select('.opening__text:nth-of-type(2)')
    .style('opacity', 0)

const $container = d3.select('.opening');
const $img = $container.selectAll('.opening__img');
const STEP = {
    'show-first-sentence': (direction) => {
        if (direction == 'down'){
            d3.select('.opening__text:first-of-type')
            .transition().duration(500)
            .style('opacity', 0)
        } else {
            d3.select('.opening__text:first-of-type')
            .transition().duration(500)
            .style('opacity', 1)
        }
        
        // d3.select('.opening__text:nth-of-type(2)')
        //     .transition().duration(1000)
        //     .style('opacity', 1)
    },
    'show-second-sentence': (direction) =>{

        if (direction == 'down'){
            d3.select('.opening__text:nth-of-type(2)')
            .transition().duration(500)
            .style('opacity', 1)
        } else {
            d3.select('.opening__text:nth-of-type(2)')
            .transition().duration(500)
            .style('opacity', 0)
        }
    }
    // '1': () => {

    // }
}




let currentStep = ''

function handleStepEnter({
    index,
    element,
    direction
}) {
    currentStep = d3.select(element).attr('data-step');
    STEP[currentStep](direction)
}

function handleStepExit({
    index,
    element,
    direction
}) {
    currentStep = d3.select(element).attr('data-step');
    // STEP(currentStep)
    STEP[currentStep](direction)
}

const scroller = scrollama();

function setupScroller() {
    scroller.setup({
            step: $img.nodes(),
            offset: isMobile ? Math.floor(window.innerHeight * 0.9) + "px" : 0.9
        })
        .onStepEnter(handleStepEnter)
        .onStepExit(handleStepExit)
}

function init() {
    setupScroller()
}

export default {
    init
}