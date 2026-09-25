import { beforeEach, describe, expect, it } from 'vitest';
import { applyTheme, updateMessage } from '../script.js';

describe('app logic', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button id="greetingButton" type="button">Haz clic</button>
      <p id="message" aria-live="polite">Pulsa el botón para cambiar este texto.</p>
      <strong id="time">--:--:--</strong>
      <div class="hand hour"></div>
      <div class="hand minute"></div>
      <div class="hand second"></div>
      <button class="theme-option" data-theme="aurora" aria-pressed="true"></button>
      <button class="theme-option" data-theme="ocean" aria-pressed="false"></button>
      <button class="theme-option" data-theme="sunset" aria-pressed="false"></button>
      <button class="theme-option" data-theme="forest" aria-pressed="false"></button>
      <button class="theme-option" data-theme="midnight" aria-pressed="false"></button>
    `;
    localStorage.clear();
  });

  it('updates the visible message in the UI', () => {
    updateMessage('Hola');

    expect(document.getElementById('message').textContent).toBe('Hola');
  });

  it('applies a valid theme and stores it in localStorage', () => {
    applyTheme('ocean');

    expect(document.body.dataset.theme).toBe('ocean');
    expect(localStorage.getItem('themePreference')).toBe('ocean');
  });
});
