function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let timerId = null;
const elBody = document.body;
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener(
  'click',
  () =>
    (timerId = setInterval(() => {
      elBody.style.backgroundColor = getRandomHexColor();
    }, 1000))
);

stopBtn.addEventListener('click', () => clearInterval(timerId));

//console.log(saveBtn);
