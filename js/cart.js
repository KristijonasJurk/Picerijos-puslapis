// generate sauce options for cart.html
const sc = 'sauce';
const sauceData = [
    { title: 'Porcijinis kečupas', photo: `./img/products/${sc}_kecupas.jpg`, price: 0.15 },
    { title: 'BBQ padažas', photo: `./img/products/${sc}_bbq.jpeg`, price: 0.35 },
    { title: 'Bulvyčių padažas', photo: `./img/products/${sc}_bulvyciu.jpeg`, price: 0.35 },
    { title: 'Česnakinis padažas', photo: `./img/products/${sc}_cesnakinis.jpeg`, price: 0.35 },
    { title: 'Kario-mangų padažas', photo: `./img/products/${sc}_kario.jpeg`, price: 0.35 }
];
function generateSauces(data) {
    const list = document.querySelector('.saucesList');
    for (let i = 0; i < data.length; i++) {

        const product = document.createElement('div');
        const p = document.createElement('p');
        const img = document.createElement('img');
        const button = document.createElement('button');

        product.setAttribute('class', 'sauces');

        img.src = data[i].photo;
        button.innerHTML = `${sauceData[i].price} €`;
        p.innerText = `${data[i].title}`;

        product.appendChild(img);
        product.appendChild(p);
        product.appendChild(button);
        list.appendChild(product);
    }
}
generateSauces(sauceData);