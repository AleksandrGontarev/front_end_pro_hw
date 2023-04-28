const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 2);

function removeElement(array, element) {
  let index = array.findIndex((item) => item == element);
  if (index === -1) {
    console.log(`There is no such element in the array:\n[${array.join(",")}]`);
  } else {
    array.splice(index, 1);
    console.log(`Result: [${array.join(",")}]`);
  }
}
