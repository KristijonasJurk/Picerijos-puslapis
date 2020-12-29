const products = document.querySelectorAll('.product');
const close = document.querySelector('[data-close-button]');
const overlay = document.querySelector('.popupOverlay');
const popup = document.querySelector('.popup1');
// for each product card
products.forEach(product => {
    product.addEventListener('click', () => {
        openPopup();
        specificProduct(product);
    })
})
close.addEventListener('click', () => {
    closePopup();
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
    removeIngredients();
}
// we alter the popup card considering the produt, which was clicked (this is a temprary solution)
function specificProduct(product) {
    // add main product photo
    const image = document.querySelector('.productImage img');
    image.src = product.children[0].children[0].src;
    // add the h2 tag to the name of the product
    document.querySelector('.popupRight h2').innerHTML = product.children[1].innerHTML;
    // add the ingredients
    const string = product.children[2].innerHTML;
    var ingr = string.trim().split(",");
    for (let i = 0; i < ingr.length; i++) {
        const a = document.createElement('a');
        const p = document.createElement('p');
        const div = document.createElement('div');
        a.setAttribute('class', 'ingredient');
        div.setAttribute('class', 'closeIngredient');
        div.innerHTML = 'x';
        p.innerHTML = ingr[i];
        a.appendChild(p);
        a.appendChild(div);
        document.querySelector('.popup1tags').appendChild(a);
        // generate ingredient list
        pizzaSizes()
        // and remove ingredient if x is clicked
        ingredientClose()
        // when an ad in is selected
        ads()
    }
}
function pizzaSizes() {
    const buttons = document.querySelectorAll('.pizzaSizes a');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('sizeChecked');
            }
            button.classList.add('sizeChecked');
        })
    })
}
function ingredientClose() {
    const closeAll = document.querySelectorAll('.closeIngredient');
    closeAll.forEach(close => {
        close.addEventListener('click', () => {
            close.parentElement.remove();
        })
    })
}
function removeIngredients() {
    const ingredients = document.querySelectorAll('.ingredient');
    for (let i = 0; i < ingredients.length; i++) {
        ingredients[i].remove();
    }
}
function ads() {
    const ads = document.querySelectorAll('.pizzaAdBox');
    ads.forEach(ad => {
        let index = 0;
        ad.addEventListener('click', () => {
            index++;
            if (index % 2 !== 0) {
                ad.style.border = '1px solid #FF5C01';
                ad.children[1].style.transform = 'scale(1)';
            } else {
                ad.style.border = 'none';
                ad.children[1].style.transform = 'scale(0)';
            }
        })
    })
}