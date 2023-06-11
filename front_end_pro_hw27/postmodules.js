function createPost(data, postBlock) {
    let postNew = document.createElement('div');

    postNew.setAttribute('class', 'posts__item');
    if ((typeof data) === 'object') {
        postNew.innerHTML = `<p class="posts__id">Post Id: ${data.id}</p>
<p class="posts__title">Post title: ${data.title}</p>
<p class="posts__text">Text: ${data.body}</p>
<p class="posts__user-id">User Id: ${data.userId}</p>
<button class="posts__btn" type="button">Comments</button>`;
        postBlock.appendChild(postNew);
    } else {
        postNew.innerHTML = `<p class="posts__text">${data}</p>`;
        postBlock.appendChild(postNew);
    }
}

function validatePostId(value) {
    const postValidate = document.querySelector('.posts__error-input');

    if (isNaN(+value)) {
        postValidate.textContent = 'Not Number';
        return false;
    } else if (value[0] === '0') {
        postValidate.textContent = 'enter a number from 1 to 100';
        return false;
    } else if (value === '') {
        postValidate.textContent = 'enter a number from 1 to 100';
        return false;
    } else if (value.includes(' ')) {
        postValidate.textContent = 'enter a number from 1 to 100';
        return false;
    } else {
        if ((+value < 1) || (+value > 100)) {
            postValidate.textContent = 'Id not in interval from 1 to 100';
            return false;
        } else {
            postValidate.textContent = 'ok';
            return true;
        }
    }
}

export {createPost, validatePostId}