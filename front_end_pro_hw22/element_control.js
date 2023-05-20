function addElement() {
    let parent = document.querySelector('.container');
    parent.style.cssText = 'display: flex; '
    parent.append(creatElement());
}

function creatElement() {
    let newElement = document.createElement('div');
    newElement.innerText = 'Hello people !!!';
    newElement.className = 'container__div';
    newElement.style.padding = '0 50px 0 50px';
    return newElement;
}

function removeElement() {
    document.querySelector('.container__div').remove();
}

export {addElement, removeElement}