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


///////////////////////////////////////
// function mostrarEncuesta() {
//   Swal.fire({
//     title: '¿Cuál es tu hamburguesa favorita?',
//     input: 'select',
//     inputOptions: {
//       'hamburguesa1': 'Hamburguesa Clásica',
//       'hamburguesa2': 'Hamburguesa BBQ',
//       'hamburguesa3': 'Hamburguesa con Queso',
//       'hamburguesa4': 'Hamburguesa Vegetariana',
//       'hamburguesa5': 'Hamburguesa de Pollo',
//       'hamburguesa6': 'Hamburguesa Picante',
//       'hamburguesa7': 'Hamburguesa de Pescado'
//     },
//     inputPlaceholder: 'Selecciona una hamburguesa',
//     background: '#111',
//     color: '#fff',
//     confirmButtonColor: '#ff9f0d',
//     confirmButtonText: 'Enviar',
//     customClass: {
//       popup: 'swal-popup',
//       title: 'swal-title',
//       confirmButton: 'swal-confirm-button',
//       content: 'swal-text',
//       input: 'swal-input'
//     },
//     showCancelButton: false
//   }).then((result) => {
//     if (result.isConfirmed) {
//       let contadores = JSON.parse(localStorage.getItem('contadores')) || {
//         hamburguesa1: 0,
//         hamburguesa2: 0,
//         hamburguesa3: 0,
//         hamburguesa4: 0,
//         hamburguesa5: 0,
//         hamburguesa6: 0,
//         hamburguesa7: 0
//       };
//       contadores[result.value]++;
//       localStorage.setItem('contadores', JSON.stringify(contadores));

//       let contadorCupon = parseInt(localStorage.getItem('contadorCupon')) || 1;
//       let codigoCupon = `CUPON${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${contadorCupon}`;
//       contadorCupon++;
//       localStorage.setItem('contadorCupon', contadorCupon);

//       Swal.fire({
//         title: '¡Gracias por completar la encuesta!',
//         html: `
//           <div class="swal-content-container">
//             <span id="codigoCupon">${codigoCupon}</span>
//             <button id="copiarCupon" class="swal2-copiar-btn">
//               <i class="fas fa-copy"></i>
//               Copiar
//             </button>
//           </div>
//         `,
//         icon: 'success',
//         background: '#111',
//         color: '#fff',
//         iconColor: '#ff9f0d',
//         confirmButtonColor: '#ff9f0d',
//         confirmButtonText: 'Canjear Cupón',
//         customClass: {
//           popup: 'swal-popup',
//           title: 'swal-title',
//           confirmButton: 'swal-confirm-button',
//           content: 'swal-text',
//           htmlContainer: 'swal-html-container'
//         },
//         showCancelButton: false
//       }).then((result) => {
//         // No se realiza ninguna acción aquí para evitar que se cierre la alerta
//       });

//       // Asegúrate de agregar el evento al botón de copiar después de que SweetAlert2 lo haya insertado en el DOM
//       setTimeout(() => {
//         const copiarBtn = Swal.getHtmlContainer().querySelector('#copiarCupon');
//         copiarBtn.addEventListener('click', () => {
//           copiarAlPortapapeles(codigoCupon);
//         });
//       }, 100); // Espera un poco para asegurar que el DOM esté listo

//       localStorage.setItem('encuestaCompletada', 'true'); // Marca la encuesta como completada

//       mostrarResultados(); // Actualizar resultados después de la encuesta
//     }
//   });
// }

// // Función para copiar el código del cupón al portapapeles
// function copiarAlPortapapeles(texto) {
//   const textarea = document.createElement('textarea');
//   textarea.value = texto;
//   document.body.appendChild(textarea);
//   textarea.select();
//   document.execCommand('copy');
//   document.body.removeChild(textarea);

//   Swal.fire({
//     icon: 'success',
//     title: 'Código copiado',
//     text: 'El código del cupón ha sido copiado al portapapeles.',
//     background: '#111',
//     color: '#fff',
//     confirmButtonColor: '#ff9f0d',
//   });
// }

// function mostrarResultados() {
//   let contadores = JSON.parse(localStorage.getItem('contadores')) || {
//     hamburguesa1: 0,
//     hamburguesa2: 0,
//     hamburguesa3: 0,
//     hamburguesa4: 0,
//     hamburguesa5: 0,
//     hamburguesa6: 0,
//     hamburguesa7: 0
//   };

//   console.log("Resultados de la Encuesta:");
//   console.log(`Hamburguesa Clásica: ${contadores.hamburguesa1}`);
//   console.log(`Hamburguesa BBQ: ${contadores.hamburguesa2}`);
//   console.log(`Hamburguesa con Queso: ${contadores.hamburguesa3}`);
//   console.log(`Hamburguesa Vegetariana: ${contadores.hamburguesa4}`);
//   console.log(`Hamburguesa de Pollo: ${contadores.hamburguesa5}`);
//   console.log(`Hamburguesa Picante: ${contadores.hamburguesa6}`);
//   console.log(`Hamburguesa de Pescado: ${contadores.hamburguesa7}`);
// }

// // Verificar si el usuario ya completó la encuesta
// // if (!localStorage.getItem('encuestaCompletada')) {
// //   mostrarEncuesta();
// // } else {
// //   console.log("El usuario ya completó la encuesta.");
// // }

// mostrarEncuesta();

//////////////////

// function mostrarEncuesta() {
//   Swal.fire({
//     title: '¿Cuál es tu hamburguesa favorita?',
//     input: 'select',
//     inputOptions: {
//       'hamburguesa1': 'Hamburguesa Clásica',
//       'hamburguesa2': 'Hamburguesa BBQ',
//       'hamburguesa3': 'Hamburguesa con Queso',
//       'hamburguesa4': 'Hamburguesa Vegetariana',
//       'hamburguesa5': 'Hamburguesa de Pollo',
//       'hamburguesa6': 'Hamburguesa Picante',
//       'hamburguesa7': 'Hamburguesa de Pescado'
//     },
//     inputPlaceholder: 'Selecciona una hamburguesa',
//     background: '#111',
//     color: '#fff',
//     confirmButtonColor: '#ff9f0d',
//     confirmButtonText: 'Enviar',
//     customClass: {
//       popup: 'swal-popup',
//       title: 'swal-title',
//       confirmButton: 'swal-confirm-button',
//       content: 'swal-text',
//       input: 'swal-input'
//     },
//     showCancelButton: false
//   }).then((result) => {
//     if (result.isConfirmed) {
//       let contadores = JSON.parse(localStorage.getItem('contadores')) || {
//         hamburguesa1: 0,
//         hamburguesa2: 0,
//         hamburguesa3: 0,
//         hamburguesa4: 0,
//         hamburguesa5: 0,
//         hamburguesa6: 0,
//         hamburguesa7: 0
//       };
//       contadores[result.value]++;
//       localStorage.setItem('contadores', JSON.stringify(contadores));

//       let contadorCupon = parseInt(localStorage.getItem('contadorCupon')) || 1;
//       let codigoCupon = `CUPON${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${contadorCupon}`;
//       contadorCupon++;
//       localStorage.setItem('contadorCupon', contadorCupon);

//       Swal.fire({
//         title: '¡Gracias por completar la encuesta!',
//         html: `
//           <div class="swal-content-container">
//             <span id="codigoCupon">${codigoCupon}</span>
//             <button id="copiarCupon" class="swal2-copiar-btn">
//               <i class="fas fa-copy"></i>
//               Copiar
//             </button>
//           </div>
//         `,
//         icon: 'success',
//         background: '#111',
//         color: '#fff',
//         iconColor: '#ff9f0d',
//         confirmButtonColor: '#ff9f0d',
//         confirmButtonText: 'Canjear Cupón',
//         customClass: {
//           popup: 'swal-popup',
//           title: 'swal-title',
//           confirmButton: 'swal-confirm-button',
//           content: 'swal-text',
//           htmlContainer: 'swal-html-container'
//         },
//         showCancelButton: false
//       }).then((result) => {
//         if (result.isConfirmed) {
//           // Redirige a la URL deseada
//           window.location.href = 'https://api.whatsapp.com/send?phone=5491122648048&text=Hola ya complete la encuesta mi cupon es ' + {codigoCupon} + 'Quiero Hacer mi Pedido!';
//         }
//       });

//       // Asegúrate de agregar el evento al botón de copiar después de que SweetAlert2 lo haya insertado en el DOM
//       setTimeout(() => {
//         const copiarBtn = Swal.getHtmlContainer().querySelector('#copiarCupon');
//         copiarBtn.addEventListener('click', () => {
//           copiarAlPortapapeles(codigoCupon);
//         });
//       }, 100); // Espera un poco para asegurar que el DOM esté listo

//       localStorage.setItem('encuestaCompletada', 'true'); // Marca la encuesta como completada

//       mostrarResultados(); // Actualizar resultados después de la encuesta
//     }
//   });
// }

// // Función para copiar el código del cupón al portapapeles
// function copiarAlPortapapeles(texto) {
//   const textarea = document.createElement('textarea');
//   textarea.value = texto;
//   document.body.appendChild(textarea);
//   textarea.select();
//   document.execCommand('copy');
//   document.body.removeChild(textarea);

//   Swal.fire({
//     icon: 'success',
//     title: 'Código copiado',
//     text: 'El código del cupón ha sido copiado al portapapeles.',
//     background: '#111',
//     color: '#fff',
//     confirmButtonColor: '#ff9f0d',
//   });
// }

// function mostrarResultados() {
//   let contadores = JSON.parse(localStorage.getItem('contadores')) || {
//     hamburguesa1: 0,
//     hamburguesa2: 0,
//     hamburguesa3: 0,
//     hamburguesa4: 0,
//     hamburguesa5: 0,
//     hamburguesa6: 0,
//     hamburguesa7: 0
//   };

//   console.log("Resultados de la Encuesta:");
//   console.log(`Hamburguesa Clásica: ${contadores.hamburguesa1}`);
//   console.log(`Hamburguesa BBQ: ${contadores.hamburguesa2}`);
//   console.log(`Hamburguesa con Queso: ${contadores.hamburguesa3}`);
//   console.log(`Hamburguesa Vegetariana: ${contadores.hamburguesa4}`);
//   console.log(`Hamburguesa de Pollo: ${contadores.hamburguesa5}`);
//   console.log(`Hamburguesa Picante: ${contadores.hamburguesa6}`);
//   console.log(`Hamburguesa de Pescado: ${contadores.hamburguesa7}`);
// }

// // Verificar si el usuario ya completó la encuesta
// // if (!localStorage.getItem('encuestaCompletada')) {
// //   mostrarEncuesta();
// // } else {
// //   console.log("El usuario ya completó la encuesta.");
// // }


// mostrarEncuesta();

/////////////////////////////////////////


function mostrarEncuesta() {
  Swal.fire({
    title: '¿Cuál es tu hamburguesa favorita?',
    input: 'select',
    inputOptions: {
      'hamburguesa1': 'Hamburguesa Clásica',
      'hamburguesa2': 'Hamburguesa BBQ',
      'hamburguesa3': 'Hamburguesa con Queso',
      'hamburguesa4': 'Hamburguesa Vegetariana',
      'hamburguesa5': 'Hamburguesa de Pollo',
      'hamburguesa6': 'Hamburguesa Picante',
      'hamburguesa7': 'Hamburguesa de Pescado'
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
        hamburguesa7: 0
      };
      contadores[result.value]++;
      localStorage.setItem('contadores', JSON.stringify(contadores));

      let contadorCupon = parseInt(localStorage.getItem('contadorCupon')) || 1;
      let codigoCupon = `CUPON${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${contadorCupon}`;
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
          window.open(`https://api.whatsapp.com/send?phone=5491122648048&text=Hola%20ya%20complete%20la%20encuesta,%20mi%20cupon%20es%20${codigoCupon}%20Quiero%20Hacer%20mi%20Pedido!`, '_blank');
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
      window.open(`https://api.whatsapp.com/send?phone=5491122648048&text=Hola%20ya%20complete%20la%20encuesta,%20mi%20cupon%20es%20${texto}%20Quiero%20Hacer%20mi%20Pedido!`, '_blank');
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
    hamburguesa7: 0
  };

  console.log("Resultados de la Encuesta:");
  console.log(`Hamburguesa Clásica: ${contadores.hamburguesa1}`);
  console.log(`Hamburguesa BBQ: ${contadores.hamburguesa2}`);
  console.log(`Hamburguesa con Queso: ${contadores.hamburguesa3}`);
  console.log(`Hamburguesa Vegetariana: ${contadores.hamburguesa4}`);
  console.log(`Hamburguesa de Pollo: ${contadores.hamburguesa5}`);
  console.log(`Hamburguesa Picante: ${contadores.hamburguesa6}`);
  console.log(`Hamburguesa de Pescado: ${contadores.hamburguesa7}`);
}

// Verificar si el usuario ya completó la encuesta
// if (!localStorage.getItem('encuestaCompletada')) {
//   mostrarEncuesta();
// } else {
//   console.log("El usuario ya completó la encuesta.");
// }

mostrarEncuesta();






