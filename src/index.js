import './styles.css';
import refs from './js/refs';
//import from './js/templating';
import itemCountry from "./templates/templateCountry.hbs";
import template from "./menu.json";
// console.log(template);
// console.log(itemCountry);
// let templateInsert = itemCountry(template);
// console.log(templateInsert);
// refs.countriesGalleryRef.insertAdjacentHTML('afterbegin', templateInsert);

var debounce = require('lodash/debounce');

//console.log(itemsTemplate);
//console.log(menu);

//const menuMarkup = itemsTemplate(menu);
//console.log(menuMarkup);

//menuRef.insertAdjacentHTML('afterbegin', menuMarkup);

const textToFilter = '';
let itemsToShow;
let listMarkup = itemCountry(itemsToShow);

refs.filterBtn.addEventListener('click', handleFilterBtn); // Filter btn listener
refs.inputText.addEventListener('enter', handleFilterBtn); // Filter btn listener
refs.inputText.addEventListener('input', debounce(handleTextInput, 300)); // Input Listener

function handleFilterBtn(event) {
    event.preventDefault();
    console.log('Start fetching countries');
    refs.countriesGalleryRef.textContent = '';
    if (refs.inputText.value) {
    fetchCountries();
    }
}


function fetchCountries() {
    console.log(`${refs.url} ${refs.inputText.value}`);
    fetch(`${refs.url}${refs.inputText.value}`)
    .then(response => {return response.json();})
    //.then(console.log)
    .then(data => {
        refs.countriesGalleryRef.insertAdjacentHTML('afterbegin', itemCountry(data));
        console.log(itemCountry(data));
    })
}

function handleTextInput(event) {
    console.log(refs.inputText.value);   
}





