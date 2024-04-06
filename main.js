const header = document.querySelector("header");

window.addEventListener("scroll",()=>{
    header.classList.toggle("sticky", this.window.scrollY > 80);
});


///// OPEN MENU


// let menu = document.querySelector("#menu-icon");
// let navlist = document.querySelector(".navlist");

// menu.onclick = () =>{
//     menu.classList.toggle("bx-x");
//     navlist.classList.toggle("open");

// }

/// solucion

window.onscroll = ()=>{
    menu.classList.remove("bx-x")
    navlist.classList.remove("open")
}


///SCROLLReveal

const sr = ScrollReveal({
    origin: "top",
    distance: "85px",
    duration: 2500,
    reset: false
});


sr.reveal(".home-text",{delay:300});
sr.reveal(".home-img",{delay:400});

sr.reveal(".container",{delay:400});

sr.reveal(".about-img",{});
sr.reveal(".about-text",{delay:400});

sr.reveal(".middle-text",{});
sr.reveal(".row-btn, .shop-content",{delay:300});

sr.reveal(".review, .contact",{delay:300});


//Galeria
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
  
    images.forEach(image => {
      image.addEventListener('click', function() {
        lightbox.style.display = 'block';
        lightboxImage.src = this.src;
      });
    });
  
    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', function() {
      lightbox.style.display = 'none';
    });
  });
//Galeria
