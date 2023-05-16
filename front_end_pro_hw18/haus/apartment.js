import { Human } from "./human.js";
class Apartment {

    residents = [];

    addResidents(human) {
        this.residents.push(human);
    }
}
export { Apartment }