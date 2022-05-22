// Валидация форм
const showInputError = (formElement, inputElement, errorMessage, settings) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(settings.inputElementError);
  errorElement.classList.add(settings.errorElementClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputElementError);
  errorElement.classList.remove(settings.errorElementClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement,settings) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage,settings);
  } else {
    hideInputError(formElement, inputElement, settings);
  }
};

const toggleButtonState = (inputList, buttonElement, settings) => {
  if(hasInvalidInput(inputList)){
    buttonElement.classList.add(settings.submitBtnDisabled);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(settings.submitBtnDisabled);
    buttonElement.disabled = false;
  };
};

const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  const buttonElement = formElement.querySelector(settings.submitBtn);
  toggleButtonState(inputList, buttonElement, settings);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(inputList, buttonElement, settings);
    });
  });
};

const hasInvalidInput = (inputList) =>  {
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
});
};

const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement)=>{
    formElement.addEventListener('submit', (evt)=>{
      evt.preventDefault();
    });
    setEventListeners(formElement, settings)
  });
};


export {enableValidation};

