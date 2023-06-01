
function buyProduct(selectedProduct) {
    selectedProduct.addEventListener('click', (event) => {
        if (event.target.closest('.product-characters__btn')) {
            alert(`Product ${event.target.id} add to basket`);
            window.location.reload();
        }
    }
    )
}

export {buyProduct}