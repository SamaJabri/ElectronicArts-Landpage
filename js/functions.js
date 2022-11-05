import store from './store.js';

const qs = (item) => document.querySelector(item);

const addClickELToButton = (button, action) =>
  button.addEventListener("click", action);

// Functions to hide/show arrows in section three
const hideElement = (element) => (element.style.display = "none");
const displayFlex = (element) => (element.style.display = "flex");
const displayBlock = (element) => (element.style.display = "block");

// Card structure in Homepage - Section Three && About Company - Section Six
const renderCard = (data) =>
  `
    <div class="section-three__card">
        <div class="section-three__card-image">
            <img src="${data.image}" alt="${data.alt}" />
        </div>

        <a href="${data.link}" class="section-three__card-link"></a>

        <div class="section-three__card-description">
            <div class="section-three__card-header">
                <p>
                    ${data.title}
                    <span>${data.date}</span>
                </p>
            </div>
            <div class="section-three__card-body">
                <h2>${data.header}</h2>
                <p>${data.description}</p>
            </div>
        </div>
    </div>
    `;

const reverseIsModelOpen = (modelName) => {
    const model = store.get(modelName);
    return store.set(modelName, {...model, isModalSettingsOpen: !model.isModalSettingsOpen});
}

export default {
  qs,
  addClickELToButton,
  hideElement,
  displayFlex,
  displayBlock,
  renderCard,
  reverseIsModelOpen
};
