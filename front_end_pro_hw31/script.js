import { validateForm } from "./validate.js";
import { hideForm } from "./form.js";
import { creatTable, addElementsInTable } from "./table.js";

const form = document.forms.main;

function showTable(event) {
    event.preventDefault();
    if (validateForm() === false) {
        hideForm();
        creatTable();
        addElementsInTable(form);
    }
}

form.addEventListener('submit', showTable);