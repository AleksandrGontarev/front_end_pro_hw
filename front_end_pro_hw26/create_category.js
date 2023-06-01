function createCategory(getCategory, categoryList) {
    for (let item of getCategory) {
        let categoryNew = document.createElement('li');
        categoryNew.setAttribute('class', 'category__item');
        categoryNew.innerHTML = `<a class="category__item-link category-${item}" href="#">${item}</a>`;
        categoryList.appendChild(categoryNew);
    }
}
export { createCategory }