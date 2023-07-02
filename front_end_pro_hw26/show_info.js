import { validateForm } from "./form_validate_error.js";

function showInfo(event) {
    if (validateForm() === false) {

        showOrderInfo();
        event.preventDefault();
    } else {
        event.preventDefault();
    }
}


function showOrderInfo() {

    const infoContainer = document.querySelector('.info-container');
    const city = document.getElementById('city');
    const storage = document.getElementById('storage').value;
    const productName = document.querySelector('.product-characters__header').textContent;
    const productCharacters = document.querySelector('.product-characters__text').textContent;
    const productQuantity = document.getElementById('quantity').value;
    const info = document.createElement('div');
    const container = document.querySelector('.container');

    
    info.innerHTML = `<div class="info"><p>City: ${city.value}</p><br>
    <p>Storage: ${storage}</p><br>
    <p>Product: ${productName}</p><br>
    <p>Characters: ${productCharacters}</p><br>
    <p>Quantity: ${productQuantity}</p></div>`;

    infoContainer.appendChild(info);
    infoContainer.style.display = 'block';

    container.style.display = 'none';
}
export { showInfo }