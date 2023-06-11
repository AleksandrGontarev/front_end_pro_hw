import { productList } from "./create_product.js";
import { getCategory } from "./get_category.js";
import { chooseCategory } from "./choose_category.js";
import { chooseProduct } from "./choose_product.js";
import { createCategory } from "./create_category.js";


const allCategory = getCategory(productList);

const categoryTag = document.querySelector('.category__list');
const productsTag = document.querySelector('.products__list');
const productCharacters = document.querySelector('.product-characters');
const productsListByCategory = [];

createCategory(allCategory, categoryTag);

chooseCategory(categoryTag, productsTag, productsListByCategory, productList);

chooseProduct(productsTag, productCharacters, productList);

