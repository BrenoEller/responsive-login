const button = document.getElementById('button')

button.addEventListener('click', (event) => {
    event.preventDefault()
    
    const password = document.getElementById('password')
    const email = document.getElementById('email')

    if(email.value == ''){
        email.classList.add("errorInput")
    } else{
        email.classList.remove("errorInput")
    }

    if(password.value == ''){
        password.classList.add("errorInput")
    } else{
        password.classList.remove("errorInput")
    }
})