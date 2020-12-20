const p = 'pizza';
const pizzaData = [
    { title: '4 Seasons', photo: `../img/products/${p}_4seasons.jpeg`, price: 7.75, ingredients: ['pievagrybiai', 'pomidorai', 'mocarelos sūris', 'kumpis', 'saliamis', 'picų padažas', 'fetos sūris', 'itališkos žolelės'] },
    { title: 'Chicken BBQ', photo: `../img/products/${p}_chicken.jpg`, price: 7.75, ingredients: ['šoninė', 'vištiena', 'mocarelos sūris', 'raudonieji svogūnai', 'bbq padažas', 'picų padažas'] },
    { title: 'Crazy', photo: `../img/products/${p}_crazy.jpeg`, price: 8.75, ingredients: ['saldžarūgštis padažas', 'vištiena', 'mocarelos sūris', 'saliamis', 'picų padažas'] },
    { title: 'Fiesta', photo: `../img/products/${p}_fiesta.jpeg`, price: 8.75, ingredients: ['vištiena', 'pomidorai', 'mocarelos sūris', 'raudonieji svogūnai', 'saliamis', 'chipotle padažas', 'žalioji paprika', 'česnakinis padažas'] },
    { title: 'Mexican', photo: `../img/products/${p}_mexican.jpg`, price: 8.75, ingredients: ['pievagrybiai', 'pomidorai', 'mocarelos sūris', 'jalapeno griežinėliai', 'saliamis', 'žalioji paprika', 'vištiena'] },
    { title: 'Pepperoni', photo: `../img/products/${p}_pepperoni.jpg`, price: 8.75, ingredients: ['mocarelos sūris', 'saliamis', 'picų padažas'] },
    { title: 'Cheese', photo: `../img/products/${p}_cheese.jpg`, price: 6.75, ingredients: ['mocarelos sūris', 'fetos sūris', 'picų padažas', 'itališkos žolelės'] },
    { title: 'Vegetarian', photo: `../img/products/${p}_vegetarian.jpg`, price: 7.75, ingredients: ['pievagrybiai', 'fetos sūris', 'marinuoti agurkai', 'juodosios alyvuogės', 'žalioji paprika', 'raudonieji svogūnai', 'pomidorai', 'mocarelos sūris', 'picų padažas',] }

];
// TODO jei pirmas ingridientas tai turi prasidėt didžiąją raide ir būti atskirti kableliais

function generatePizza(data) {
    const list = document.querySelector('.productList');
    for (let i = 0; i < data.length; i++) {

        const product = document.createElement('div');
        const a = document.createElement('a');
        const img = document.createElement('img');
        const h6 = document.createElement('h6');
        const p = document.createElement('p');
        const div = document.createElement('div');
        const price = document.createElement('div');
        const button = document.createElement('button');

        product.setAttribute('class', 'product');
        h6.setAttribute('class', 'mediumText');
        div.setAttribute('class', 'productFooter');
        price.setAttribute('class', 'mediumText');
        price.setAttribute('class', 'price');
        button.setAttribute('class', 'buttonShape');

        img.src = data[i].photo;
        h6.innerText = data[i].title;
        price.innerText = `nuo ${data[i].price} €`;
        button.innerHTML = 'Pasirinkti';
        for (let j = 0; j < data[i].ingredients.length; j++) {
            if (j == 0) {
                first = data[i].ingredients[j].charAt(0).toUpperCase() + data[i].ingredients[j].slice(1)
                p.innerText += ` ${first},`;
            }
            if (j == data[i].ingredients.length - 1) {
                p.innerText += ` ${data[i].ingredients[j]}.`;
            } else {
                p.innerText += ` ${data[i].ingredients[j]},`;
            }
        }

        a.appendChild(img);
        div.appendChild(price);
        div.appendChild(button);
        product.appendChild(a);
        product.appendChild(h6);
        product.appendChild(p);
        product.appendChild(div);
        product.appendChild(div);
        list.appendChild(product);
    }
}
generatePizza(pizzaData);