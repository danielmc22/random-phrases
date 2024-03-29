let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

//entero aleatorio para generar cita aleatoria (index aleatorio dentro de un rango)

function genEnteroAleatoreo (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

function cambiarCita() {
  let indiceAleatorio = genEnteroAleatoreo(0, 6);
  citaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
  autorElem.innerText = citas[indiceAleatorio].autor;

}

cambiarCita();

botonElem.addEventListener('click', cambiarCita);


