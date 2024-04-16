const cards = document.getElementsByClassName('card');

Array.from(cards).forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

  card.addEventListener('mouseenter', () => {
    card.style.transition = 'none';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    card.style.transition = 'transform 0.5s ease';
  });
});
