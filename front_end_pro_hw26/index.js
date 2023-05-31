import { productList } from "./create_product.js";
import { findCategories } from "./find_categories.js";
import { LoremIpsum } from "./lorem-ipsum.js";

let categoriesList = findCategories(productList);
let renderCategories = document.querySelector('.categories__list');
let products = document.querySelector('.products__list');
let productCharacters = document.querySelector('.product-characters');
let productsListCategories = [];
let lipsum = new LoremIpsum();



for (let item of categoriesList) {
    let categori = document.createElement('li');
    categori.setAttribute('class', 'categories__item');
    categori.innerHTML = `<a class="categories__item-link categories-${item}" href="#">${item}</a>`;
    renderCategories.appendChild(categori);
}

renderCategories.addEventListener('click', (event) => {
    if (event.target.closest('.categories__item-link')) {
        let categoriName = event.target.classList[1].split('-')[1];
        productsListCategories = productList.filter(item => item.categories === categoriName);
        if (document.querySelectorAll('.products__item')) {
            document.querySelectorAll('.products__item').forEach(elem => elem.remove())
        }
        for (let item of productsListCategories) {
            let product = document.createElement('li');
            product.setAttribute('class', 'products__item');
            product.innerHTML = `<a class="products__item-link products-${item.name}" href="#">${item.name}</a>`;
            products.append(product);
        }

    }
}
)
document.querySelector('.products__list').addEventListener('click', (event) => {
    if (event.target.closest('.products__item-link')) {

        let productName = event.target.classList[1].split('-')[1];
        let productCharactersItem = document.createElement('div');
        let productCharactersText = productList.find(item => item.name === productName).characters;

        productCharactersItem.setAttribute('class', 'product-characters__body');
        productCharactersItem.innerHTML = `<p class="product-characters__header">${productCharactersText}</p><p class="product-characters__text">${lipsum.generate(50)}</p>`;
        if (document.querySelector('.product-characters__body')) {
            document.querySelector('.product-characters__body').remove();
        }
        productCharacters.appendChild(productCharactersItem);
    }
});
