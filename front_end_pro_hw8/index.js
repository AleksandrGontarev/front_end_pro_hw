let someString = "";

const lengthArray = prompt("Задай довжину масиву");

switch (lengthArray) {
  case null:
    alert("Ви скасували");
    break;
  case "":
    alert("Ви ввели пусту строку");
    break;
  default:
    switch (isNaN(+lengthArray)) {
      case true:
        alert("Ви ввели не число");
        break;
      default:
        someString = prompt(
          `Додайте ${lengthArray} елементів у масив через кому`
        );

        if (someString.split(",").length === Number(lengthArray)) {
          const arrayElement = someString.split(",");
          alert(`Отриманий масив :
                    ${arrayElement}`);
          arrayElement.sort((a, b) => a - b);
          alert(`Відсортований масив:
                    ${arrayElement}`);
          if (arrayElement.length > 4) {
            const removedElement = arrayElement.splice(1, 3);
            alert(`Масив після видалення ${removedElement} елементів:
                     ${arrayElement}`);
          } else {
            alert(
              `Довжина масива = ${arrayElement.length}, що не дозволяє видалити елементи з 2 по 4(включно)`
            );
          }
        } else {
          alert(
            `Ви ввели ${
              someString.split(",").length
            } елементів, а потрібно було ввести ${lengthArray} !!! Перезавантажте сторінку, та спробуйте ще раз !!!`
          );
        }
        break;
    }
    break;
}