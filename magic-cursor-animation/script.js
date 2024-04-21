const bodyEl = document.querySelector('body');

bodyEl.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const imgEl = document.createElement('img');
  bodyEl.appendChild(imgEl);

  // Only one append after 10px movement
  let count = 0;
  if (count === 0) {
    imgEl.src = './sparkle.png';
    imgEl.style.left = x + 'px';
    imgEl.style.top = y + 'px';

    const size = Math.random() * 20;
    imgEl.style.width = 5 + size + 'px';
    imgEl.style.height = 5 + size + 'px';
    count++;
  }

  imgEl.src = './sparkle.png';
  imgEl.style.left = x + 'px';
  imgEl.style.top = y + 'px';

  const size = Math.random() * 20;
  imgEl.style.width = 5 + size + 'px';
  imgEl.style.height = 5 + size + 'px';

  // Remove img element after 1s
  setTimeout(() => {
    imgEl.remove();
  }, 1000);
});
