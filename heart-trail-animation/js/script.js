const bodyEl = document.querySelector('body');

bodyEl.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const spanEl = document.createElement('span');
  bodyEl.appendChild(spanEl);

  spanEl.style.left = x + 'px';
  spanEl.style.top = y + 'px';

  const size = Math.random() * 100;
  spanEl.style.width = size + 'px';
  spanEl.style.height = size + 'px';

  // Remove span element after 1s
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
