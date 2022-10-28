import * as functions from './functions.js';

// Homepage - Section Three vars 
const sectionThreeItemsDOM = functions.qs('#section-three-cards');

// List buttons 
const eaNewsButton = functions.qs('#EA-News');
const eaPlayButton = functions.qs('#EA-Play');
const fifaButton = functions.qs('#FIFA');
const f1Button = functions.qs('#F1');
const maddenNFLButton = functions.qs('#Madden-NFL');
const apexLegendsButton = functions.qs('#Apex-Legends');
const theSimsButton = functions.qs('#The-Sims-4');
const battlefieldButton = functions.qs('#Battlefield');
const insideEAButton = functions.qs('#Inside-EA');

// Arrows on responsive 
const sliderContainer = functions.qs('#section-three__list-div');
const firstListItem = sliderContainer?.children[0];
const leftArrow = functions.qs("#section-three__left-arrow");
const rightArrow = functions.qs("#section-three__right-arrow");
const leftArrowSvg = leftArrow?.querySelector('svg');
const rightArrowSvg = rightArrow?.querySelector('svg');

const darkModeButton = functions.qs("#dark-mode-button");

// About Company - Section Six vars 
const sectionSixItemsDOM = functions.qs('#AC-section-six__cards');

const loadMoreButton = functions.qs("#AC-section-six__load-more");

export {
    sectionThreeItemsDOM,
    eaNewsButton,
    eaPlayButton,
    fifaButton,
    f1Button,
    maddenNFLButton,
    apexLegendsButton,
    theSimsButton,
    battlefieldButton,
    insideEAButton,
    sliderContainer,
    firstListItem,
    leftArrow,
    rightArrow,
    leftArrowSvg,
    rightArrowSvg,
    darkModeButton,

    sectionSixItemsDOM,
    loadMoreButton
};