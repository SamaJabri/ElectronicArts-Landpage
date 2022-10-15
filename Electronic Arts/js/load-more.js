import EANews from './../data/LatestEANews.json' assert {type: 'json'};

const itemsDOM = document.querySelector('#AC-section-six__cards');

const renderItems = (items, no) =>
  items.data
    .filter((_, i) => i + 1 <= no)
    .map(item);

/* Generate the divs in About Company sixth section on button click */
const item = ({ id, link, image, alt, title, date, header, description }) => 
    `<div class="section-three__card">
        <div class="section-three__card-image">
            <img src="${image}" alt="${alt}" />
        </div>

        <a href="${link}" class="section-three__card-link" ></a>

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

let intial = 0;
const loadMoreButton = document.querySelector("#AC-section-six__load-more");

const renderItem = (num) => itemsDOM.innerHTML = renderItems(EANews, num);
loadMoreButton.addEventListener('click', () => renderItem(intial += 3));

window.onload(loadMoreButton.click());
