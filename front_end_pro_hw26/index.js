import { productList } from "./create_product.js";
import { findCategory } from "./find_category.js";
import { showCategory } from "./show_category.js";
import { showProduct } from "./show_product.js";
import { createCategory } from "./create_category.js";

const getCategory = findCategory(productList);
const categoryList = document.querySelector('.category__list');
let products = document.querySelector('.products__list');
let productCharacters = document.querySelector('.product-characters');
let productsListByCategory = [];

createCategory(getCategory, categoryList);

showCategory(categoryList, products, productsListByCategory, productList);

showProduct(products, productCharacters, productList,);

