
class Product {
    constructor(name, characters, categories) {
        this.name = name,
            this.characters = characters,
            this.categories = categories
    }
}

let categories = ["red", "green", "blue"];
let productsName = ["First", "Second"];

function productCreate(categories, productsName) {

    let productsList = [];

    for (let i in categories) {
        for (let j in productsName) {
            let name = categories[i] + productsName[j] + "Product";
            let product = new Product(name, `${name}`, categories[i])
            productsList.push(product);
        }
    }

    return productsList;
}

let productList = productCreate(categories, productsName);

export { productList }