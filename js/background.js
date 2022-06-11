const images = [
    "pexels-bich-tran-669996.jpg",
    "pexels-daniel-absi-952670.jpg",
    "pexels-felix-mittermeier-956999.jpg",
    "pexels-fwstudio-131634.jpg",
    "pexels-jess-bailey-designs-743986.jpg",
    "pexels-johannes-plenio-1103970.jpg",
    "pexels-miguel-á-padriñán-19670.jpg",
    "pexels-miguel-á-padriñán-255379.jpg",
    "pexels-pixabay-235985.jpg",
    "pexels-pixabay-531880.jpg",
    "pexels-s-migaj-747964.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);