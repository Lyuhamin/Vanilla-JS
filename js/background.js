const images = [
    "밤바다.png",
    "해변1.png",
    "해변2.png",
];

const choosenImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${choosenImages}`;

document.body.appendChild(bgImage);