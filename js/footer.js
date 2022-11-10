import store from './store.js';
import functions from './functions.js';
import variables from './DOM-elements.js';


const renderLanguageDropdown = `
    <a href="#" class="language-button">English</a>
    <a href="#" class="language-button">Italian</a>
    <a href="#" class="language-button">French</a>
`;

let langModel = store.get('model');

functions.addClickELToButton(variables.languageButton, () => {
  store.renderModel(variables.languageDropDown, renderLanguageDropdown);
  langModel = functions.reverseIsModelOpen('model');
});

export default {
  renderLanguageDropdown
};