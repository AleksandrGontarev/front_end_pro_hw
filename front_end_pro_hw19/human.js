export default class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showHuman() {
        console.group("Owner");
        console.log(`Name: ${this.name}
Age: ${this.age}
`)
console.groupEnd();
    }
}