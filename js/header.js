const header = document.querySelector('header');

function checkClass(header) {
    const headerBottom = document.querySelector('.headerBottom ul');
    const headerTop = document.querySelector('.headerTop');
    if (header.classList.contains('headerScroll')) {
        headerBottom.classList.add('fixedHeader');
        headerTop.style.transform = 'translateY(-100px)';
        header.style.transform = 'translateY(-70px)';
        setTimeout(launchImage, 0);
    } else {
        headerBottom.classList.remove('fixedHeader');
        headerTop.style.transform = 'translateY(0px)';
        header.style.transform = 'translateY(0px)';
        setTimeout(removeImage, 0);
    }
}
function launchImage() {
    const image = document.querySelector('.headerLinks img')
    image.style.width = '32px';
}
function removeImage() {
    const image = document.querySelector('.headerLinks img')
    image.style.width = '0px';
}
window.onscroll = function () {
    const windowHeight = window.pageYOffset;
    if (windowHeight > 50) {
        checkClass(header);
        document.querySelector("header").classList.add('headerScroll');
    } else if (windowHeight < 50) {
        document.querySelector("header").classList.remove('headerScroll');
        checkClass(header);
    }
}