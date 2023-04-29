const array = [NaN, undefined, null, false, true, {}, [], "", " ", 0, 1.5, 2, 3.2, "0", "1"];
const arrayZnak = ["+", "-", "*", "/", "%", "^"];

const exercise = prompt(`Select a task by clicking 1, 2, 3, 4:
1) Arithmetic mean 

2) Calculator light

3) Filling a two-dimensional array

4) Delete symbol
`);

switch (exercise) {
    case "1":
        alert(`ArithmeticMean: ${calcArithmeticMean(array)}`);
        break;
    case "2":
        doMath();
        break;
    case "3":
        fillingArray();
        break;
    case "4":
        removeSymbols();
        break;
    case null:
        alert("You have clicked exit, please try again");
        break;
    default:
        alert("You did not select a menu item, please try again");
        break;
}

/*Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.*/

function calcArithmeticMean(array) {
    let arrayNumber = array.filter(
        (number) => !isNaN(+number) && typeof number === "number"
    );
    if (isNaN(arrayNumber)) {
        let average =
            arrayNumber.reduce((sum, item) => sum + Math.abs(item), 0) / arrayNumber.length;
        return average;
    }
    return "There are no numbers in the array";
}

/*Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
 У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії,
  вказаної в змінній znak.Обидва числа і знак виходять від користувача.*/

function checkingNumber(number) {
    switch (number) {
        case null:
            alert("You have clicked exit, please try again");
            return false;
        default:
            switch (!isNaN(+number)) {
                case false:
                    alert("You entered the wrong number, try again");
                    return false;
                default:
                    return true;
            }
    }
}

function checkingZnak(znak) {
    switch (znak) {
        case null:
            alert("You have clicked exit, please try again");
            return false;
        default:
            if (arrayZnak.find((item) => item === znak) !== undefined) {
                return true;
            }
            alert("This is not a sign, try again");
            return false;
    }
}

function choiseAction(x, znak, y) {
    switch (znak) {
        case "+":
            return x + y;
        case "-":
            return x - y;
        case "*":
            return x * y;
        case "/":
            return x / y;
        case "%":
            return x % y;
        case "^":
            return x ** y;
    }
}

function doMath() {
    const numberOne = prompt("Keep the first number: ");
    if (checkingNumber(numberOne)) {
        const znak = prompt("Lead the sign:\n +\n -\n *\n /\n %\n ^(degree )\n: ");
        if (checkingZnak(znak)) {
            const numberTwo = prompt("Keep the second number: ");
            if (checkingNumber(numberTwo)) {
                alert(`${numberOne} ${znak} ${numberTwo} = ${choiseAction(+numberOne, znak, +numberTwo)}`);
            }
        }
    }
}
/*Написати функцію заповнення даними користувача двомірного масиву.
    Довжину основного масиву і внутрішніх масивів задає користувач.
    Значення всіх елементів всіх масивів задає користувач.*/


function fillingArray() {
    const lengthHeadArray = prompt("Input LENGTH head array");
    if (checkingNumber(lengthHeadArray)) {
        const headArray = [];
        for (let i = 0; i < lengthHeadArray; i++) {
            const element = prompt(`Input <<${i + 1}>> element of head array.
    !!!  IF YOU WANT TO ENTER AN ARRAY WRITE "array" !!!`);
            if (element === "array") {
                const lengthSecondArray = prompt("Input LENGTH second array");
                const secondArray = [];
                if (checkingNumber(lengthSecondArray)) {
                    for (let j = 0; j < lengthSecondArray; j++) {
                        secondArray[j] = prompt(`Input <<${j + 1}>> element second array`);
                    }
                }
                headArray[i] = secondArray;
            } else {
                headArray[i] = element;
            }
        }

        let result = "";
        for (let i = 0; i < headArray.length; i++) {
            switch (i) {
                case 0:
                    if (Array.isArray(headArray[i])) {
                        result += `[${headArray[i]}]`;
                    } else {
                        result += `${headArray[i]}`;
                    }
                    break;
                default:
                    if (Array.isArray(headArray[i])) {
                        result += `,  [${headArray[i]}]`;
                    } else {
                        result += `,  ${headArray[i]}`;
                    }
                    break;
            }
        }
        alert(`[${result}]`);
    }
}

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
//   'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.


function removeSymbols() {
    const startString = prompt("Input string");
    if (checkString(startString)) {
        const symbol = prompt("Enter the symbols to delete separated by commas");
        if (checkString(symbol)) {
            let resultArray = [];
            let counter = 0;
            for (let i = 0; i < startString.split("").length; i++) {
                if (!symbol.split(",").some((element) => element === startString.split("")[i])) {
                    resultArray[counter++] = startString.split("")[i]
                }
            }
            alert(resultArray.join(""));
        }
    }
}

function checkString(str) {
    switch (str) {
        case null:
            alert("You have clicked exit, please try again");
            return false;
        case "":
            alert("You input empty string");
            return false;
        default:
            return true;
    }
}
