
function validateForm() {
    const errorBox = [];
    const firstname = document.getElementById('firstname');
    const lastname = document.getElementById('lastname');
    const date = document.getElementById('date');
    const radioGender = document.querySelectorAll('.radio-gender');
    const adress = document.getElementById('adress');
    const languages = document.querySelectorAll('.languages');

    if (firstname.value.trim() === '') {
        errorBox.push(errorMap('errorFirstName'));
        addColorError(firstname);
    }
    if (lastname.value.trim() === '') {
        errorBox.push(errorMap('errorLastName'));
        addColorError(lastname);
    }
    if (adress.value.trim() === '') {
        errorBox.push(errorMap('errorAdress'));
        addColorError(adress);
    }
    if (!date.value) {
        errorBox.push(errorMap('errorDate'));
        addColorError(date);
        
    }
    if (validateArray(radioGender)) {
        errorBox.push(errorMap('errorGender'));
        addColorError(document.querySelector('.gender-label'));
    }
    if (validateArray(languages)) {
        errorBox.push(errorMap('errorLanguages'));
        addColorError(document.querySelector('.languages-label'));
    }

    if (errorBox.length) {
        errorBox.forEach(elem => { console.log(elem) });
        return true;
    }
    return false;
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
        case 'errorAdress': {
            return {
                value: 'Enter your Adress'
            }
        }
        case 'errorDate': {
            return {
                value: 'Enter your Date'
            }
        }
        case 'errorGender': {
            return {
                value: 'Select your Gender'
            }
        }
        case 'errorLanguages': {
            return {
                value: 'Select Languages'
            }
        }
    }
}

function validateArray(arr) {
    let arrayChekedFalse = [];
    arrayChekedFalse = Array.from(arr).filter(elem => elem.checked == true);
    if (!arrayChekedFalse.length) {
        return true;
    }
}

function addColorError(elem) {
    elem.style.background = 'lightcoral';
    setTimeout(() => {elem.style.background = 'white'}, 3000);
}

function filterChekedList(incomingArr) {
    let result = [];
    let newArr = Array.from(incomingArr).filter(elem => elem.checked != false);
    newArr.forEach(elem => result.push(elem.value));
    return result;
}

export { validateForm, validateArray, errorMap, addColorError, filterChekedList }