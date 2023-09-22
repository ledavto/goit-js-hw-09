import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

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
      window.alert('Please choose a date in the future');
    } else btnStart.removeAttribute('disabled');

    console.log(selectedDates[0].getTime());
  },
};

flatpickr(inputData, options);

btnStart.addEventListener('click', onClickBtn);

function onClickBtn() {
  const date = new Date();
  selDate = new Date(inputData.value);
  console.log(selDate.getTime());

  setInterval(() => {
    const dateObj = convertMs(selDate.getTime() - date.getTime());
    dayEl.textContent = dateObj.days;
    hourEl.textContent = dateObj.hours;
    minEl.textContent = dateObj.minutes;
    secEl.textContent = dateObj.seconds;
    console.log('12');
  }, 1000);
}

function onStartTimer() {}

console.log(dayEl.textContent);
