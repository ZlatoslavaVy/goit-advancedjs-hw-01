const formData = {
  email: '',
  message: '',
};

const refs = {
  form: document.querySelector('.feedback-form'),
};

const onInput = event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

console.log(onInput);

const onSubmit = event => {
  event.preventDefault();
  formData.email === '' || formData.message === ''
    ? alert('Fill please all fields')
    : console.log(formData);
};

refs.form.addEventListener('input', onInput);
refs.form.addEventListener('submit', onSubmit);

formData.email = refs.form.elements.email.value;
formData.message = refs.form.elements.message.value;

const fillFormFields = () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const data = JSON.parse(savedData);
    refs.form.elements.email.value = data.email;
    refs.form.elements.message.value = data.message;
  }
};
fillFormFields();

// const formDataValues = Object.values(formData);

// if (formDataValues.includes('')) {
// } else {
//   console.log(formData);
//   localStorage.removeItem('feedback-form-state');
//   refs.form.reset();
// }
