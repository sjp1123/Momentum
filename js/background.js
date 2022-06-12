const images = [
    "pexels-bich-tran-669996.jpg",
    "pexels-daniel-absi-952670.jpg",
    "pexels-felix-mittermeier-956999.jpg",
    "pexels-fwstudio-131634.jpg",
    "pexels-pixabay-235985.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.id = 'background';

document.body.appendChild(bgImage);