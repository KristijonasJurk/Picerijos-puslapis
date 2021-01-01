const header = document.querySelector('header');

function checkClass(header) {
    const headerTop = document.querySelector('.headerTop');
    const headerBottom = document.querySelector('.headerBottom');
    if (header.classList.contains('headerScroll')) {
        // headerTop.style.transform = 'scale(0)';
        // headerBottom.classList.add('fixedHeader');
    }
}
checkClass(header);