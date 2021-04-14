const stories = document.querySelectorAll('.story__container');
const storyCount = stories.length;
const nextStory = document.querySelector('.button__next');
const previousStory = document.querySelector('.button__previous');

let count = 0;
stories[count].classList.add('active');

function showNext(){
    stories[count].classList.remove('active');
    if( count < storyCount - 1){
        count ++;
    } else {
        count = 0;
    }
    // after count is updated
    stories[count].classList.add('active');
    console.log(count);
}

function showPrev(){
    stories[count].classList.remove('active');
    if (count > 0){
        count = count - 1;
    } else {
        count = storyCount - 1;
    }
    stories[count].classList.add('active');
    console.log(count)
}

function init(){
    nextStory.addEventListener('click', showNext);
    previousStory.addEventListener('click', showPrev);
}

export default { init }
