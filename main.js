// slider functionlity
let images = [
    "hero-1.jpg",
    "hero-2.jpg"
];

let index = 0;

let slide = document.getElementById("slide");
let timer;

function changeImages(){
    index = (index + 1 ) % images.length;
    slide.src = images[index];
}

//next button
document.getElementById("next").addEventListener("click", function(){
    index = (index + 1) % images.length;
    slide.src = images[index];
});

//Previous button
document.getElementById("prev").addEventListener("click", function(){
    index = (index -1 + images.length) % images.length;
    slide.src = images[index];
});

timer = setInterval(changeImages,20000);


/////humburger functionlaity //
let humburger = document.querySelector(".humburger");
let open = document.querySelector(".fa-bars");
let close = document.querySelector(".fa-xmark");
let navLinks = document.querySelector(".nav-links");
let navItems =document.querySelectorAll(".nav-links a");

open.addEventListener("click", function(){
    open.style.display="none";
    close.style.display="block";

    navLinks.classList.add("open");
});

close.addEventListener("click",function(){
    open.style.display="block";
    close.style.display="none";

    navLinks.classList.remove("open");
});

navItems.forEach(function(links){
    links.addEventListener("click",function(){
        navLinks.classList.remove("open");
        close.style.display="none";
        open.style.display="block";
    });
});

//lightbox funcanlity
let galleryImages = document.querySelectorAll(".galleryImg img");
let lightbox = document.querySelector("#lightbox");
let lightboxImg = document.querySelector("#lightboxImg");
let closeLightBox = document.querySelector("#closeLightbox");

//open Image 
galleryImages.forEach((img)=>{
    img.addEventListener("click", ()=>{
        lightbox.classList.add("active");
        lightboxImg.src = img.src;
    });
});

//close image
closeLightBox.addEventListener("click", ()=>{
    lightbox.classList.remove("active");
})


let track = document.querySelector(".slider-track");
let cardIndex = 0;

setInterval(function () {

    cardIndex++;

    if (cardIndex > 3) {
        cardIndex = 0;
    }

    track.style.transform = `translateX(-${cardIndex * 390}px)`;

}, 10000);

//touch screen funcationlity
let tracks = document.querySelector(".slider-track");
let slider = document.querySelector(".sideslider");

let startX = 0;
let position = 0;

slider.addEventListener("touchstart", function(e) {
    startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", function(e) {

    let endX = e.changedTouches[0].clientX;
    let difference = startX - endX;

    let card = tracks.querySelector(".slidecard");
    let gap = parseFloat(getComputedStyle(tracks).gap);
    let move = card.offsetWidth + gap;
    let center = (slider.clientWidth - card.offsetWidth) / 2;

    let maxMove = tracks.scrollWidth - slider.clientWidth;

    if (difference > 50) {
        position += move;
    } 
    else if (difference < -50) {
        position -= move;
    }

    position = Math.max(0, Math.min(position, maxMove));

    tracks.style.transform = `translateX(${center - position}px)`;

});