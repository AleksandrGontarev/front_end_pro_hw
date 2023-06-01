import { productList } from "./create_product.js";
import { parseCategory } from "./parse_category.js";
import { chooseCategory } from "./choose_category.js";
import { chooseProduct } from "./choose_product.js";
import { createCategory } from "./create_category.js";

const category = parseCategory(productList);
const categoryTag = document.querySelector('.category__list');
const productsTag = document.querySelector('.products__list');
const productCharacters = document.querySelector('.product-characters');
const productsListByCategory = [];

createCategory(category, categoryTag);

chooseCategory(categoryTag, productsTag, productsListByCategory, productList);

chooseProduct(productsTag, productCharacters, productList,);

