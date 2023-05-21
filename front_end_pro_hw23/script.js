const body = document.querySelector('.body');
const table = document.createElement('table');

body.insertBefore(table, body.lastChild);

let counter = 1;

for (let i = 0; i < 10; i++) {
    const tr = document.createElement('tr');
    table.append(tr);

    for (let j = 0; j < 10; j++) {
        const td = document.createElement('td');
        tr.append(td);
        td.innerText = `${counter++}`;
    }
}
