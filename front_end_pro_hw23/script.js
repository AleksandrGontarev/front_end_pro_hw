const body = document.querySelector('.body');
const table = document.createElement('table');

body.insertBefore(table, body.lastChild);
const row = prompt('Input quantity rows');
const columns = prompt('Input quantity culumns');
let counter = 1;

for (let i = 0; i < row; i++) {
    const tr = document.createElement('tr');
    table.append(tr);

    for (let j = 0; j < columns; j++) {
        const td = document.createElement('td');
        tr.append(td);
        td.innerText = `${counter++}`;
    }
}
