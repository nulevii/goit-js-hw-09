const BODY = document.querySelector('body');
const START_BTN = document.querySelector('[data-start]');
const STOP_BTN = document.querySelector('[data-stop]');

let intervalID;
STOP_BTN.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startChangeBgColor = () => {
  BODY.style.backgroundColor = getRandomHexColor();
};

START_BTN.addEventListener('click', () => {
  START_BTN.disabled = true;
  STOP_BTN.disabled = false;

  intervalID = setInterval(startChangeBgColor, 1000);
});

const stopChangeBgColor = () => {
  START_BTN.disabled = false;
  STOP_BTN.disabled = true;
  clearInterval(intervalID);
};

STOP_BTN.addEventListener('click', stopChangeBgColor);
