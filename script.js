const greetingButton = document.getElementById('greetingButton');
const message = document.getElementById('message');
const timeElement = document.getElementById('time');
const hourHand = document.querySelector('.hand.hour');
const minuteHand = document.querySelector('.hand.minute');
const secondHand = document.querySelector('.hand.second');

const initialMessage = 'Pulsa el botón para cambiar este texto.';
const greetingMessage = '¡Hola! Esta página funciona con JavaScript.';

function updateMessage(text) {
  message.textContent = text;
}

function setHandRotation(handElement, degrees) {
  handElement.style.transform = `translateX(-50%) rotate(${degrees}deg)`;
}

function updateTime() {
  const now = new Date();
  const currentTime = now.toLocaleTimeString('es-ES');
  timeElement.textContent = currentTime;

  const seconds = now.getSeconds();
  const minutes = now.getMinutes() + seconds / 60;
  const hours = (now.getHours() % 12) + minutes / 60;

  setHandRotation(hourHand, hours * 30);
  setHandRotation(minuteHand, minutes * 6);
  setHandRotation(secondHand, seconds * 6);
}

function initializeApp() {
  greetingButton.addEventListener('click', () => {
    updateMessage(greetingMessage);
  });

  updateMessage(initialMessage);
  updateTime();
  setInterval(updateTime, 1000);
}

initializeApp();
