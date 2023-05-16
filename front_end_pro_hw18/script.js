import { Human } from "./haus/human.js";
import { Apartment } from "./haus/apartment.js";
import { Haus } from "./haus/haus.js";


let human = new Human("Sasha", "man");
let human2 = new Human("Anna", "woman");
let human3 = new Human("Oleg", "man");

let apartment512 = new Apartment();
apartment512.addResidents(human);
apartment512.addResidents(human2);

let apartment510 = new Apartment();
apartment510.addResidents(human3);


let hausFirst = new Haus(2);
hausFirst.addApartment(apartment512);
hausFirst.addApartment(apartment510);
