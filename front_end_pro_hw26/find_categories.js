function findCategories (productList) {
    let categoriesList = [];
    for (let item of productList) {
        if (!categoriesList.includes(item.categories)) {
            categoriesList.push(item.categories);
        }
    }
    return categoriesList;
}

export {findCategories}