import { LoremIpsum } from "./lorem-ipsum.js";
import { buyProduct } from "./buy_product.js";

const lipsum = new LoremIpsum();

function chooseProduct(products, productCharacters, productList) {
    products.addEventListener('click', (event) => {
        if (event.target.closest('.products__item-link')) {

            let productName = event.target.classList[1].split('-')[1];
            let productCharactersItem = document.createElement('div');
            let productCharactersName = productList.find(item => item.name === productName).characters;

            productCharactersItem.setAttribute('class', 'product-characters__body');
            productCharactersItem.innerHTML = `<p class="product-characters__header">${productCharactersName}</p>
            <p class="product-characters__text">${lipsum.generate(50)}</p>
            <button type="button" class="product-characters__btn btn-${productCharactersName}">Buy</button>`;
            if (document.querySelector('.product-characters__body')) {
                document.querySelector('.product-characters__body').remove();
            }
            productCharacters.appendChild(productCharactersItem);
       
            let selectedProduct = document.querySelector('.product-characters__btn');
            buyProduct(selectedProduct);
        }
    });
}
export { chooseProduct }