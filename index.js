
  document.addEventListener("DOMContentLoaded", function() {
    // Asegurarnos de que el DOM esté listo
    window.addEventListener("load", function() {
        // Ocultar el loader
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.transition = 'opacity 100s ease';
            loader.style.opacity = '0'; // Desaparece con la transición
            setTimeout(function() {
                loader.remove(); // Elimina el loader del DOM
                document.body.classList.remove('loading'); // Habilitar el scroll
            }, 1000); // El tiempo debe coincidir con la transición
        }
    });
});

