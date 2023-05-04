/**
 * @jest-environment jsdom
 */

import checkTooltip, { createTooltip } from '../Tooltip';

test('should create a new tooltip', () => {
  document.body.innerHTML = '<div class="container_tooltip"><header class="header_tooltip"><p class="title_tooltip">Всплывающее название</p></header><div class="content_tooltip"><p class="message_tooltip">А вот и потрясающий контент. Это очень увлекательно. Правда?</p></div></div>';
  const expected = document.querySelector('.container_tooltip');
  const result = createTooltip();
  expect(result).toEqual(expected);
});

test('should remove block error', () => {
  document.body.innerHTML = `
  <form class="form">
    <div class="container">
      <button class="button">Нажмите, чтобы переключить всплывающее название</button>
      <div class="container_tooltip">
        <header class="header_tooltip">
          <p class="title_tooltip">Всплывающее название</p>
        </header>
        <div class="content_tooltip">
          <p class="message_tooltip">А вот и потрясающий контент. Это очень увлекательно. Правда?</p>
        </div>
      </div>
    </div>
  </form>`;

  const button = document.querySelector('.button');
  checkTooltip(button);
  const result = document.querySelector('.container_tooltip');
  expect(result).toBeNull();
});
