import {addElement, removeElement} from './element_control.js';

let text = document.querySelector('.container__text');

text.addEventListener('mouseover', addElement);
text.addEventListener('mouseout', removeElement);


