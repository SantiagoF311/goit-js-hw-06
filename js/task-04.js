const button = document.querySelectorAll('button')
const decrementButton = button[0]
const incrementButton = button[1]
var numbervalue = document.querySelector('#value')

let number = 0

const decrementNumber = () => {
    number--;
    numbervalue.innerHTML = number;
}

const incrementNumber = () => {
    number++;
    numbervalue.innerHTML = number
}

decrementButton.addEventListener('click', decrementNumber)
incrementButton.addEventListener('click', incrementNumber)




