import { productList } from "./create_product.js";
import { findCategories } from "./find_categories.js";
import { showCategories } from "./show_categories.js";
import { LoremIpsum } from "./lorem-ipsum.js";

const categoriesList = findCategories(productList);
const renderCategories = document.querySelector('.categories__list');
const renderProducts = document.querySelector('.products__list');
let products = document.querySelector('.products__list');
let productCharacters = document.querySelector('.product-characters');
let productsListCategories = [];
const lipsum = new LoremIpsum();



for (let item of categoriesList) {
    let categori = document.createElement('li');
    categori.setAttribute('class', 'categories__item');
    categori.innerHTML = `<a class="categories__item-link categories-${item}" href="#">${item}</a>`;
    renderCategories.appendChild(categori);
}

showCategories(renderCategories, products, productsListCategories, productList);









renderProducts.addEventListener('click', (event) => {
    if (event.target.closest('.products__item-link')) {

        let productName = event.target.classList[1].split('-')[1];
        let productCharactersItem = document.createElement('div');
        let productCharactersText = productList.find(item => item.name === productName).characters;

        productCharactersItem.setAttribute('class', 'product-characters__body');
        productCharactersItem.innerHTML = `<p class="product-characters__header">${productCharactersText}</p>
        <p class="product-characters__text">${lipsum.generate(50)}</p>
        <button type="button" class="product-characters__btn">Buy</button>`;
        if (document.querySelector('.product-characters__body')) {
            document.querySelector('.product-characters__body').remove();
        }
        productCharacters.appendChild(productCharactersItem);
    }
});
