import functions from './functions.js';

// Header vars
const modalDOM = functions.qs("#user");
const openModalDOM = functions.qs("#openUserModal");

const openQuestionModalDOM = functions.qs("#openQuestionModal");
const modalQuestionDOM = functions.qs("#question");

const openAsideModalDOM = functions.qs("#btn-in");
const modalAsideDOM = functions.qs("#more");

const openNavModalDOM = functions.qs("#btn-btn");
const modalNavDOM = functions.qs("#vertical-line");

const blackBg = functions.qs("#black");

// Footer vars
const languageButton = functions.qs("#lang-drop-button");
const languageDropDown = functions.qs("#lang-drop");

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


export default {
    modalDOM,
    modalAsideDOM,
    modalNavDOM,
    modalQuestionDOM,
    openModalDOM,
    openAsideModalDOM,
    openNavModalDOM,
    openQuestionModalDOM,
    blackBg,
    languageButton,
    languageDropDown,
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
}