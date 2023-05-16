export default class Car {
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
        console.group("Car");
        console.log(`Brand: ${this.brand}
Model: ${this.model}
Year: ${this.year}
Color: ${this.color}
`)
        console.groupEnd();

        this.owner.showHuman()
       

    }
}