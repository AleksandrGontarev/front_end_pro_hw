function numberDegree(number, degree) {
    let result = number;
    if (degree == 1) {
        return number;
    }
    else {
        result *= numberDegree(number, degree - 1);
        return result;
    }
}

function userAdequacyCheck(element) {

    switch (element) {
        case null:
            alert("You input Esc, try again");
            return false;
        case "":
            alert("You input empty string, try again");
            return false;
        default:
            switch (!isNaN(+element)) {
                case false:
                    alert("You input not number, try again");
                    return false;
                default:
                    return element;
            }
    }
}

const number = prompt("Input number");
if (userAdequacyCheck(number)) {
    let degree = prompt("Input degree");
    if (userAdequacyCheck(degree)) {
        console.log(numberDegree(number, degree));
    }
}
