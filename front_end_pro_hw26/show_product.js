import { LoremIpsum } from "./lorem-ipsum.js";
const lipsum = new LoremIpsum();

function showProduct(products, productCharacters, productList) {
    products.addEventListener('click', (event) => {
        if (event.target.closest('.products__item-link')) {

            let productName = event.target.classList[1].split('-')[1];
            let productCharactersItem = document.createElement('div');
            let productCharactersText = productList.find(item => item.name === productName).characters;

            productCharactersItem.setAttribute('class', 'product-characters__body');
            productCharactersItem.innerHTML = `<p class="product-characters__header">${productCharactersText}</p>
            <p class="product-characters__text">${lipsum.generate(50)}</p>
            <button type="button" class="product-characters__btn" id="${productCharactersText}">Buy</button>`;
            if (document.querySelector('.product-characters__body')) {
                document.querySelector('.product-characters__body').remove();
            }
            productCharacters.appendChild(productCharactersItem);

            let buy = document.querySelector('.product-characters');
            buy.addEventListener('click', (event) => {
                    if (event.target.closest('.product-characters__btn')) {
                        alert(`Product ${event.target.id} add to basket`);
                        window.location.reload();
                    }
            }
            );


        }
    });
}
export { showProduct }