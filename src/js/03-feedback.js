import throttle from 'lodash.throttle';

const FORM = document.querySelector('.feedback-form');
const EMAIL = FORM.querySelector('[name="email"]');
const MESSAGE = FORM.querySelector('[name="message"]');

const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {
  email: '',
  message: '',
};

EMAIL.value = formData.email;
MESSAGE.value = formData.message;

const addDataToLocalStorage = event => {
  formData[event.target.name] = event.target.value;
  console.log('test');
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const clearForm = event => {
  event.preventDefault();
  console.log(formData.email);
  console.log(formData.message);
  EMAIL.value = '';
  MESSAGE.value = '';
  localStorage.removeItem('feedback-form-state');
};

FORM.addEventListener('input', throttle(addDataToLocalStorage, 500));
FORM.addEventListener('submit', clearForm);
