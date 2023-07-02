import { closeWindow } from "./close_window.js";

let containerError = document.querySelector('.error');

function validateForm() {
    const errorBox = [];
    const firstname = document.getElementById('firstname');
    const lastname = document.getElementById('lastname');
    const quantity = document.getElementById('quantity');

    if (firstname.value.trim() === '') {
        errorBox.push(errorMap('errorFirstName'));
        addColorError(firstname);
    }
    if (lastname.value.trim() === '') {
        errorBox.push(errorMap('errorLastName'));
        addColorError(lastname);
    }
    if (quantity.value.trim() === '') {
        errorBox.push(errorMap('errorQuantity'));
        addColorError(quantity);
    }

    if (errorBox.length) {
        removeElement('.error-item');
        errorBox.forEach(elem => {
            showError(elem.value)
        });
        return true;
    }
    return false;
}

function showError(elem) {
    containerError.style.display = 'flex';
    let error = document.createElement('p');
    error.setAttribute('class', 'error-item');
    error.innerText = `${elem}`;
    containerError.appendChild(error);
    closeWindow('.error-btn', containerError);
}

function removeElement(elemClass) {
    const elem = document.querySelectorAll(elemClass);
    elem.forEach(item => {
        if (item) {
            item.remove();
        }
    })
}

function errorMap(errorMsg) {
    switch (errorMsg) {
        case 'errorFirstName': {
            return {
                value: 'Enter your FirstName'
            }
        }
        case 'errorLastName': {
            return {
                value: 'Enter your LastName'
            }
        }
        case 'errorQuantity': {
            return {
                value: 'Enter Quantity'
            }
        }
    }
}

function addColorError(elem) {
    elem.style.background = 'lightcoral';
    setTimeout(() => { elem.style.background = 'white' }, 3000);
}

export { validateForm, errorMap, addColorError, removeElement }