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

export default {Human}