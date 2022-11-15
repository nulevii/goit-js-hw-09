import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
require('flatpickr/dist/flatpickr.min.css');

const CALENDAR = document.querySelector('#datetime-picker');
const START_BTN = document.querySelector('[data-start]');
const DAYS = document.querySelector('[data-days]');
const HOURS = document.querySelector('[data-hours]');
const MINUTES = document.querySelector('[data-minutes]');
const SECONDS = document.querySelector('[data-seconds]');

const TIMER = document.querySelector('.timer');
const VALUES = document.querySelectorAll('.value');
const LABEL = document.querySelectorAll('.label');

START_BTN.disabled = true;
TIMER.style.display = 'flex';
TIMER.style.gap = '20px';
VALUES.forEach(value => {
  value.style.display = 'block';
  value.style.textAlign = 'center';
  value.style.fontSize = '40px';
});

LABEL.forEach(value => {
  value.style.display = 'block';
  value.style.textAlign = 'center';
  value.style.textTransform = 'uppercase';
});

let difference;

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

flatpickr(CALENDAR, {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose(selectedDate) {
    difference = selectedDate[0] - Date.now();
    if (difference <= 0) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    START_BTN.disabled = false;
  },
});

const timeCounter = () => {
  const convertedTime = convertMs(difference);
  DAYS.textContent = String(convertedTime.days).padStart(2, '0');
  HOURS.textContent = String(convertedTime.hours).padStart(2, '0');
  MINUTES.textContent = String(convertedTime.minutes).padStart(2, '0');
  SECONDS.textContent = String(convertedTime.seconds).padStart(2, '0');

  console.log(convertedTime.days);
  difference -= 1000;
};

START_BTN.addEventListener('click', () => {
  setInterval(timeCounter, 1000);
});
