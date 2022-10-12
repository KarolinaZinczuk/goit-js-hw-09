const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector("body");

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

let timerId = null;

btnStart.addEventListener(`click`, () =>
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    btnStart.disabled = true;
    btnStop.disabled = false;
  }, 1000 ));

btnStop.addEventListener(`click`, () => {
  clearInterval(timerId);
  btnStart.disabled = false;
  btnStop.disabled = true;
});