function createElement(tagName, options, ...children) {
  const node = Object.assign(document.createElement(tagName), options);
  node.append(...children);
  return node;
}

export function createTooltip() {
  const titleTooltip = createElement('p', {
    className: 'title_tooltip',
    textContent: 'Всплывающее название',
  });

  const headerTooltip = createElement('header', {
    className: 'header_tooltip',
  }, titleTooltip);

  const messageTooltip = createElement('p', {
    className: 'message_tooltip',
    textContent: 'А вот и потрясающий контент. Это очень увлекательно. Правда?',
  });

  const contentTooltip = createElement('div', {
    className: 'content_tooltip',
  }, messageTooltip);

  const tooltipElement = createElement('div', {
    className: 'container_tooltip',
  }, ...[headerTooltip, contentTooltip]);

  return tooltipElement;
}

export default function checkTooltip(button) {
  const parent = button.offsetParent;
  const tooltipBox = document.querySelector('.container_tooltip');
  if (tooltipBox === null) {
    const tooltip = createTooltip();
    console.log(tooltipBox);
    parent.appendChild(tooltip);
    tooltip.style.bottom = `${tooltip.offsetHeight / 2}px`;
  } else {
    tooltipBox.remove();
  }
}
