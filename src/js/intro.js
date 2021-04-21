import takeAGuessBar from './takeAGuessBar';
import redditChart from './redditChart';
import birthRate from './birthRate';
import disparityBarChart from './disparityBarChart';

const $videoContainer = d3.select('.opening__video__container')
const $video = document.querySelector('video')
const $openingContainer = d3.select('.opening')
const $startButton = $openingContainer.select('#start-button')
const $skipButton = d3.select('#skip-button')
const $infection = d3.selectAll('.infection-button')
const $isolation = d3.selectAll('.isolation-button')
const $unexpectation = d3.selectAll('.unexpectation-button')
const $inequality = d3.selectAll('.inequality-button')

let w = window.innerWidth;
let isMobile = w <= 768 ? true : false;

function stopVideo() {
    $videoContainer.style('display', 'none')
    $video.pause()
    startOverview()
}

function playVideo() {
    $openingContainer.style('display', 'none')
    $videoContainer.style('display', 'block')
    $video.play()
}

let count = 0

function resize() {
    w = window.innerWidth;
    isMobile = w <= 768 ? true : false;
    if (count == 0) {
        if (isMobile) {
            $video.setAttribute("src", "assets/images/opening-video-mobile.mp4");
        } else {
            $video.setAttribute("src", "assets/images/opening-video.mp4");
        }
        count++
    } else if (count > 0) {
        $video.pause()
        if (isMobile) {
            $video.setAttribute("src", "assets/images/opening-video-mobile.mp4");
        } else {
            $video.setAttribute("src", "assets/images/opening-video.mp4");
        }
        $video.load()
        $video.play()
    } else if (count < 0) {
        $video.pause()
    }
}

function startOverview() {
    count = -1
    d3.selectAll('.overview').style('display', 'flex')
}

function startTab(tabName) {
    d3.selectAll('.overview').style('display', 'none')
    d3.selectAll('.tab').style('display', 'none').style('color', '#000')
    d3.selectAll('.tab button').style('color', '#000')
    d3.select(`#${tabName}`).style('display', 'block')
    d3.selectAll(`.${tabName}-button`).style('color', '#E8356D')
    if (tabName == 'infection') {
        takeAGuessBar.init();
        redditChart.init();
        window.addEventListener('resize', () => redditChart.resize());
    } else if (tabName == 'unexpectation'){
        birthRate.init();
        disparityBarChart.init();
        window.addEventListener('resize', () => {
            birthRate.resize();
            disparityBarChart.resize();
        });
        
    }
}

function init() {
    resize()
    $startButton.on('click', playVideo)
    $skipButton.on('click', stopVideo)
    $video.addEventListener('ended', stopVideo)
    $infection.on('click', () => startTab('infection'))
    $isolation.on('click', () => startTab('isolation'))
    $unexpectation.on('click', () => startTab('unexpectation'))
    $inequality.on('click', () => startTab('inequality'))
}


export default {
    resize,
    init
}