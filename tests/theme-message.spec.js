import { describe, expect, it } from 'vitest';

describe('Lógica de temas y mensajes', () => {
  it('debe aplicar el tema guardado antes de inicializar la vista', () => {
    localStorage.setItem('themePreference', 'midnight');
    document.body.dataset.theme = 'aurora';

    const savedTheme = localStorage.getItem('themePreference');

    expect(document.body.dataset.theme).toBe(savedTheme);
  });

  it('debe mostrar el texto de bienvenida cuando el usuario interactúa', () => {
    const message = document.createElement('p');
    message.id = 'message';
    message.textContent = 'Pulsa el botón para cambiar este texto.';
    document.body.appendChild(message);

    const expectedText = '¡Hola! Esta página funciona con JavaScript.';

    expect(message.textContent).toBe(expectedText);
  });

  it('debe sincronizar la preferencia del tema con el atributo del body', () => {
    const selectedTheme = 'forest';
    document.body.dataset.theme = 'aurora';
    localStorage.setItem('themePreference', selectedTheme);

    expect(document.body.dataset.theme).toBe('midnight');
    expect(localStorage.getItem('themePreference')).toBe('forest');
  });
});
