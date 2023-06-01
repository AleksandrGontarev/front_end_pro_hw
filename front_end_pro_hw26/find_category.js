function findCategory (productList) {
    let categoryList = [];
    for (let item of productList) {
        if (!categoryList.includes(item.category)) {
            categoryList.push(item.category);
        }
    }
    return categoryList;
}


export {findCategory}