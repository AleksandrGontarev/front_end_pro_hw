import { productList } from "./create_product.js";
import { findCategory } from "./find_category.js";
import { showCategory } from "./show_category.js";
import { LoremIpsum } from "./lorem-ipsum.js";

const getCategory = findCategory(productList);
const categoryList = document.querySelector('.category__list');
let products = document.querySelector('.products__list');
let productCharacters = document.querySelector('.product-characters');
let productsListByCategory = [];
const lipsum = new LoremIpsum();



for (let item of getCategory) {
    let categori = document.createElement('li');
    categori.setAttribute('class', 'category__item');
    categori.innerHTML = `<a class="category__item-link category-${item}" href="#">${item}</a>`;
    categoryList.appendChild(categori);
}

showCategory(categoryList, products, productsListByCategory, productList);









products.addEventListener('click', (event) => {
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
