let images = [
    "https://cdn.iconscout.com/icon/free/png-256/free-java-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-language-pack-logos-icons-1174953.png?f=webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToF9gN0XaxCY_XNRD-5Upp8JdposFRI8CGhqFxvxP-0cLvh8B47KPq3eU&s",
    "https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=1920%2C1920&ssl=1"
];

let currentIndex = 0;
let slider = document.getElementById("slider");

function updateImage() {
    slider.src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}


updateImage();