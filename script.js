const form = document.querySelector('.form')
form.addEventListener('submit', event => {

 console.log(event.target.email.value)
const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)

form.classList.remove('invalid')

if(!isEmailValid){
form.classList.add('invalid')
}

 event.preventDefault()
})