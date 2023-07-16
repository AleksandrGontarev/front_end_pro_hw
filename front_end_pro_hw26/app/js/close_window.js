function closeWindow(button, modalwindow) {
    let closeBtn = document.querySelector(button);
    closeBtn.addEventListener('click', () => { 
        modalwindow.style.display = 'none';
        if (modalwindow === document.querySelector('.info-container')) {
            window.history.go(0);
        }
     })
}

export {closeWindow}