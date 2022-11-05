import store from './store.js'

const qs = (item) => document.querySelector(item);
const qsa = (items) => document.querySelectorAll(items);

const addClickELToButton = (button, action) => 
    button.addEventListener('click', action);

// Functions to hide/show elements 
const hideElement = (element) => element.style.display = 'none';
const displayFlex = (element) => element.style.display = 'flex';
const displayBlock = (element) => element.style.display = 'block';

// LS Functions
const reverseIsModelOpen = (modelName) => {
    const model = store.get(modelName);
    return store.set(modelName, {...model, isModalSettingsOpen: !model.isModalSettingsOpen});
}

export default { 
    qs, 
    qsa,
    addClickELToButton,
    hideElement,
    displayFlex,
    displayBlock,
    reverseIsModelOpen
};