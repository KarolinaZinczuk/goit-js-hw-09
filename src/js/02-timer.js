import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const btnStart = document.querySelector("[data-start]");
const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-second]");

btnStart.disabled = true;

// const selectedTime = selectedDates[0];
const currentTime = Date.now();

// const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//       if (selectedTime < currentTime) {
//         Notiflix.Notify.failure("Please choose a date in the future");
//       } else {
//         btnStart.disabled = false;
//         selectedTime = selectedTime.getTime();
//       }
//     },
//   };

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
      let selectedDates = selectedDates[0].getTime();
    }
  },
};

  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

const fp = flatpickr(`#datetime-picker`, options);

let timerId = null;

const startTimer = () => {
  btnStart.disabled = true;
  timerId = setInterval(() => {
    let deltaTime = selectedTime - currentTime;
    const convertTime = convertMs(deltaTime);
    if (deltaTime = 0) {
      clearInterval(timerId);
    } else {
      clockTimer(convertTime);
    }
  },1000);
}

const clockTimer = (convertTime) => {
  days.textContent = convertTime.days;
  hours.textContent = convertTime.hours;
  minutes.textContent = convertTime.minutes;
  seconds.textContent = convertTime.seconds;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
};

function updateClock(value) {
  days.innerHTML = value.days;
  hours.innerHTML = value.hours;
  minutes.innerHTML = value.minutes;
  seconds.innerHTML = value.seconds;
};

btnStart.addEventListener("click", startTimer);