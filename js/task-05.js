const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

const changeName = (newName => {
    if (input.value === '') {
        output.innerHTML = 'Anonymous'
    }
    else output.textContent = newName.target.value
})

input.addEventListener ('input', changeName)