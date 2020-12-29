const products = document.querySelectorAll('.product');
const close = document.querySelector('[data-close-button]');
const overlay = document.querySelector('.popupOverlay');
const popup = document.querySelector('.popup1');
// for each product card
products.forEach(product => {
    product.addEventListener('click', () => {
        openPopup();
    })
})
close.addEventListener('click', () => {
    closePopup();
    specificProduct();
})
// open popup card
function openPopup() {
    popup.classList.add('active');
    overlay.classList.add('active');
}
// close popup card
function closePopup() {
    popup.classList.remove('active');
    overlay.classList.remove('active');
}
// we alter the popup card considering the produt, which was clicked (this is a temprary solution)
