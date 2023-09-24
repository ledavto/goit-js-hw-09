import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const inputData = document.querySelector('#datetime-picker');
const dayEl = document.querySelector('span[data-days]');
const hourEl = document.querySelector('span[data-hours]');
const minEl = document.querySelector('span[data-minutes]');
const secEl = document.querySelector('span[data-seconds]');
const btnStart = document.querySelector('button[data-start]');
btnStart.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selDate = selectedDates[0].getTime();
    const date = new Date();
    if (selDate - date.getTime() <= 0) {
      btnStart.setAttribute('disabled', '');
      //window.alert('Please choose a date in the future');
      Notiflix.Notify.failure('Please choose a date in the future');
    } else btnStart.removeAttribute('disabled');

    console.log(selectedDates[0].getTime());
  },
};

flatpickr(inputData, options);

function addLeadingZero(value){
  return value.padStart(2, "0");
}

btnStart.addEventListener('click', onClickBtn);

function onClickBtn() {
  selDate = new Date(inputData.value);
  console.log(selDate.getTime());

  const timerId = setInterval(() => {
    const date = new Date();
    const dateObj = convertMs(selDate.getTime() - date.getTime());
    if (selDate.getTime() <= date.getTime()) {
      clearInterval(timerId);
      return;
    }

    dayEl.textContent = addLeadingZero(String(dateObj.days));
    hourEl.textContent = addLeadingZero(String(dateObj.hours));
    minEl.textContent = addLeadingZero(String(dateObj.minutes));
    secEl.textContent = addLeadingZero(String(dateObj.seconds));
    
    }, 1000);
}

function onStartTimer() {}

console.log(dayEl.textContent);
