const div = document.querySelector(".div");
const text = document.querySelector(".text");

text.addEventListener("focus", show);
text.addEventListener("blur", doNotShow);

function show(){
    div.style.display = "block";
}

function doNotShow(){
    div.style.display = "none";
}





