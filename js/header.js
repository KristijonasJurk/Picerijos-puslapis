const header = document.querySelector('header');

function checkClass(header) {
    if (header.classList.contains('headerScroll')) {
        console.log('yra');
    }
}
checkClass(header);