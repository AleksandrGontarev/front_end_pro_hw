// import { Car } from "./auto/car.js";
// import humanModule from "./human/human.js";
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showHuman() {
        console.log(`
Name: ${this.name}
Age: ${this.age}
`)
    }
}

class Car {
    constructor(brand, model, year, color) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.owner = {};
    }

    assignOwner(human) {
        if (human.age > 18) {
            this.owner = human;
        } else {
            console.log("The owner is not 18 years old");
        }
    }

    showInfoCar() {
        console.log(`
Brand: ${this.brand}
Model: ${this.model}
Year: ${this.year}
Color: ${this.color}
`)
        this.owner.showHuman()
    }
}

const human = new Human("Sasha", 41);
const human2 = new Human("Anna", 37);




const bmw = new Car("BMW", "X5", 2020, "black");
const shevrolet = new Car("Shevrolet", "Camaro", 1980, "yellow");

bmw.assignOwner(human2);
shevrolet.assignOwner(human);
