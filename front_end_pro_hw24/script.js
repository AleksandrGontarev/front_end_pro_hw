import ChangeInputValue from "./change_input.js";
import createButton from "./create_btn.js";

const input = document.querySelector('.input');

createButton('https', "yellow");
createButton('http', 'red');

document.querySelector('.button-https').addEventListener('click', function change(){new ChangeInputValue('https', 'http').value(input)}
);

document.querySelector('.button-http').addEventListener('click', function change(){new ChangeInputValue('http', 'https').value(input)}
);

