const $barNervous = d3.select('#bar-nervous');
const $barTalk = document.getElementById('bar-talk');
const $barContainers = document.querySelectorAll('.hopecovid__bars__container');

function init() {
    for (let i = 0; i < $barContainers.length; ++i) {
        const $bar = $barContainers[i].querySelector('.hopecovid__bars__container__bar')
        const $readerText = $barContainers[i].querySelector('p.reader')
        const $answerText = $barContainers[i].querySelector('p.answer')
        const $glowingTick = $bar.querySelector('span.tick');
        const glowing = window.setInterval(function () {
            $glowingTick.classList.toggle('active');
        }, 1000);
        $barContainers[i]
            .addEventListener('mousemove', e => {
                clearInterval(glowing);
                $glowingTick.classList.remove('active');
                const x = e.pageX - $bar.offsetLeft, // or e.offsetX (less support, though)
                    y = e.pageY - $bar.offsetTop; // or e.offsetY
                let clickedValue = Math.round(x * 100 / $bar.offsetWidth)
                if (clickedValue >= 100) {
                    clickedValue = '100%'
                } else if (clickedValue <= 0) {
                    clickedValue = '0%'
                } else {
                    clickedValue = clickedValue + '%'
                }
                $readerText.innerHTML = i == 0 ? clickedValue + " of the days" : clickedValue;
                $readerText.style.left = clickedValue;
                $glowingTick.style.left = clickedValue;
                $glowingTick.style.opacity = 1;
            })
        $barContainers[i].addEventListener('click', e => {
          
            let barValue, barClass, answerText;
            const x = e.pageX - $bar.offsetLeft, // or e.offsetX (less support, though)
                y = e.pageY - $bar.offsetTop; // or e.offsetY
            let clickedValue = Math.round(x * 100 / $bar.offsetWidth)

            if (clickedValue >= 100) {
                clickedValue = '100%'
            } else if (clickedValue <= 0) {
                clickedValue = '0%'
            } else {
                clickedValue = clickedValue + '%'
            }

            if (i == 0) {
                barValue = 50;
                barClass = 'progess-animation-nervous';
                answerText = `According to HOPE COVID-19 study, 
                pregnant people during the pandemic were bothered
                by nervousness and anxiety for ${barValue}% or more of the days.`
                $readerText.innerHTML = `Your answer: ${clickedValue} of the days`
            } else {
                barValue = 87;
                barClass = 'progess-animation-talk';
                answerText = `According to HOPE COVID-19 study,
                ${barValue}% of pregnant people often 
                meet or talk with family or friends`
                $readerText.innerHTML = `Your answer: ${clickedValue}`
            }

            $answerText.innerHTML = answerText;

            $readerText.style.left = clickedValue;
            $glowingTick.style.left = clickedValue;
            $glowingTick.style.opacity = 1;
            $bar.querySelector('span.bar').classList.add(barClass);

            $barContainers[i].style.pointerEvents = "none";

        })
    }

    // const $bar = $barContainers[i].querySelector('.hopecovid__bars__container__bar')
    // const $text = $barContainers[i].querySelector('p')
    // $text.innerHTML = clickedValue
    // $barTalk.addEventListener('click', e => {
    //     console.log($barTalk.offsetLeft)
    //     const x = e.pageX - this.offsetLeft, // or e.offsetX (less support, though)
    //         y = e.pageY - this.offsetTop, // or e.offsetY
    //         clickedValue = x * this.max / this.offsetWidth

    // })

}

export default {
    init
};