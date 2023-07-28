
$(document).ready(function() {
    $('#menuToggle a[href="#"]').click(function(e) {
      e.preventDefault(); // Evita el comportamiento predeterminado del enlace
      $('#contactList').slideToggle(); // Mostrar u ocultar la lista de contactos con efecto de deslizamiento
    });
  });
  
  window.addEventListener('scroll', function() {
    const video = document.querySelector('.video-scroll');
    const scrollY = window.scrollY;
    video.style.transform = `translateY(${scrollY}px)`; /* Mueve el video conforme se hace scroll */
  });

  window.addEventListener('scroll', function() {
    const navBar = document.querySelector('.navbar');
    const scrollY = window.scrollY;
    
    if (scrollY > 100) { // Cambia 100 a la cantidad de scroll en píxeles donde deseas que la barra cambie de color
      navBar.classList.add('scrolled');
    } else {
      navBar.classList.remove('scrolled');
    }
  });
