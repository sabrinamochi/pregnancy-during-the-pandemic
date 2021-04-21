/* global d3 */
import debounce from 'lodash.debounce';
import isMobile from './utils/is-mobile';
import linkFix from './utils/link-fix';
import modalSetup from './utils/modal-a11y';
import graphic from './graphic';
// import footer from './footer';
import intro from './intro';
import takeAGuessBar from './takeAGuessBar';
import redditChart from './redditChart';
import birthRate from './birthRate';
import disparityBarChart from './disparityBarChart';
// import moreStory from './moreStory';

const $body = d3.select('body');
let previousWidth = 0;

const $birthRates= d3.select('.birth-rates-chart');
const $disparityBars = d3.select('.disparity-bar-chart');
const $redditChart = d3.select('.reddit__container');

function resize() {
  // only do resize on width changes, not height
  // (remove the conditional if you want to trigger on height change)
  const width = $body.node().offsetWidth;
  if (previousWidth !== width) {
    previousWidth = width;
    graphic.resize();
    intro.resize();
    birthRate.resize();
    disparityBarChart.resize();
    redditChart.resize();
  }
}

function init() {
  // adds rel="noopener" to all target="_blank" links
  linkFix();
  // add mobile class to body tag
  $body.classed('is-mobile', isMobile.any());
  // setup resize event
  window.addEventListener('resize', debounce(resize, 150));
  // setup sticky header menu
  // kick off graphic code
  graphic.init();
  // load footer stories
  // footer.init();
  intro.init();
  birthRate.init();
  disparityBarChart.init();
  redditChart.init();
  takeAGuessBar.init();
  // // moreStory.init();

}

init();
