function showCategories(categories, products, productsListCategories, productList) {
    categories.addEventListener('click', (event) => {
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
}

export {showCategories}