function showCategory(category, products, productsListByCategory, productList) {
    category.addEventListener('click', (event) => {
        if (event.target.closest('.category__item-link')) {

            let categoryName = event.target.classList[1].split('-')[1];

            productsListByCategory = productList.filter(item => item.category === categoryName);
            if (document.querySelectorAll('.products__item')) {
                document.querySelectorAll('.products__item').forEach(elem => elem.remove())
            }
            for (let item of productsListByCategory) {
                let product = document.createElement('li');
                product.setAttribute('class', 'products__item');
                product.innerHTML = `<a class="products__item-link products-${item.name}" href="#">${item.name}</a>`;
                products.append(product);
            }

        }
    }
    )
}

export {showCategory}