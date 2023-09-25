import Notiflix from 'notiflix';

const elForm = document.querySelector('.form');

const createPromiseBtn = document.querySelector('button');
const inputFirstDelay = document.querySelector('input[name="delay"]');
const inputStep = document.querySelector('input[name="step"]');
const inputAmount = document.querySelector('input[name="amount"]');


elForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

    for (let index = 1; index <= Number(inputAmount.value); index++)
      createPromise(index, (Number(inputFirstDelay.value)+inputStep.value*index))
        .then(good => {
          Notiflix.Notify.success(good);
        })
        .catch(error => {
          Notiflix.Notify.failure(error);
        });
}

function createPromise(position, delay) {
  
const shouldResolve = Math.random() > 0.3;
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
        } else {
          // Reject
          reject(`❌ Rejected promise ${position} in ${delay}ms`);
        }
      }, delay);
    
    });
return promise;
}
  