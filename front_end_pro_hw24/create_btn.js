export default function createButton(btnClass, color) {
    const check = document.createElement('a');
    check.style.cssText = `background-color: ${color};
cursor: pointer;
display: inline-block;
padding: 10px
`;
    check.innerText = `Check ${btnClass}`;
    check.classList.add(`button-${btnClass}`);
    document.querySelector('.container').append(check);
    check.setAttribute('target', '_blank');
}