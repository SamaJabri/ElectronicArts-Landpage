import EANews from './../data/EANews.json' assert {type: 'json'};
import EAPlay from './../data/EAPlay.json' assert {type: 'json'};
import FIFA from './../data/FIFA.json' assert {type: 'json'};
import F1 from './../data/F1.json' assert {type: 'json'};
import MaddenNFL from './../data/MaddenNFL.json' assert {type: 'json'};
import ApexLegends from './../data/ApexLegends.json' assert {type: 'json'};
import TheSims4 from './../data/TheSims4.json' assert {type: 'json'};
import Battlefield from './../data/Battlefield.json' assert {type: 'json'};
import InsideEA from './../data/InsideEA.json' assert {type: 'json'}; 

const itemsDOM = document.querySelector('#section-three-cards');

/* Generate the divs in homepage third section */
const items = (file) => file.data.map( ({ id, link, image, alt, title, date, header, description }) => 
    `<div class="section-three__card">
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
    </div>`
)

let eaNewsButton = document.querySelector('#EA-News');
let eaPlayButton = document.querySelector('#EA-Play');
let fifaButton = document.querySelector('#FIFA');
let f1Button = document.querySelector('#F1');
let maddenNFLButton = document.querySelector('#Madden-NFL');
let apexLegendsButton = document.querySelector('#Apex-Legends');
let theSimsButton = document.querySelector('#The-Sims-4');
let battlefieldButton = document.querySelector('#Battlefield');
let insideEAButton = document.querySelector('#Inside-EA');

eaNewsButton.addEventListener('click', () => itemsDOM.innerHTML = items(EANews));
eaPlayButton.addEventListener('click', () => itemsDOM.innerHTML = items(EAPlay));
fifaButton.addEventListener('click', () => itemsDOM.innerHTML = items(FIFA));
f1Button.addEventListener('click', () => itemsDOM.innerHTML = items(F1));
maddenNFLButton.addEventListener('click', () => itemsDOM.innerHTML = items(MaddenNFL));
apexLegendsButton.addEventListener('click', () => itemsDOM.innerHTML = items(ApexLegends));
theSimsButton.addEventListener('click', () => itemsDOM.innerHTML = items(TheSims4));
battlefieldButton.addEventListener('click', () => itemsDOM.innerHTML = items(Battlefield));
insideEAButton.addEventListener('click', () => itemsDOM.innerHTML = items(InsideEA)); 

/* Scrolling through list on smaller screens */
let sliderContainer = document.getElementById('section-three__list-div');

let leftArrow = document.getElementById("section-three__left-arrow");
let rightArrow = document.getElementById("section-three__right-arrow");

let scrollContainer = function(container, direction) {
    console.log(container.scrollWidth - 200);
    let amount = direction * (container.scrollWidth - 600);
    container.scrollBy({
        top: 0,
        left: amount,
        behavior: 'smooth'
    });
}

leftArrow.addEventListener('click', function(){
    console.log("Hi from left");

    rightArrow.style.display = 'flex';

    scrollContainer(sliderContainer, -1);
});

rightArrow.addEventListener('click', function(){
    console.log("Hi from right");

    leftArrow.style.display = 'flex';

    scrollContainer(sliderContainer, 1);
});

window.onresize = () => {
    if(window.innerWidth > 950)  {
        leftArrow.style.display = 'none'
        rightArrow.style.display = 'none'
    }
    else {
        leftArrow.style.display = 'flex'
        rightArrow.style.display = 'flex'
    }
}

window.onload(eaNewsButton.click());

