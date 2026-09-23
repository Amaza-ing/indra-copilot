const boton = document.getElementById('saludoBtn');
const mensaje = document.getElementById('mensaje');
const horaElemento = document.getElementById('hora');
const horaManecilla = document.querySelector('.hand.hour');
const minutoManecilla = document.querySelector('.hand.minute');
const segundoManecilla = document.querySelector('.hand.second');

boton.addEventListener('click', () => {
  mensaje.textContent = '¡Hola! Esta página funciona con JavaScript.';
});

function actualizarHora() {
  const ahora = new Date();
  const hora = ahora.toLocaleTimeString('es-ES');
  horaElemento.textContent = hora;

  const segundos = ahora.getSeconds();
  const minutos = ahora.getMinutes() + segundos / 60;
  const horas = (ahora.getHours() % 12) + minutos / 60;

  horaManecilla.style.transform = `translateX(-50%) rotate(${horas * 30}deg)`;
  minutoManecilla.style.transform = `translateX(-50%) rotate(${minutos * 6}deg)`;
  segundoManecilla.style.transform = `translateX(-50%) rotate(${segundos * 6}deg)`;
}

function mostrarAlerta() {
  alert('¡Alerta! Has hecho clic en el botón.');
}

actualizarHora();
setInterval(actualizarHora, 1000);
