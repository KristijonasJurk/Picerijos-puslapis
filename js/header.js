const header = document.querySelector('header');

function checkClass(header) {
    // const headerTop = document.querySelector('.headerTop');
    const headerBottomUl = document.querySelector('.headerBottom ul li');
    const headerBottom = document.querySelector('.headerBottom ul');
    if (header.classList.contains('headerScroll')) {
        headerBottom.classList.add('fixedHeader');
        const image = document.createElement('img');
        image.src = `../img/logo.jpg`;
        headerBottom.insertBefore(image, headerBottomUl);
    }
}
checkClass(header);