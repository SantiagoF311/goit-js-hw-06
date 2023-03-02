const form = document.querySelector('.login-form')

const formulario = (event) => {
    event.preventDefault()

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert ('Todos los espacios deben ser rellenados')
    }

    console.log(`email: ${email.value}, password: ${password.value}`)
    event.currentTarget.reset()
}

form.addEventListener('submit', formulario)