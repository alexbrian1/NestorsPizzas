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

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  const btncupon = document.getElementById("btncupon");

  function mostrarEncuesta() {
    let codigoCupon = 'CHEDDAR';

    Swal.fire({
      title: '¡Gracias por completar la encuesta!',
      html: `
        <div class="swal-content-container">
          <span id="codigoCupon">${codigoCupon}</span>
          <button id="copiarCupon" class="swal2-copiar-btn">
            <i class="fas fa-copy"></i> Copiar
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
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirige a la URL deseada en una nueva pestaña
        window.open(`https://api.whatsapp.com/send?phone=5491122648048&text=Hola%20quiero%20pedir%20una%20hamburguesa!%20El%20código%20de%20mi%20cupón%20para%20cheddar%20gratis%20es%20${codigoCupon}`, '_blank');
      }
    });

    setTimeout(() => {
      const copiarBtn = Swal.getHtmlContainer().querySelector('#copiarCupon');
      if (copiarBtn) {
        copiarBtn.addEventListener('click', () => {
          copiarAlPortapapeles(codigoCupon);
        });
      }
    }, 100);

    localStorage.setItem('cuponObtenido', 'true');
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
      text: `Tu cupón es: ${texto}`,
      background: '#111',
      color: '#fff',
      confirmButtonColor: '#ff9f0d',
      confirmButtonText: 'Ir a canjear cupón',
      customClass: {
        popup: 'swal-popup',
        title: 'swal-title',
        confirmButton: 'swal-confirm-button',
        content: 'swal-text',
        htmlContainer: 'swal-html-container'
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirige a la URL deseada en una nueva pestaña
        window.open(`https://api.whatsapp.com/send?phone=5491122648048&text=Hola%20quiero%20pedir%20una%20hamburguesa!%20El%20código%20de%20mi%20cupón%20es%20`, '_blank');
      }
    });
  }

  btncupon.addEventListener("click", () => {
    if (localStorage.getItem('cuponObtenido') === 'true') {
      Swal.fire({
        icon: 'info',
        iconColor: '#ff9f0d',
        title: 'Cupón ya generado',
        text: 'Ya has obtenido un cupón. Tu cupon es CHEDDAR ¡Canjéalo ahora!',
        background: '#111',
        color: '#fff',
        confirmButtonColor: '#ff9f0d',
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirige a la URL deseada en una nueva pestaña
          window.open(`https://api.whatsapp.com/send?phone=5491122648048&text=Hola%20quiero%20pedir%20una%20hamburguesa!%20El%20código%20de%20mi%20cupón%20es%20`, '_blank');
        }
      });
    } else {
      mostrarEncuesta();
    }
  });
});

localStorage.clear();
