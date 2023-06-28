function hideForm() {
    const formElement = document.querySelector('.some-form');
    formElement.style.display = 'none';
}

function creatTable() {
    let container = document.querySelector('.container');
    let newTable = document.createElement('table');
    newTable.setAttribute('class', 'some-table');
    newTable.innerHTML = `<tr>
        <th>Name</th>
        <th>Birth Day</th>
        <th>Gender</th>
        <th>City</th>
        <th>Adress</th>
        <th>languages</th>
    </tr>`;
    container.appendChild(newTable);
}

function addElementsInTable(form) {
    let table = document.querySelector('table');
    let newTable = document.createElement('tr');
    newTable.setAttribute('class', 'body-table');
    newTable.innerHTML = `<td>${form.firstname.value} ${form.lastname.value}</td>
        <td>${form.date.value}</td>
        <td>${form.gender.value}</td>
        <td>${form.city.value}</td>
        <td>${form.adress.value}</td>
        <td>${filterChekedList(form.languages)}</td>`;
    table.appendChild(newTable);
}

function showTable(event) {
    if (validateForm() == false) {
        event.preventDefault();
        hideForm();
        creatTable();
        addElementsInTable(form);
    }
}

const filterChekedList = (incomingArr) => {
    let result = [];
    let arr = changeCheckedList(incomingArr);
    let newArr = arr.filter(elem => elem.checked != false);
    newArr.forEach(elem => result.push(elem.value));
    return result;
}

function changeCheckedList(arr) {
    let arrNew = [];
    arr.forEach(element => {
        arrNew.push(element);
    });
    return arrNew;
}

function validateArray(arr) {
    let clearArray = changeCheckedList(arr);
    let arrayChekedFalse = [];

    arrayChekedFalse = clearArray.filter(elem => elem.checked == true);
    if (!arrayChekedFalse.length) {
        return true;
    }
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
    }
    if (lastname.value.trim() === '') {
        errorBox.push(errorMap('errorLastName'));
    }
    if (adress.value.trim() === '') {
        errorBox.push(errorMap('errorAdress'));
    }
    if (!date) {
        errorBox.push(errorMap('errorDate'))
    }
    if (validateArray(radioGender)) {
        errorBox.push(errorMap('errorGender'));
    }
    if (validateArray(languages)) {
        errorBox.push(errorMap('errorLanguages'));
    }

    if (errorBox.length) {
        errorBox.forEach(elem => { console.log(elem) });
        return true;
    }
    return false;
}

//********************************************************************************* */

const form = document.forms.main;

form.addEventListener('submit', showTable);



