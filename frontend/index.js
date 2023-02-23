const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let slidePosition = 0;
const slides = slider.querySelectorAll("img");
const totalSlides = slides.length;

prevButton.addEventListener("click", () => {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    updateSlidePosition();
});

nextButton.addEventListener("click", () => {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePosition();
});

function updateSlidePosition() {
    slider.style.transform = `translateX(-${slidePosition * slides[0].clientWidth}px)`;
}

