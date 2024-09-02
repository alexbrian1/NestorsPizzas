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

///Sweet Alert
function mostrarEncuesta() {
  Swal.fire({
    title: '¿Cuál es tu hamburguesa favorita?',
    input: 'select',
    inputOptions: {
      'hamburguesa1': 'Hamburguesa La Bomba',
      'hamburguesa2': 'Hamburguesa Onion Grilled BCB',
      'hamburguesa3': 'Hamburguesa Cheeseburguer',
      'hamburguesa4': 'Hamburguesa Bacon Cheeseburguer',
      'hamburguesa5': 'Hamburguesa Chicken Burguer de Pollo',
      'hamburguesa6': 'Hamburguesa Tradicional',
      'hamburguesa7': 'Hamburguesa Cuarto de Libra',
      'hamburguesa8': 'Hamburguesa Signature',
      'hamburguesa9': 'Hamburguesa The Bigness',
      'hamburguesa10': 'Hamburguesa Onion Crispy Alioli',
      'hamburguesa11': 'Hamburguesa Onion Rings'
    },
    inputPlaceholder: 'Selecciona una hamburguesa',
    background: '#111',
    color: '#fff',
    confirmButtonColor: '#ff9f0d',
    confirmButtonText: 'Enviar',
    customClass: {
      popup: 'swal-popup',
      title: 'swal-title',
      confirmButton: 'swal-confirm-button',
      content: 'swal-text',
      input: 'swal-input'
    },
    showCancelButton: false
  }).then((result) => {
    if (result.isConfirmed) {
      let contadores = JSON.parse(localStorage.getItem('contadores')) || {
        hamburguesa1: 0,
        hamburguesa2: 0,
        hamburguesa3: 0,
        hamburguesa4: 0,
        hamburguesa5: 0,
        hamburguesa6: 0,
        hamburguesa7: 0,
        hamburguesa8: 0,
        hamburguesa9: 0,
        hamburguesa10: 0,
        hamburguesa11: 0
      };
      contadores[result.value]++;
      localStorage.setItem('contadores', JSON.stringify(contadores));

      // Incrementar el contador de encuestas completadas
      let totalEncuestasCompletadas = parseInt(localStorage.getItem('totalEncuestasCompletadas')) || 0;
      totalEncuestasCompletadas++;
      localStorage.setItem('totalEncuestasCompletadas', totalEncuestasCompletadas);

      let contadorCupon = parseInt(localStorage.getItem('contadorCupon')) || 1;
      let codigoCupon = `CHEDDAR${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${contadorCupon}`;
      contadorCupon++;
      localStorage.setItem('contadorCupon', contadorCupon);

      Swal.fire({
        title: '¡Gracias por completar la encuesta!',
        html: `
          <div class="swal-content-container">
            <span id="codigoCupon">${codigoCupon}</span>
            <button id="copiarCupon" class="swal2-copiar-btn">
              <i class="fas fa-copy"></i>
              Copiar
            </button>
          </div>
        `,
        icon: 'success',
        background: '#111',
        color: '#fff',
        iconColor: '#ff9f0d',
        confirmButtonColor: '#ff9f0d',
        confirmButtonText: 'Ir a canjear cupón',
        customClass: {
          popup: 'swal-popup',
          title: 'swal-title',
          confirmButton: 'swal-confirm-button',
          content: 'swal-text',
          htmlContainer: 'swal-html-container'
        },
        showCancelButton: false
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirige a la URL deseada en una nueva pestaña
          window.open(`https://api.whatsapp.com/send?phone=5491122648048&text=Hola%20quiero%20pedir%20una%20hamburguesa!%20El%20código%20de%20mi%20cupón%20para%20cheddar%20gratis%20es%20${codigoCupon}`, '_blank');
        }
      });

      // Asegúrate de agregar el evento al botón de copiar después de que SweetAlert2 lo haya insertado en el DOM
      setTimeout(() => {
        const copiarBtn = Swal.getHtmlContainer().querySelector('#copiarCupon');
        copiarBtn.addEventListener('click', () => {
          copiarAlPortapapeles(codigoCupon);
        });
      }, 100); // Espera un poco para asegurar que el DOM esté listo

      localStorage.setItem('encuestaCompletada', 'true'); // Marca la encuesta como completada

      mostrarResultados(); // Actualizar resultados después de la encuesta
    }
  });
}

// Función para copiar el código del cupón al portapapeles
function copiarAlPortapapeles(texto) {
  const textarea = document.createElement('textarea');
  textarea.value = texto;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  Swal.fire({
    icon: 'success',
    title: 'Código copiado',
    html: `
      <div class="swal-content-container">
        <span id="codigoCupon">${texto}</span>
      </div>
    `,
    background: '#111',
    color: '#fff',
    iconColor: '#ff9f0d',
    confirmButtonColor: '#ff9f0d',
    confirmButtonText: 'Ir a canjear cupón',
    customClass: {
      popup: 'swal-popup',
      title: 'swal-title',
      confirmButton: 'swal-confirm-button',
      content: 'swal-text',
      htmlContainer: 'swal-html-container'
    },
    showCancelButton: false
  }).then((result) => {
    if (result.isConfirmed) {
      // Redirige a la URL deseada en una nueva pestaña
      window.open(`https://api.whatsapp.com/send?phone=5491122648048&text=Hola%20quiero%20pedir%20una%20hamburguesa!%20El%20código%20de%20mi%20cupón%20es%20`, '_blank');
    }
  });
}

function mostrarResultados() {
  let contadores = JSON.parse(localStorage.getItem('contadores')) || {
    hamburguesa1: 0,
    hamburguesa2: 0,
    hamburguesa3: 0,
    hamburguesa4: 0,
    hamburguesa5: 0,
    hamburguesa6: 0,
    hamburguesa7: 0,
    hamburguesa8: 0,
    hamburguesa9: 0,
    hamburguesa10: 0,
    hamburguesa11: 0
  };

  console.log("Resultados de la Encuesta:");
  console.log(`Hamburguesa La Bomba: ${contadores.hamburguesa1}`);
  console.log(`Hamburguesa Onion Grilled BCB: ${contadores.hamburguesa2}`);
  console.log(`Hamburguesa Cheeseburguer: ${contadores.hamburguesa3}`);
  console.log(`Hamburguesa Bacon Cheeseburguer: ${contadores.hamburguesa4}`);
  console.log(`Hamburguesa Chicken Burguer de Pollo: ${contadores.hamburguesa5}`);
  console.log(`Hamburguesa Tradicional: ${contadores.hamburguesa6}`);
  console.log(`Hamburguesa Cuarto de Libra: ${contadores.hamburguesa7}`);
  console.log(`Hamburguesa Signature: ${contadores.hamburguesa8}`);
  console.log(`Hamburguesa The Bigness: ${contadores.hamburguesa9}`);
  console.log(`Hamburguesa Onion Crispy Alioli: ${contadores.hamburguesa10}`);
  console.log(`Hamburguesa Onion Rings: ${contadores.hamburguesa11}`);
}

//Verificar si el usuario ya completó la encuesta
// if (!localStorage.getItem('encuestaCompletada')) {
//   mostrarEncuesta();
// } else {
//   console.log("El usuario ya completó la encuesta.");
// }
mostrarEncuesta();










