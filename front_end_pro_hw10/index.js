/*****************   1   ****************/
const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];
console.log(`Array: ${arr}`);
const arrPositivElement = arr.filter((item) => item > 0);
const result = arrPositivElement.reduce((sum, current) => sum + current, 0);
console.log(
  `\nArray positive elements: ${arrPositivElement} \nLength array positive elements: ${arrPositivElement.length} \nSum of positive elements: ${result}`
);

/****************    2  *****************/

const arrSortMin = arr.slice().sort((a, b) => a - b);
const minElement = arrSortMin[0];
const indexMinElement = arr.findIndex((index) => index == minElement);
console.log(
  `\nMin element: ${minElement} \nIndex min element: ${indexMinElement}`
);

/****************   3  *****************/

const arrSortMax = arr.slice().sort((a, b) => b - a);
const maxElement = arrSortMax[0];
const indexMaxEliment = arr.findIndex((index) => index === maxElement);
console.log(
  `\nMax element: ${maxElement} \nIndex max element: ${indexMaxEliment}`
);

/****************   4  *****************/

const quantityNegativeElements = arrSortMin.length;
console.log(`\nQuantity of negative elements: ${quantityNegativeElements}`)

/****************   5  *****************/

const productNumbers = arr.filter(item => item > 0).reduce((product, item) => product * item, 1);
console.log(`\nProduct of postive numbers: ${BigInt(productNumbers)}`);
