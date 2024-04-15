const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const input = document.querySelector('#email');

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}

function onInput() {
  if (isEmailValid(input.value)) {
    input.style.borderColor = '#3cbc81';
  } else {
    input.style.borderColor = ' #e74a3b';
  }
}

input.addEventListener('input', onInput);
