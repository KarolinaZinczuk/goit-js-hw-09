const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector("body");

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

let timerId = null;

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  btnStart.disabled = true;
  btnStop.disabled = false;

  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000 );
}

function changeColorStop() {
  clearInterval(timerId);
  btnStart.disabled = false;
  btnStop.disabled = true;
}

btnStart.addEventListener(`click`, changeColor);
btnStop.addEventListener(`click`, changeColorStop);

