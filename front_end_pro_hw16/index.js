// function externalFunction(elementExternal) {
//     return function internalFunction(elementInternal) {
//         return elementExternal = elementExternal + elementInternal;
//     }
// }

// const closingFunction = externalFunction(0);

// console.log(`sum(3) = ${closingFunction(3)}`);
// console.log(`sum(5) = ${closingFunction(5)}`);
// console.log(`sum(20) = ${closingFunction(20)}`);
let arr = ["HTML", "JavaScript", "CSS"];




function copySorted(arr) {
    let arr1 = [];
    arr1 = arr1.concat(arr);
    return arr1.sort();
}

let sorted = copySorted(arr);
console.log(sorted); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)
