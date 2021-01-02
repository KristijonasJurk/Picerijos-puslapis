const photos = [
    { photo: "./img/slide1.jpeg" },
    { photo: "./img/slide2.jpeg" },
    { photo: "./img/slide3.jpeg" },
    { photo: "./img/slide4.jpeg" },
    { photo: "./img/slide5.jpeg" },
    { photo: "./img/slide6.jpeg" }
];

function generateSlide(data) {
    const slide = document.querySelector('.slide');
    for (let i = 0; i < data.length; i++) {
        const div = document.createElement('div');
        const img = document.createElement('img');
        div.setAttribute('class', 'slidePhoto');
        img.src = data[i].photo;
        div.appendChild(img);
        slide.appendChild(div);
    }
}
generateSlide(photos)

// left and right slide buttons
const slides1 = document.querySelectorAll('.slidePhoto');
const left1 = document.querySelector('.fa-angle-left');
const right1 = document.querySelector('.fa-angle-right');
let index = 1;

function plusSlides1(n) {
    showSlides(index += n);
}

function showSlides(n) {
    if (n > slides1.length) {
        index = 1;
    }
    if (n < 1) {
        index = slides1.length;
    }
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }
    slides1[index - 1].style.display = "block";
}

// automatic slide
var myIndex = 0;
carousel();
function carousel() {
    var i;
    // var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > slides1.length) { myIndex = 1 }
    slides1[myIndex - 1].style.display = "block";
    setTimeout(carousel, 6000); // Change image every 6 seconds
}

// slide buttons at the bottom
function slide1() {
    let totalItems = slides1.length;
    for (let i = 0; i < totalItems; i++) {
        document.querySelector('.slide1nav').innerHTML += `<i class="fa fa-circle" aria-hidden="true"></i>`;
    }
    for (let i = 0; i < totalItems; i++) {
        document.querySelectorAll('.slide1nav .fa-circle')[i].addEventListener('click', function () {
            for (let j = 0; i < totalItems; j++) {
                slides1[j].style.display = "none";
                slides1[i].style.display = "block";
            }
        });
    }
}
slide1();