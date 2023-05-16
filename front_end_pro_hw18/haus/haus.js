 export class Haus {

    constructor(limitApartments) {
        this.limitApartments = limitApartments;
        this.apartmentsAll = [];
    }

    addApartment(apartment) {
        if (this.apartmentsAll.length < this.limitApartments) {
            this.apartmentsAll.push(apartment);
        } else {
            console.log("The number of apartments is exceeded");
        }

    }
}