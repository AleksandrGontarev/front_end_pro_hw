import { filterChekedList } from "./validate.js";

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

 export {creatTable, addElementsInTable}