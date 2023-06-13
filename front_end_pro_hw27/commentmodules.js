import { removeElement } from "./modules.js";
import { getInfo } from "./modules.js";

async function showComments(value, urlComments, headBlock) {
    let comments = await getInfo(value, urlComments);
    console.log(comments);
    createCommentsList(headBlock);
    comments.forEach((item) => createComment(item))
}

function createCommentsList(headBlock) {
    let commentsList = document.createElement('ul');
    commentsList.setAttribute('class', 'comments__list');
    commentsList.style.paddingLeft = "0";
    headBlock.appendChild(commentsList);
}

function createComment(data) {
    let commentBlock = document.querySelector('.comments__list');
    let commentNew = document.createElement('li');
    commentNew.setAttribute('class', 'comments__item');
    commentNew.style.cssText = "border: 2px solid black; list-style: none;";
    commentNew.innerHTML = `<p class="comments__posts-id">Post Id: ${data.postId}</p>
<p class="comments__id">Comment id: ${data.id}</p>
<p class="comments__Name">Name: ${data.name}</p>
<p class="comments__text">Text: ${data.body}</p>
<p class="comments__email">Email: ${data.email}</p>`
    commentBlock.appendChild(commentNew);
}

export { showComments, createCommentsList, createComment }