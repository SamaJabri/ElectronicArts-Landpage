import header from './header.js';
import footer from './footer.js';
import functions from './functions.js';
import vars from './DOM-elements.js';
import * as main from './generate-div.js';
import dark from './dark-mode.js';


// Show content of first option on page load
window.addEventListener('load', () => 
    vars.eaNewsButton.click());

// Hide Arrows when resizing from smaller to bigger screens
window.addEventListener('resize', () => {
    if(window.innerWidth > 950)  {
        functions.hideElement(vars.leftArrow);
        functions.hideElement(vars.rightArrow);
    }
    else {
        functions.displayFlex(vars.leftArrow);
        functions.displayFlex(vars.rightArrow);
    }
});