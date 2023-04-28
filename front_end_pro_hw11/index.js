const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 11);
console.log(array);

function removeElement(array, element) {
  let index = array.findIndex((item) => item == element);
  if (index === -1) {
    return console.log(`There is no such element in the array`);
  } else {
    array.splice(index, 1);
  }
}


