class Haus {

    constructor(limitApartments, apartmentsAll = []) {
        this.limitApartments = limitApartments;
        this.apartmentsAll = apartmentsAll;
    }

    addApartment(apartment) {
        if (this.apartmentsAll.length < this.limitApartments) {
            this.apartmentsAll.push(apartment);
        } else {
            console.log("The number of apartments is exceeded");
        }

    }
}
export { Haus }