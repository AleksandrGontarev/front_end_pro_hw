/************             1          **************/
const arr = [];
for (let i = 10; i <= 20; i++) {
  arr.push(i);
}
console.log(`1) ${arr.join(",")} \n `);

/************             2         ***************/

const arrSquare = [];
for (let i = 10; i <= 20; i++) {
  arrSquare.push(i ** 2);
}
console.log(`2) ${arrSquare.join(",")} \n `);

/************             3         ***************/

const arrSeven = [];
for (let i = 1; i <= 10; i++) {
  arrSeven.push(i * 7);
}
console.log(`3) ${arrSeven.join(",")} \n `);

/************             4         ***************/

let sum = 0;
for (let i = 1; i <= 15; i++) {
  sum += i;
}
console.log(`4) ${sum} \n `);

/************             5         ***************/

let productOfNumbers = 1;
for (let i = 15; i <= 35; i++) {
  productOfNumbers *= i;
}
console.log(`5) ${BigInt(productOfNumbers)} \n `);

/************             6         ***************/

let sumAverage = 0;
const n = 500;
for (let i = 1; i <= n; i++) {
  sumAverage += i;
}
const averageNumber = sumAverage / n;
console.log(`6) ${averageNumber} \n `);

/************             7        ***************/

let sumOfPairedNumbers = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sumOfPairedNumbers += i;
  }
}
console.log(`7) ${sumOfPairedNumbers} \n `);

/************             8        ***************/

const arrMultipleOfThree = [];
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    arrMultipleOfThree.push(i);
  }
}
console.log(`8) ${arrMultipleOfThree.join(",")} \n `);
