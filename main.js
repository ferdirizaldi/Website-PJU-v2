var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");

function plusSlides(n) {
    
    slideIndex--;
    checkIndex(slideIndex);
    slideIndex += n;
    if (slideIndex > slides.length) { 
        slideIndex = 1 }
    else if (slideIndex < 1) { slideIndex = slides.length }
    clearTimeout(setTime);
    showSlides();
}

function currentSlide(n) {
    slideIndex = n;
    clearTimeout(setTime);
    showSlides();
}

function showSlides() {
    var i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTime = setTimeout(showSlides, 3000);
    slideIndex++;
    checkIndex(slideIndex);
}

function checkIndex(n) {
    if (n > slides.length) { slideIndex = 1 }
    else if (n < 1) { slideIndex = slides.length }
}

//dropdown
const dropdown = document.querySelector(".dropdown");
const navMenu = document.querySelector(".menu");

dropdown.addEventListener("click", () => {
    dropdown.classList.toggle("active");
    navMenu.classList.toggle("active");
    console.log("dropdown click");
})

document.querySelectorAll(".nav-link").forEach(n=> n.addEventListener("click",() =>{
    dropdown.classList.remove("active");
    navMenu.classList.remove("active");
}))