document.addEventListener('DOMContentLoaded', () => {
  const feedbackForm = document.querySelector('.feedback-form');
  const emailInput = feedbackForm.querySelector('[name="email"]');
  const messageInput = feedbackForm.querySelector('[name="message"]');
  const saveFormStateThrottled = _.throttle(() => {
    const formState = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formState));
  }, 500);
  emailInput.addEventListener('input', saveFormStateThrottled);
  messageInput.addEventListener('input', saveFormStateThrottled);
  const storedFormState = localStorage.getItem('feedback-form-state');
  if (storedFormState) {
    const parsedFormState = JSON.parse(storedFormState);
    emailInput.value = parsedFormState.email;
    messageInput.value = parsedFormState.message;
  }
  feedbackForm.addEventListener('submit', event => {
    event.preventDefault();
    emailInput.value = '';
    messageInput.value = '';
    localStorage.removeItem('feedback-form-state');
    console.log('Form data submitted:');
    console.log('Email:', parsedFormState.email);
    console.log('Message:', parsedFormState.message);
  });
});
