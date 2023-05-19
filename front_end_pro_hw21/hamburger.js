export default class Hamburger {
    static SIZE_SMALL = [50, 20];
    static SIZE_BIG = [100, 40];
    static STUFFING_CHEESE = [10, 20];
    static STUFFING_SALAD = [20, 5];
    static STUFFING_POTATO = [15, 10];
    static TOPPING_MAYO = [20, 5];
    static TOPPING_SAUCE = [15, 0];

    constructor(size, filling) {
        this.size = size;
        this.filling = filling;
    }

    addTopping(topping) {
      this.filling[0] += topping[0];
      this.filling[1] += topping[1];
    }
    calculate() {
        let ccal = this.size[1] + this.filling[1];
        return ccal;
    }
    calculatePrice(){
        let price = this.size[0] + this.filling[0];
        return price;
    }
}

