const initialMessage = 'Pulsa el botón para cambiar este texto.';
const greetingMessage = '¡Hola! Esta página funciona con JavaScript.';
const themeStorageKey = 'themePreference';
const themeOptions = ['aurora', 'ocean', 'sunset', 'forest', 'midnight'];

function getMessageElement() {
  return document.getElementById('message');
}

function getTimeElement() {
  return document.getElementById('time');
}

function getThemeButtons() {
  return document.querySelectorAll('.theme-option');
}

function updateMessage(text) {
  const message = getMessageElement();

  if (!message) {
    return;
  }

  message.textContent = text;
}

function setHandRotation(handElement, degrees) {
  if (!handElement) {
    return;
  }

  handElement.style.transform = `translateX(-50%) rotate(${degrees}deg)`;
}

function updateTime() {
  const timeElement = getTimeElement();
  const hourHand = document.querySelector('.hand.hour');
  const minuteHand = document.querySelector('.hand.minute');
  const secondHand = document.querySelector('.hand.second');

  if (!timeElement) {
    return;
  }

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

function applyTheme(themeName) {
  const safeTheme = themeOptions.includes(themeName) ? themeName : 'aurora';
  const themeButtons = getThemeButtons();

  if (document.body) {
    document.body.dataset.theme = safeTheme;
  }

  themeButtons.forEach((button) => {
    const isActive = button.dataset.theme === safeTheme;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  try {
    localStorage.setItem(themeStorageKey, safeTheme);
  } catch (error) {
    console.warn('No se pudo guardar la preferencia del tema.', error);
  }
}

function initializeThemes() {
  const themeButtons = getThemeButtons();

  if (themeButtons.length === 0) {
    return;
  }

  let selectedTheme = 'aurora';

  try {
    const storedTheme = localStorage.getItem(themeStorageKey);
    if (storedTheme && themeOptions.includes(storedTheme)) {
      selectedTheme = storedTheme;
    }
  } catch (error) {
    console.warn('No se pudo leer la preferencia del tema.', error);
  }

  applyTheme(selectedTheme);

  themeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      applyTheme(button.dataset.theme);
    });
  });
}

function initializeApp() {
  const greetingButton = document.getElementById('greetingButton');

  if (!greetingButton) {
    return;
  }

  greetingButton.addEventListener('click', () => {
    updateMessage(greetingMessage);
  });

  updateMessage(initialMessage);
  updateTime();
  initializeThemes();
  setInterval(updateTime, 1000);
}

if (typeof document !== 'undefined') {
  initializeApp();
}

export { applyTheme, initializeApp, initializeThemes, setHandRotation, updateMessage, updateTime };
