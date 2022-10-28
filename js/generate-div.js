/* JSON Files */
import EANews from './../data/EANews.json' assert {type: 'json'};
import EAPlay from './../data/EAPlay.json' assert {type: 'json'};
import FIFA from './../data/FIFA.json' assert {type: 'json'};
import F1 from './../data/F1.json' assert {type: 'json'};
import MaddenNFL from './../data/MaddenNFL.json' assert {type: 'json'};
import ApexLegends from './../data/ApexLegends.json' assert {type: 'json'};
import TheSims4 from './../data/TheSims4.json' assert {type: 'json'};
import Battlefield from './../data/Battlefield.json' assert {type: 'json'};
import InsideEA from './../data/InsideEA.json' assert {type: 'json'}; 

/* Modules */
import { get, changeDisplayedModel } from './state.js';
import * as functions from './functions.js';
import * as vars from './DOM-elements.js';


// Generate the divs in homepage third section from local storage data     
const items = () => get("model").items.map( 
    (data) => functions.renderCard(data)
); 

// List of buttons 
const buttons = [
    vars.eaNewsButton,
    vars.eaPlayButton,
    vars.fifaButton,
    vars.f1Button,
    vars.maddenNFLButton,
    vars.apexLegendsButton,
    vars.theSimsButton,
    vars.battlefieldButton,
    vars.insideEAButton
];

// Loading data to HTML functions 
const loadItemsToHTML = (data, buttonClicked) => (e) => {
    // Give styling to clicked button and remove from others
    buttons.forEach((button) => 
        button !== buttonClicked 
        ? button.classList.remove('clicked') 
        : buttonClicked.classList.add('clicked')
    );
    
    // Change data in LS according to user choosing
    changeDisplayedModel(data);
    vars.sectionThreeItemsDOM.innerHTML = items()
};

functions.addClickELToButton(buttons[0], loadItemsToHTML(EANews, buttons[0]));
functions.addClickELToButton(buttons[1], loadItemsToHTML(EAPlay, buttons[1]));
functions.addClickELToButton(buttons[2], loadItemsToHTML(FIFA, buttons[2]));
functions.addClickELToButton(buttons[3], loadItemsToHTML(F1, buttons[3]));
functions.addClickELToButton(buttons[4], loadItemsToHTML(MaddenNFL, buttons[4]));
functions.addClickELToButton(buttons[5], loadItemsToHTML(ApexLegends, buttons[5]));
functions.addClickELToButton(buttons[6], loadItemsToHTML(TheSims4, buttons[6]));
functions.addClickELToButton(buttons[7], loadItemsToHTML(Battlefield, buttons[7]));
functions.addClickELToButton(buttons[8], loadItemsToHTML(InsideEA, buttons[8]));

// Scrolling through list on smaller screens 
const hideArrowWhenReachingEnd = () => {
    let firstListItemCoordinates = vars.firstListItem.getBoundingClientRect();

    if(firstListItemCoordinates.left > 0) {
        functions.hideElement(vars.leftArrow);
    }
    else if (firstListItemCoordinates.left > -400) {
        functions.hideElement(vars.rightArrow);
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

functions.addClickELToButton(vars.leftArrow, () => {
    hideArrowWhenReachingEnd();
    functions.displayFlex(vars.rightArrow);
    scrollContainer(vars.sliderContainer, -1);
});

functions.addClickELToButton(vars.rightArrow, () => {
    hideArrowWhenReachingEnd();
    functions.displayFlex(vars.leftArrow);
    scrollContainer(vars.sliderContainer, 1);
});