
let contenedor = document.getElementsByClassName('contenedor')[0];

contenedor.addEventListener('click', function() {
    alert('Hola! Soy el div');
});

let boton = document.getElementById('btnSaludar');


boton.addEventListener('click', function(event) {
    event.stopPropagation();
});