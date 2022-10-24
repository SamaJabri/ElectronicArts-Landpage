import EANews from './../data/EANews.json' assert {type: 'json'};
import EAPlay from './../data/EAPlay.json' assert {type: 'json'};
import FIFA from './../data/FIFA.json' assert {type: 'json'};
import F1 from './../data/F1.json' assert {type: 'json'};
import MaddenNFL from './../data/MaddenNFL.json' assert {type: 'json'};
import ApexLegends from './../data/ApexLegends.json' assert {type: 'json'};
import TheSims4 from './../data/TheSims4.json' assert {type: 'json'};
import Battlefield from './../data/Battlefield.json' assert {type: 'json'};
import InsideEA from './../data/InsideEA.json' assert {type: 'json'}; 
import { get, changeDisplayedModel } from './state.js';

/* Generate the divs in homepage third section fron local storage data */    
const items = () => get("model").items.map( 
    ({ link, image, alt, title, date, header, description }) => `
    <div class="section-three__card">
        <div class="section-three__card-image">
            <img src="${image}" alt="${alt}" />
        </div>

        <a href="${link}" class="section-three__card-link"></a>

        <div class="section-three__card-description">
            <div class="section-three__card-header">
                <p>
                    ${title}
                    <span>${date}</span>
                </p>
            </div>
            <div class="section-three__card-body">
                <h2>${header}</h2>
                <p>${description}</p>
            </div>
        </div>
    </div>
    `
) 

const qs = (item) => document.querySelector(item);

const itemsDOM = qs('#section-three-cards');

const eaNewsButton = qs('#EA-News');
const eaPlayButton = qs('#EA-Play');
const fifaButton = qs('#FIFA');
const f1Button = qs('#F1');
const maddenNFLButton = qs('#Madden-NFL');
const apexLegendsButton = qs('#Apex-Legends');
const theSimsButton = qs('#The-Sims-4');
const battlefieldButton = qs('#Battlefield');
const insideEAButton = qs('#Inside-EA');

const buttons = [
    eaNewsButton,
    eaPlayButton,
    fifaButton,
    f1Button,
    maddenNFLButton,
    apexLegendsButton,
    theSimsButton,
    battlefieldButton,
    insideEAButton
];

/* Loading data to HTML functions */
const addClickELToButton = (button, action, ...params) => 
    button.addEventListener('click', action(...params, button));

const loadItemsToHTML = (data, buttonClicked) => (e) => {
    // Give styling to clicked button and remove from others
    buttons.forEach((button) => 
        button !== buttonClicked 
        ? button.classList.remove('clicked') 
        : buttonClicked.classList.add('clicked')
    );
    
    // Change data in LS according to user choosing
    changeDisplayedModel(data);
    itemsDOM.innerHTML = items()
};

addClickELToButton(eaNewsButton, loadItemsToHTML, EANews);
addClickELToButton(eaPlayButton, loadItemsToHTML, EAPlay);
addClickELToButton(fifaButton, loadItemsToHTML, FIFA);
addClickELToButton(f1Button, loadItemsToHTML, F1);
addClickELToButton(maddenNFLButton, loadItemsToHTML, MaddenNFL);
addClickELToButton(apexLegendsButton, loadItemsToHTML, ApexLegends);
addClickELToButton(theSimsButton, loadItemsToHTML, TheSims4);
addClickELToButton(battlefieldButton, loadItemsToHTML, Battlefield);
addClickELToButton(insideEAButton, loadItemsToHTML, InsideEA);

/* Scrolling through list on smaller screens */
let sliderContainer = document.getElementById('section-three__list-div');
let firstListItem = sliderContainer.children[0];
let leftArrow = document.getElementById("section-three__left-arrow");
let rightArrow = document.getElementById("section-three__right-arrow");

/* Functions to hide/show arrows */
const hideLeftArrow = () => leftArrow.style.display = 'none';
const hideRightArrow = () => rightArrow.style.display = 'none';
const showLeftArrow = () => leftArrow.style.display = 'flex';
const showRightArrow = () => rightArrow.style.display = 'flex';

const hideArrowWhenReachingEnd = () => {
    let firstListItemCoordinates = firstListItem.getBoundingClientRect();

    if(firstListItemCoordinates.left > 0) {
        hideLeftArrow();
    }
    else if (firstListItemCoordinates.left > -400) {
        hideRightArrow();
    }

    console.log(firstListItemCoordinates.left);
}

let scrollContainer = function(container, direction) {
    let amount = direction * (container.scrollWidth - 600);
    container.scrollBy({
        top: 0,
        left: amount,
        behavior: 'smooth'
    });
}

leftArrow.addEventListener('click', function(){
    hideArrowWhenReachingEnd();
    showRightArrow();
    scrollContainer(sliderContainer, -1);
});

rightArrow.addEventListener('click', function(){
    hideArrowWhenReachingEnd();
    showLeftArrow();
    scrollContainer(sliderContainer, 1);
});


// Show content of first option on page load
window.addEventListener('DOMContentLoaded', () => eaNewsButton.click());

// Hide Arrows when resizing from smaller to bigger screens
window.addEventListener('resize', () => {
    if(window.innerWidth > 950)  {
        hideLeftArrow();
        hideRightArrow();
    }
    else {
        showLeftArrow();
        showRightArrow();
    }
});
