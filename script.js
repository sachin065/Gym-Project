const contactForm = document.getElementById('contact-form'),
       contactMessage = document.getElementById('contact-message'),
       contactUser = document.getElementById('contact-user')


const sendEmail = (e) =>{
    e.preventDefault()
    if(contactUser.value === ''){
        contactMessage.textContent = 'you must fil the  email'
    }
}

contactForm.addEventListener('submit',sendEmail)
























