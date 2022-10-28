import EANews from './../data/LatestEANews.json' assert {type: 'json'};
import { get, changeDisplayedModel } from './state.js';
import * as functions from './functions.js';
import * as vars from './DOM-elements.js';

changeDisplayedModel(EANews);

// Function to render only 3 items each time
const renderItems = (items, num) =>
  items
    .filter((_, i) => i + 1 <= num)
    .map(item);

// Generate the divs in About Company sixth section on button click 
const item = (data) => functions.renderCard(data);

let intial = 0;

const renderItem = (num) => 
    vars.sectionSixItemsDOM.innerHTML = renderItems(get("model").items, num);

functions.addClickELToButton(vars.loadMoreButton, () => renderItem(intial += 3));