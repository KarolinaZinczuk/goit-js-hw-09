import Notiflix from "notiflix";

const form = document.querySelector('.form');
const firstDelay = document.querySelector('[name="delay"]');
const delayStep = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');
// const submitBtn = document.querySelector('[type="submit"]');

let valueDelay = Number(firstDelay.value);
let valueStep = Number(delayStep.value);
let valueAmount = Number(amount.value);

function createPromise(position, delay) {
  const promise = new Promise ((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        resolve({position, delay});
      }
    }, delay);
  });

  promise
  .then(({position, delay}) => { 
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
})
.catch(({position, delay}) => {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
});
}

function sendSubmit(event) {
  event.preventDefault();
  for (let i =0; i < valueAmount; i++) {
    createPromise(i, valueDelay);
    valueDelay += valueStep;
  }
}

form.addEventListener("submit", sendSubmit);