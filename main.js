const header = document.querySelector("header");

window.addEventListener("scroll",()=>{
    header.classList.toggle("sticky", this.window.scrollY > 80);
});


///// OPEN MENU


let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");



menu.onclick = () =>{
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
  navlist.innerHTML = `
                  <li><a href="#home" class="active">Inico</a></li>
                  <li><a href="#pedidos">Pedidos</a></li>
                  <li><a href="#about">Novedad</a></li>
                  <li><a href="#shop">Menú</a></li>
                  <li><a href="#galeria">Galeria</a></li>
                  <li><a href="#contact">Contacto</a></li>`;

}


window.onscroll = ()=>{
    menu.classList.remove("bx-x")
    navlist.classList.remove("open")
}


///SCROLLReveal y Preloader
// variables
const container_preloader = document.querySelector(".container_web_loader");

// evento de carga de toda la página
window.addEventListener("load",function(){
        // ocultamos el preloader
        container_preloader.classList.add("loader-hidden");
        setTimeout(() => {
            this.document.body.setAttribute("style","overflow: visible;");
            animaciones();
        }, 0);
});

function animaciones() {
    let items_header = {
      delay: 300,
      interval: 250,
      distance: '10px',
      origin: 'top'
  }
  let logo = {
      delay: 50,
      duration: 2000,
      distance: '10px',
      origin: 'top'
  }

// 1. Creamos un objeto scrollReveal
const sr = ScrollReveal({
  origin: "top",
  distance: "85px",
  duration: 2000,
  reset: false
});
sr.reveal(".item_menu", items_header);
sr.reveal(".logo", logo);
sr.reveal(".nav-icons", logo);
sr.reveal(".scroll", logo);
sr.reveal(".home-text",{delay:1500});
sr.reveal(".home-img",{delay:400});
sr.reveal(".container",{delay:400});
sr.reveal(".about-img",{});
sr.reveal(".about-text",{delay:400});
sr.reveal(".middle-text",{});
sr.reveal(".row-btn, .shop-content",{delay:300});
sr.reveal("#galeria",{delay:300});
sr.reveal(".reviews, .review-content",{});
sr.reveal(".row-btnReduce",{});
sr.reveal("#contact",{delay:450});
sr.reveal("#footer",{delay:550});

}



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

  // Inicializar contadores para cada hamburguesa
  let contadores = JSON.parse(localStorage.getItem('contadores')) || {
    hamburguesa1: 0,
    hamburguesa2: 0,
    hamburguesa3: 0,
    hamburguesa4: 0,
    hamburguesa5: 0,
    hamburguesa6: 0,
    hamburguesa7: 0
  };

  // Inicializar contador de cupones
  let contadorCupon = parseInt(localStorage.getItem('contadorCupon')) || 1;

  // Función para mostrar la encuesta
  function mostrarEncuesta() {
    Swal.fire({
      title: '¿Cuál es tu hamburguesa favorita?',
      input: 'select',
      inputOptions: {
        hamburguesa1: 'Hamburguesa Clásica',
        hamburguesa2: 'Hamburguesa BBQ',
        hamburguesa3: 'Hamburguesa con Queso',
        hamburguesa4: 'Hamburguesa Vegetariana',
        hamburguesa5: 'Hamburguesa de Pollo',
        hamburguesa6: 'Hamburguesa Picante',
        hamburguesa7: 'Hamburguesa de Pescado'
      },
      inputPlaceholder: 'Selecciona una hamburguesa',
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Incrementar el contador de la hamburguesa seleccionada
        contadores[result.value]++;
        // Guardar los contadores actualizados en localStorage
        localStorage.setItem('contadores', JSON.stringify(contadores));

        // Generar el código de cupón
        let codigoCupon = `CHEDAR${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${contadorCupon}`;
        contadorCupon++;
        // Guardar el nuevo contador de cupones en localStorage
        localStorage.setItem('contadorCupon', contadorCupon);

        // Mostrar la alerta de agradecimiento con el código de cupón
        Swal.fire({
          title: '¡Gracias por completar la encuesta!',
          text: `Te regalamos un cupón: ${codigoCupon}`,
          icon: 'success'
        });
      }
    });
  }

  // Llamar a la función para mostrar la encuesta
  mostrarEncuesta();

