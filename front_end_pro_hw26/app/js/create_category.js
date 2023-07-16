function createCategory(getCategory, categoryTag) {
    for (let item of getCategory) {
        let categoryNew = document.createElement('li');
        categoryNew.setAttribute('class', 'category__item');
        categoryNew.innerHTML = `<a class="category__item-link category-${item}" href="#">${item}</a>`;
        categoryTag.appendChild(categoryNew);
    }
}
export { createCategory }