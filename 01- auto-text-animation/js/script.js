const containerEl = document.querySelector('.container');

const texts = ['Web Developer', 'Designer', 'Freelancer'];

let index = 0;
let chIndex = 0;

function updateText() {
  containerEl.innerHTML = `<h1>I am a ${texts[index].slice(0, chIndex)}</h1>`;

  chIndex++;

  if (chIndex > texts[index].length) {
    chIndex = 0;
    index++;

    if (index >= texts.length) {
      index = 0;
    }
  }

  setTimeout(updateText, 400);
}

updateText();
