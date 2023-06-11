import { createPost, validatePostId } from "./postmodules.js";
import { getInfo, removeElement } from "./modules.js";
import { showComments } from "./commentmodules.js";

const post = document.querySelector('.posts__input');
const postValidate = document.querySelector('.posts__error-input');
const headBlock = document.querySelector('.posts');

const urlPost = 'https://jsonplaceholder.typicode.com/posts/';
const urlComments = 'https://jsonplaceholder.typicode.com/comments?postId=';

post.addEventListener('change', showPost);

async function showPost(event) {
    let value = event.target.value;
    if (validatePostId(value, postValidate)) {
        let postBody = await getInfo(value, urlPost);
        if (postBody) {
            removeElement('.posts__item');
            removeElement('.comments__list');
            createPost(postBody, headBlock);
            const postBtn = document.querySelector('.posts__btn');
            postBtn.addEventListener('click', () => { showComments(value, urlComments, headBlock) });
        } else {
            createPost('No post', headBlock);
        }
    } else {
        createPost('', headBlock);
    }
}