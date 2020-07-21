//import itemCountry from "../templates/templateCountry.hbs";
// function itemCountry() {
//     return {};}

//const countriesGalleryRef = document.querySelector('.js-countryGallery');

const listMarkup = itemCountry(itemsToShow);
console.log(itemsToShow);
console.log(listMarkup);

countriesGalleryRef.insertAdjacentHTML('afterbegin', listMarkup);
