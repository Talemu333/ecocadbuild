
const userName = document.getElementById('name')
const userPhone = document.getElementById('phone')
const userEmail = document.getElementById('email')
const userWhatsapp = document.getElementById('whatsapp')
const userProjectType = document.getElementById('projType')
const userMessage = document.getElementById('message')
const reply = document.getElementById('alert')
const button = document.querySelector(".submit")


button.addEventListener('click', (e) => {
    // e.preventDefault()
    const name = userName.value
    const phone = userPhone.value
    const email = userEmail.value
    const whatsapp = userWhatsapp.value
    const projectType = userProjectType.value
    const message = userMessage.value
   
   
    const url = `http://localhost:3000/contact?name=${name}&mobile=${phone}&email=${email}&whatsapp=${whatsapp}&projectType=${projectType}&message=${message}`

    fetch(url)
    .then((response) => {
       return response.json()
    })
    .then((data) => {
        if(data.errors){
            reply.innerHTML = 'invalid input' 
        } else{
            reply.innerHTML = 'submitted!'
            console.log(data)
            // sendgrid come here
        } 
        
    })
    .catch((e) => {
        console.log(e)
    })
}) 



 



