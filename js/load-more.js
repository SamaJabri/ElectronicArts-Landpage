import EANews from "./../data/LatestEANews.json" assert { type: "json" };
import store from "./store.js";
import functions from "./functions.js";
import variables from "./DOM-elements.js";

store.changeDisplayedModel(EANews);

// Function to render only 3 items each time
const renderItems = (items, num) =>
  items.filter((_, i) => i + 1 <= num).map(item);

// Generate the divs in About Company sixth section on button click
const item = (data) => functions.renderCard(data);

let intial = 0;

const renderItem = (num) =>
  (variables.sectionSixItemsDOM.innerHTML = renderItems(
    store.get("model").items,
    num
  ));

functions.addClickELToButton(variables.loadMoreButton, () => {
  store.changeDisplayedModel(EANews);
  renderItem((intial += 3));
});

export default {
  renderItems,
};
