function findCategory (productList) {
    let categoryList = [];
    for (let item of productList) {
        if (!categoryList.includes(item.categories)) {
            categoryList.push(item.categories);
        }
    }
    return categoryList;
}

export {findCategory}