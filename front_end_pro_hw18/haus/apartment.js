import { Human } from "./human.js";
class Apartment {

    constructor(residents = []) {
        this.residents = residents;
    }

    addResidents(human) {
        this.residents.push(human);
    }
}
export { Apartment }