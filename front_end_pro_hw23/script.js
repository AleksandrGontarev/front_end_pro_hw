const body = document.querySelector('.body');
const table = document.createElement('table');
const tr = document.createElement('tr');
const td = document.createElement('td');
body.insertBefore(table, body.lastChild);


for(let i = 0; i <= 10; i++){
    table.append(tr);
    for(let j = 0; j <= 10; j++){
        tr.append(td);
        td.innerText()
    }
}
