import store from './store.js';
import vars from './DOM-elements.js';
import functions from './functions.js';

const switchToDark = () => {
    vars.darkModeButton.innerHTML = "<i class='fa-solid fa-sun'></i>";
    document.body.classList.add('dark');
    vars.leftArrowSvg?.setAttribute('fill', 'rgba(255, 255, 255, 0.5)');
    vars.rightArrowSvg?.setAttribute('fill', 'rgba(255, 255, 255, 0.5)');

    store.set('dark-mode', true);
}

const switchToLight = () => {
    vars.darkModeButton.innerHTML = "<i class='fa-solid fa-moon'></i>";
    document.body.classList.remove('dark');
    vars.leftArrowSvg?.setAttribute("fill", 'rgba(22, 22, 22, 0.5)');
    vars.rightArrowSvg?.setAttribute("fill", 'rgba(22, 22, 22, 0.5)');

    store.set('dark-mode', false);
}

functions.addClickELToButton(vars.darkModeButton, 
    () => store.get('dark-mode') ? switchToLight() : switchToDark()
);

console.log(store.get('dark-mode'));
store.get('dark-mode') && switchToDark();

export default {
    switchToDark,
    switchToLight
}