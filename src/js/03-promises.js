import Notiflix from 'notiflix';

const FORM = document.querySelector('.form');

function createPromise({ position, delayNum }) {
  const shouldResolve = Math.random() > 0.3;
  const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(position);
      if (shouldResolve) {
        resolve({ position, delayNum });
      } else {
        reject({ position, delayNum });
      }
    }, delayNum);
  });
  return newPromise;
}

function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount },
  } = event.target;
  delayNum = Number(delay.value);
  stepNum = Number(step.value);
  amountNum = Number(amount.value);

  for (let position = 0; position < amountNum; position += 1) {
    createPromise({ position, delayNum })
      .then(({ position, delayNum }) => {
        Notiflix.Notify.success(
          `Fulfilled promise ${position + 1} in ${delayNum}ms`
        );
      })
      .catch(({ position, delayNum }) => {
        Notiflix.Notify.failure(
          `Rejected promise ${position + 1} in ${delayNum}ms`
        );
      });
    delayNum += stepNum;
  }
}

FORM.addEventListener('submit', onSubmit);
