//////////////////////// 
// left slides
var left = document.getElementById("left");
var img = left.getElementsByTagName('img');
for (var y = 0; y < img.length; y++) {
    img[y].classList.add("slide", "Nfade", "hidden");
}

var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 8000);
} 

// right slides
var right = document.getElementById("right");
var img = right.getElementsByTagName('img');
for (var y = 0; y < img.length; y++) {
    img[y].classList.add("slideR", "Nfade", "hidden");
}

var slideIndexR = 0;
showSlidesR();
function showSlidesR() {
    var i;
    var slidesR = document.getElementsByClassName("slideR");
    var dotsR = document.getElementsByClassName("dotR");
    for (i = 0; i < slidesR.length; i++) {
        slidesR[i].style.display = "none";
    }
    slideIndexR++;

    if (slideIndexR > slidesR.length) { slideIndexR = 1 }
    for (i = 0; i < dotsR.length; i++) {
        dotsR[i].className = dotsR[i].className.replace(" active", "");
    }
    slidesR[slideIndexR - 1].style.display = "block";
    dotsR[slideIndexR - 1].className += " active";
    setTimeout(showSlidesR, 8000);
} 