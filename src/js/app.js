import checkTooltip from './Tooltip';

const button = document.querySelector('.button');

button.addEventListener('click', (event) => {
  event.preventDefault();
  checkTooltip(button);
});
