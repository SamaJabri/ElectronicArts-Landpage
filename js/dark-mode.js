import { set, get } from './state.js';
import * as vars from './DOM-elements.js';
import * as functions from './functions.js';

const switchToDark = () => {
    vars.darkModeButton.innerHTML = "<i class='fa-solid fa-sun'></i>";
    document.body.classList.add('dark');
    vars.leftArrowSvg?.setAttribute('fill', 'rgba(255, 255, 255, 0.5)');
    vars.rightArrowSvg?.setAttribute('fill', 'rgba(255, 255, 255, 0.5)');

    set('dark-mode', true);
}

const switchToLight = () => {
    vars.darkModeButton.innerHTML = "<i class='fa-solid fa-moon'></i>";
    document.body.classList.remove('dark');
    vars.leftArrowSvg?.setAttribute("fill", 'rgba(22, 22, 22, 0.5)');
    vars.rightArrowSvg?.setAttribute("fill", 'rgba(22, 22, 22, 0.5)');

    set('dark-mode', false);
}

functions.addClickELToButton(vars.darkModeButton, 
    () => get('dark-mode') ? switchToLight() : switchToDark()
);

get('dark-mode') && switchToDark();

export {
    switchToDark,
    switchToLight
}