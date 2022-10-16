let slides = document.getElementsByClassName("slider-slide"); // returns all slider-slade as an array
let navlinks = document.getElementsByClassName("slider__navlink"); // returns all slider__navlink as an array

let currentSlide = 0; // pageload defaults to first slide which is position 0


// event listeners
document.getElementById("nav-button--next").addEventListener("click", () => {
    changeSlide(currentSlide + 1)
});
document.getElementById("nav-button--prev").addEventListener("click", () => {
    changeSlide(currentSlide - 1)
});

// change slide
function changeSlide(moveTo) {
    if (moveTo >= slides.length) { moveTo = 0; }
    if (moveTo < 0) { moveTo = slides.length - 1; }

    //toggle active class
    slides[currentSlide].classList.toggle("active");
    navlinks[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("active");

    currentSlide = moveTo;
}

//iterate through card positions on breadcrumbs to allow click switching
document.querySelectorAll('.slider__navlink').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlide !== bulletIndex) {
            changeSlide(bulletIndex);
        }
    })
})

