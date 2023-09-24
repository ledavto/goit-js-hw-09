import Notiflix from 'notiflix';

const createPromiseBtn = document.querySelector('button');
const inputFirstDelay = document.querySelector('input[name="delay"]');
const inputStep = document.querySelector('input[name="step"]');
const inputAmount = document.querySelector('input[name="amount"]');

console.log(inputAmount.value);



createPromiseBtn.addEventListener('submit', createPromise);



function createPromise(position, delay, event) {
  event.preventDefault();

  for (let index = 0; index < Number(inputAmount.value); index++) {
  console.log(index);
  
}
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notiflix.Notify.failure('GOOD');
    console.log(inputAmount.value);
  } else {
    // Reject
    Notiflix.Notify.failure('BAD');
  }
}
