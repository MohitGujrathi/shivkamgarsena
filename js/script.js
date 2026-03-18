const images = [
    "images/banner_01.jpg",
    "images/banner_02.jpg",
    "images/banner_03.jpg",
    
];

let i = 0;

setInterval(() => {
    document.querySelector(".banner").style.backgroundImage =
        `url(${images[i]})`;

    i = (i + 1) % images.length;
}, 3000);