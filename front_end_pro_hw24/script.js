let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');

function https(elem){
if (elem.protocol != 'https:'){
    console.log("NOT https")
} else {
    console.log();
}
}

https(button1);