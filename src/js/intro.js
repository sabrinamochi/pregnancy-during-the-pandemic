const $videoContainer = d3.select('.opening__video__container')
const $video = document.querySelector('.opening__video__container__video')
const $openingContainer = d3.select('.opening')
const $startButton = $openingContainer.select('#start-button')
const $skipButton = d3.select('#skip-button')
const $infection = d3.selectAll('.infection-button')
const $isolation = d3.selectAll('.isolation-button')
const $insecurity = d3.selectAll('.insecurity-button')
const $inequality = d3.selectAll('.inequality-button')


let w = window.innerWidth,
    isMobile = w <= 768 ? true : false,
    videoVisible,
    buttonClicked = false;

function stopVideo() {
    $videoContainer.style('display', 'none')
    videoVisible = false;
    $video.pause()
    startOverview()
}

function playVideo() {
    buttonClicked = true;
    $openingContainer.style('display', 'none')
    $videoContainer.style('display', 'block')
    videoVisible = true;
    $video.addEventListener('ended', stopVideo)
    resize()
}

function resize() {
    if (videoVisible && buttonClicked) {
        w = window.innerWidth;
        isMobile = w <= 768 ? true : false;
        $video.pause()
        if (isMobile) {
            $video.setAttribute("src", "assets/images/opening-video-mobile.mp4");
        } else {
            $video.setAttribute("src", "assets/images/opening-video.mp4");
        }
        $video.load()
        $video.play()
    }

}

function startOverview() {
    if (!videoVisible){
        let i = 0
        d3.selectAll('.overview').style('display', 'flex')
        document.querySelector('#overview-infection-button')
            .addEventListener("animationend", function() {
                i = i + 1
                if (i == 3) {
                    startTab('infection');
                }
            }, false);
    }   
}

function startTab(tabName) {
    location.href = `${tabName}.html`;
}


function init() {
    $startButton.on('click', playVideo)
    $skipButton.on('click', stopVideo)
    $infection.on('click', () => startTab('infection'))
    $isolation.on('click', () => startTab('isolation'))
    $insecurity.on('click', () => startTab('insecurity'))
    $inequality.on('click', () => startTab('inequality'))
}


export default {
    resize,
    init
}