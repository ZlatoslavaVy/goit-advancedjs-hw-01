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

const onSubmit = event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    refs.form.reset();
    formData.email = '';
    formData.message = '';
  }
};

const fillFormFields = () => {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedData) {
    refs.form.elements.email.value = savedData.email;
    refs.form.elements.message.value = savedData.message;
    formData.email = savedData.email;
    formData.message = savedData.message;
  }
};

refs.form.addEventListener('input', onInput);
refs.form.addEventListener('submit', onSubmit);

fillFormFields();
