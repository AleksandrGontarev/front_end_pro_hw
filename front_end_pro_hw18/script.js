import Human from "./human.js";
import Apartment from "./apartment.js";
import Haus from "./haus.js";


let human = new Human("Sasha", "male");
let human2 = new Human("Anna", "femali");
let human3 = new Human("Oleg", "male");

console.log(human)

let apartment512 = new Apartment();
let apartment510 = new Apartment();

apartment512.addResidents(human);
apartment512.addResidents(human2);
apartment510.addResidents(human3);

console.log(apartment512)


let hausFirst = new Haus(2);

hausFirst.addApartment(apartment512);
hausFirst.addApartment(apartment510);

console.log(hausFirst);