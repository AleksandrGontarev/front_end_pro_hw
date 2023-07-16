
class Product {
    constructor(name, characters, category) {
            this.name = name,
            this.characters = characters,
            this.category = category
    }
}

let category = ["red", "green", "blue"];
let productsName = ["First", "Second"];

function productCreate(category, productsName) {

    let productsList = [];

    for (let i in category) {
        for (let j in productsName) {
            let name = category[i] + productsName[j] + "Product";
            let product = new Product(name, `${name}`, category[i])
            productsList.push(product);
        }
    }

    return productsList;
}

let productList = productCreate(category, productsName);

export { productList }