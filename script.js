let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".mySlides");
    const dots = document.querySelectorAll(".dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

showSlides(); // Initial call to start the slideshow


/*gfgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg*/


document.addEventListener('DOMContentLoaded', function () {
    const backgroundElement = document.querySelector('.backgroundd');
    const images = [
        './imagess/ADSS-Standard log.jpg',
        './imagess/arial.png',
        './imagess/blue-speed-light-with-glowing-lines-background_1409-1132.avif',
        './imagess/32070-hybrid-cables-image-1-png.png'
    ];
    let currentImageIndex = 0;

    function changeBackground() {
        backgroundElement.style.backgroundImage = `url('${images[currentImageIndex]}')`;
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    // Change background every 6 seconds
    setInterval(changeBackground, 40000);
});