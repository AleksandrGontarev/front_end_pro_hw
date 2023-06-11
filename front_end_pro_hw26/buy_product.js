
function buyProduct(selectedProduct) {
    selectedProduct.addEventListener('click', (event) => {
        let productName = event.target.classList[1].split('-')[1];
        alert(`Product ${productName} add to basket`);
        
        window.setTimeout(() => {
            localStorage.clear();
            window.location.href = 'http://127.0.0.1:5500/index.html';}, 1000);

    }
    )
}

export { buyProduct }