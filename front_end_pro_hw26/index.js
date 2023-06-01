import { productList } from "./create_product.js";
import { parseCategory } from "./parse_category.js";
import { chooseCategory } from "./choose_category.js";
import { chooseProduct } from "./choose_product.js";
import { createCategory } from "./create_category.js";

const category = parseCategory(productList);
const categoryList = document.querySelector('.category__list');
let products = document.querySelector('.products__list');
let productCharacters = document.querySelector('.product-characters');
let productsListByCategory = [];

createCategory(category, categoryList);

chooseCategory(categoryList, products, productsListByCategory, productList);

chooseProduct(products, productCharacters, productList,);

