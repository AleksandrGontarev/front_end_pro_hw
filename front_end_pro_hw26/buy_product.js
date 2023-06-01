
function buyProduct(selectedProduct) {
    selectedProduct.addEventListener('click', (event) => {  
            let productName = event.target.classList[1].split('-')[1];
            alert(`Product ${productName} add to basket`);
            window.setTimeout(() => window.location.reload(), 1000)
    }
    )
}

export {buyProduct}