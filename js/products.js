
const p = 'pizza';
const pizzaData = [
    { title: '4 Seasons', photo: `../img/products/${p}_4seasons.png`, price: 7.75, ingredients: ['pievagrybiai', 'pomidorai', 'mocarelos sūris', 'kumpis', 'saliamis', 'picų padažas', 'fetos sūris', 'itališkos žolelės'] },
    { title: 'Chicken BBQ', photo: `../img/products/${p}_chicken.png`, price: 7.75, ingredients: ['šoninė', 'vištiena', 'mocarelos sūris', 'raudonieji svogūnai', 'bbq padažas', 'picų padažas'] },
    { title: 'Crazy', photo: `../img/products/${p}_crazy.png`, price: 8.75, ingredients: ['saldžarūgštis padažas', 'vištiena', 'mocarelos sūris', 'saliamis', 'picų padažas'] },
    { title: 'Fiesta', photo: `../img/products/${p}_fiesta.png`, price: 8.75, ingredients: ['vištiena', 'pomidorai', 'mocarelos sūris', 'raudonieji svogūnai', 'saliamis', 'chipotle padažas', 'žalioji paprika', 'česnakinis padažas'] },
    { title: 'Mexican', photo: `../img/products/${p}_mexican.png`, price: 8.75, ingredients: ['pievagrybiai', 'pomidorai', 'mocarelos sūris', 'jalapeno griežinėliai', 'saliamis', 'žalioji paprika', 'vištiena'] },
    { title: 'Pepperoni', photo: `../img/products/${p}_pepperoni.png`, price: 8.75, ingredients: ['mocarelos sūris', 'saliamis', 'picų padažas'] },
    { title: 'Cheese', photo: `../img/products/${p}_cheese.png`, price: 6.75, ingredients: ['mocarelos sūris', 'fetos sūris', 'picų padažas', 'itališkos žolelės'] },
    { title: 'Vegetarian', photo: `../img/products/${p}_vegetarian.png`, price: 7.75, ingredients: ['pievagrybiai', 'fetos sūris', 'marinuoti agurkai', 'juodosios alyvuogės', 'žalioji paprika', 'raudonieji svogūnai', 'pomidorai', 'mocarelos sūris', 'picų padažas',] }
];
const s = 'snacks';
const snacksData = [
    { title: '4 Brusketa su pomidorais, 25 cm', photo: `../img/products/${s}_brusketa.jpg`, price: 5.50, ingredients: ['Brusketa su pomidorais, česnako padažo ir mocarela'] },
    { title: 'Vištienos kepsneliai, 7 vnt.', photo: `../img/products/${s}_kepsneliai.jpg`, price: 2.75, ingredients: ['Krosnyje kepti vištienos gabaliukai'] },
    { title: 'Kukurūzai, 2 vnt.', photo: `../img/products/${s}_kukuruzai.jpg`, price: 4.00, ingredients: ['Dvi sultingos saldžios kukurūzų burbuolės, pateikiamos su sviestu ir druska'] },
    { title: 'Cezario salotos', photo: `../img/products/${s}_salotos.jpg`, price: 3.50, ingredients: ['vištiena, vynoginia pomidorai, gūžinės salotos Iceberg, skrebučiai, parmezano sūris, bazilikai ir cezario padažas'] },
    { title: 'Aštrūs vištienos sparneliai Buffalo, 7 vnt.', photo: `../img/products/${s}_sparneliai.jpg`, price: 4.50, ingredients: ['Skanūs vištienos sparneliai'] },
    { title: 'Traškučiai BON CHANCE, su sūriu ir česnaku, 120g', photo: `../img/products/${s}_traskuciai.jpeg`, price: 1.50, ingredients: [''] },
    { title: 'Bulvytės 300g', photo: `../img/products/${s}_bulvytes.jpeg`, price: 2.50, ingredients: ['Bulvytės 300 g.'] },
    { title: 'Bandelės su pepperoni, 16 vnt.', photo: `../img/products/${s}_bandeles.jpeg`, price: 4.00, ingredients: ['Bandelės su sūriu'] }
];
const d = 'dessert';
const dessertData = [
    { title: 'Bandelės su bruknėmis, 16 vnt.', photo: `../img/products/${d}_bandeles.jpeg`, price: 3.00, ingredients: ['Bandelės su bruknėmis'] },
    { title: 'Ledai Ben & Jerrys Netflix & Chilld, 465 ml', photo: `../img/products/${d}_ledai.jpeg`, price: 6.95, ingredients: ['Žemės riešutų skonio ledai pagardinti traškių sūrių krekerių įdaru su tobulaisiais Greyston šokoladinio brownie gabalėliais.'] },
    { title: 'Šviesus mufinas su šokolado lašais', photo: `../img/products/${d}_mufinas.jpg`, price: 1.50, ingredients: ['Nuostabaus skonio keksiukas su šokolado lašais - idealus pasirinkimas tiek studentui, tiek prezidentui!'] },
    { title: 'Braškinė spurga', photo: `../img/products/${d}_spurga.jpeg`, price: 1.50, ingredients: [''] }
];
const r = 'drinks';
const drinksData = [
    { title: 'Coca-Cola', photo: `../img/products/${r}_coca.jpg`, price: 2.50, ingredients: ['0,5 l'] },
    { title: 'Fanta', photo: `../img/products/${r}_fanta.jpg`, price: 1.50, ingredients: ['0,5 l'] },
    { title: 'Sprite', photo: `../img/products/${r}_sprite.jpg`, price: 1.50, ingredients: ['0,5 l'] },
    { title: 'Pienas MARGĖ, 3,2%, UAT', photo: `../img/products/${r}_pienas.jpeg`, price: 1.20, ingredients: ['3,2% riebumo pienas, 1 L Apdorotas ultraaukšta temperatūra (UAT), 1 l'] },
    { title: 'Vasaros uogų sulčių gėrimas FRUTTO', photo: `../img/products/${r}_frutto.png`, price: 1.30, ingredients: ['0,5 l'] },
    { title: 'Įvairių vaisių gėrimas CIDO', photo: `../img/products/${r}_cido.png`, price: 0.60, ingredients: ['0,2 l'] },
    { title: 'Nealkoholinis kvietinis BALTAS alus', photo: `../img/products/${r}_alus.jpg`, price: 2.00, ingredients: ['Nealkoholinis kvietinis BALTAS alus, 0,5 l'] },
    { title: 'Nealkoholinis kokteilis RADLER', photo: `../img/products/${r}_radler.jpg`, price: 2.00, ingredients: ['0,5 l'] }
];
const otherData = [
    { title: 'DODO kuponas didelei picai', photo: `../img/products/other_kuponas.png`, price: 12.95, ingredients: ['DODO kuponas didelei picai. Galioja pristatant į namus ir picerĳoje'] }
];

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
        product.setAttribute('id', 'pizza');
        h6.setAttribute('class', 'mediumText');
        div.setAttribute('class', 'productFooter');
        price.setAttribute('class', 'mediumText');
        price.setAttribute('class', 'price');
        button.setAttribute('class', 'buttonShape');

        img.src = data[i].photo;
        h6.innerText = data[i].title;
        price.innerText = `nuo ${data[i].price} €`;
        button.innerHTML = 'Pasirinkti';
        // a.href = data[i].photo;
        for (let j = 0; j < data[i].ingredients.length; j++) {
            if (j == 0) {
                first = data[i].ingredients[j].charAt(0).toUpperCase() + data[i].ingredients[j].slice(1)
                p.innerText += ` ${first},`;
            }
            else if (j == data[i].ingredients.length - 1) {
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

function generateSnacks(data) {
    const list = document.querySelector('.snacksList');
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
        p.innerText += ` ${data[i].ingredients[0]}.`;
        // a.href = data[i].photo;

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

function generateDessert(data) {
    const list = document.querySelector('.dessertList');
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
        p.innerText += ` ${data[i].ingredients[0]}.`;
        // a.href = data[i].photo;

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

function generateDrinks(data) {
    const list = document.querySelector('.drinksList');
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
        p.innerText += ` ${data[i].ingredients[0]}.`;
        // a.href = data[i].photo;

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
function generateOther(data) {
    const list = document.querySelector('.otherList');
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
        p.innerText += ` ${data[i].ingredients[0]}.`;
        // a.href = data[i].photo;

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
generateSnacks(snacksData);
generatePizza(pizzaData);
generateDessert(dessertData);
generateDrinks(drinksData);
generateOther(otherData);
