import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const btnStart = document.querySelector("[data-start]");
const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");

btnStart.disabled = true;

const currentTime = Date.now();
let dateSet;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < currentTime) {
      Notiflix.Notify.failure("Please choose a date in the future");
    } else {
      btnStart.disabled = false;
      dateSet = selectedDates[0].getTime();
    }
  },
};

  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }

const fp = flatpickr(`#datetime-picker`, options);

let timerId = null;

const startTimer = () => {
  btnStart.disabled = true;
  timerId = setInterval(() => {
    let deltaTime = dateSet - Date.now();
    const convertTime = convertMs(deltaTime);
    if (deltaTime <= 0) {
      clearInterval(timerId);
    } else {
      clockTimer(convertTime);
    }
  }, 1000);
}

function clockTimer(convertTime) {
  days.textContent = convertTime.days;
  hours.textContent = convertTime.hours;
  minutes.textContent = convertTime.minutes;
  seconds.textContent = convertTime.seconds;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
};

btnStart.addEventListener("click", startTimer);