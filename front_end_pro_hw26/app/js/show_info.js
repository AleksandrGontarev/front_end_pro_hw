import { validateForm } from "./form_validate_error.js";
import { closeWindow } from "./close_window.js";
import { removeElement } from "./form_validate_error.js";

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
    removeElement(".info")

    const info = document.createElement('div');

    info.innerHTML = `<div class="info"><p>City: ${city.value}</p><br>
    <p>Storage: ${storage}</p><br>
    <p>Product: ${productName}</p><br>
    <p>Characters: ${productCharacters}</p><br>
    <p>Quantity: ${productQuantity}</p>
    <button class="info-btn" type="button">Close</button>
    </div>`;

    infoContainer.appendChild(info);
    infoContainer.style.display = 'block';

    closeWindow('.info-btn', infoContainer);

}
export { showInfo }