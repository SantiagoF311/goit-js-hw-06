const input = document.querySelector('#validation-input')
const inputValidation = () => {
    input.classList.toggle('valid', input.value.length === 6);
    input.classList.toggle('invalid', input.value.length !== 6)
} 
input.addEventListener ('blur', inputValidation)



