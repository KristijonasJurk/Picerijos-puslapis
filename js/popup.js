const products = document.querySelectorAll('.product');
const close = document.querySelector('[data-close-button]');
const overlay = document.querySelector('.popupOverlay');
const popup = document.querySelector('.popup1');
// for each product card
products.forEach(product => {
    product.addEventListener('click', () => {
        if (product.id == 'pizza') {
            openPopup();
            specificProduct(product);
        } else {
            openPopup();
            specificProduct(product);
        }
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
    resetStyles()
}
// we alter the popup card considering the produt, which was clicked (this is a temprary solution)
function specificProduct(product) {
    // add main product photo
    const image = document.querySelector('.productImage img');
    image.src = product.children[0].children[0].src;
    // add the h2 tag to the name of the product
    document.querySelector('.popupRight h2').innerHTML = product.children[1].innerHTML;
    if (product.id == 'pizza') {
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
            // change sizes when size buttons are clicked
            changeSizes()
        }
    } else {
        //for not pizza products
        document.querySelectorAll('.productImage img')[1].style.opacity = '0';
        document.querySelector('.pizzaSizes').style.opacity = '0';
        document.querySelector('.pizzaTraditional').style.opacity = '0';
        document.querySelector('.pizzaTraditional').style.opacity = '0';
        document.querySelector('.popupRight h6').style.opacity = '0';
        for (const ad of document.querySelectorAll('.pizzaAdBox')) {
            ad.style.opacity = '0';
        }
        document.querySelector('.popup1').style.minHeight = '200px';
        // add a text area with the quantity of the product
        const text = document.querySelector('.popupRight h2').innerHTML;
        const p = document.createElement('p');
        const h4 = document.querySelector('.popupRight h4');
        h4.appendChild(p);
        p.style.fontSize = '16px';
        p.style.color = 'black';
        p.innerHTML += product.children[2].innerHTML;
        if (text.includes('vnt') || text.includes(' ml')) {
            p.innerHTML += text.substr(text.length - 6)
        } else if (text.includes('0g')) {
            p.innerHTML += text.substr(text.length - 4)
        } else if (text.includes('cm')) {
            p.innerHTML += text.substr(text.length - 5)
        }
        // for drinks and other category products
        if (product.id == 'drink' || product.id == 'other') {
            document.querySelector('.popupRight h4 p').innerHTML = product.children[2].innerHTML;
        }
    }
}
function resetStyles() {
    document.querySelectorAll('.productImage img')[1].style.opacity = '0.3';
    document.querySelector('.pizzaSizes').style.opacity = '1';
    document.querySelector('.pizzaTraditional').style.opacity = '1';
    document.querySelector('.popupRight h6').style.opacity = '1';
    for (const ad of document.querySelectorAll('.pizzaAdBox')) {
        ad.style.opacity = '1';
    }
    document.querySelector('.popup1').style.minHeight = '600px';
    if (document.querySelector('.popupRight h4 p')) {
        document.querySelector('.popupRight h4 p').remove();
    }

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
// instead of forEach I wanted to try for of
function changeSizes() {
    const buttons = document.querySelectorAll('.pizzaSizes a');
    const pizza = document.querySelector('.productImage img');
    for (const button of buttons) {
        button.addEventListener('click', () => {
            if (button.innerHTML == 'Maža') {
                pizza.style.width = '210px';
                pizza.style.right = '60%';
                pizza.style.top = '32%';
            } else if (button.innerHTML == 'Vidutinė') {
                pizza.style.width = '300px';
                pizza.style.right = '55.5%';
                pizza.style.top = '25%';
            } else if (button.innerHTML == 'Didelė') {
                pizza.style.width = '400px';
                pizza.style.right = '50.5%';
                pizza.style.top = '17.9%';
            }
        })
    }
}