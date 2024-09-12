const instagram=document.querySelector('.insta-js')
instagram.addEventListener('click',()=>{const instaLink='https://www.instagram.com/daniels_meshack/'; window.open(`${instaLink}`, '_blank');})

const linkedIn=document.querySelector('.linkedIn-js')
linkedIn.addEventListener('click',()=>{const linkedInLink='https://uk.linkedin.com/in/meshack-daniels-ndubuisi-514835175?trk=people-guest_people_search-card'; window.open(`${linkedInLink}`, '_blank');}) 

const github=document.querySelector('.github-js')
github.addEventListener('click',()=>{const githubLink='https://github.com/Meshack-Ndubuisi-Daniels'; window.open(`${githubLink}`, '_blank');}) 

const contactUs= document.querySelector('.contact-us-js')
contactUs.addEventListener('click', ()=> {const phoneNumber = "+44(0)7823540344"; window.location.href = `tel:${phoneNumber}`})

const phoneUs= document.querySelector('.phone-js')
phoneUs.addEventListener('click', ()=> {const phoneNumber = "+44(0)7823540344"; window.location.href = `tel:${phoneNumber}`})

const footerPhone= document.querySelector('.footer-email-button-js')
footerPhone.addEventListener('click', ()=> {const phoneNumber = "+44(0)7823540344"; window.location.href = `tel:${phoneNumber}`})

const footerMessage= document.querySelector('.footer-phone-button-js')
footerMessage.addEventListener('click', ()=>{ const phoneNumber = "+44(0)7823540344"; window.open(`sms:?&${phoneNumber}/&body=encodeURIComponent('Hello, can we talk about creating a website or mobile app please. My name is')`)}) // /body==encodeURIComponent('sms body......'))}) //,'_blank'}) //if(navigator.userAgent.match(/Android/i)){ window.open('sms://'+447823540344)/&body=encodeURIComponent('sms body......'),'_blank'}})

const footerEmail=document.querySelector('.footer-email-email-button-js')
footerEmail.addEventListener('click',()=>{const emailAddress = "mannyzyg@gmail.com"; window.open(`email:?&${emailAddress}`)}) ///&body=encodeURIComponent('Hello, can we talk about creating a website or mobile app please. My name is')`)})

/*const footerEmail=document.querySelector('.footer-email-email-button-js')
footerEmail.addEventListener('click',()=>{Email.send({
  Host: "smtp.yourisp.com",
  Username: "username",
  Password: "password",
  To: 'manyzyg1@gmail.com.com',
  From: "mannyzyg@gmail.com",
  Subject: "Test Email",
  Body: "This is a test email sent using SMTP.js"
})
.then(()=> {alert("Mail sent successfully") // Alert message on successful email delivery
});})*/

/*const submitForm=document.querySelector('.send-message-button-js')
submitForm.addEventListener('click', ()=> {const yourName=document.querySelector('.your-name-input-js'); const yourEmailAddress=document.querySelector('.your-email-address-js'); const yourMessage=document.querySelector('.your-message'); if (yourName.value==='' || yourEmailAddress.value==='' || yourMessage.value==='') {alert('Please input a value in all fields!')} else {alert('Your message has been successfully submitted! If you dont get a feedback within 24 hours, please text +44(0)7823540344'); console.log('helllo'); yourName.value='';yourEmailAddress.value=''; yourMessage.value=''}})*/

const submitForm=document.querySelector('.send-message-button-js')

submitForm.addEventListener('click', function () {setTimeout (function () {const yourName=document.querySelector('.your-name-input-js'); const yourEmailAddress=document.querySelector('.your-email-address-js'); const yourMessage=document.querySelector('.your-message'); if (yourName.value==='' || yourEmailAddress.value==='' || yourMessage.value==='') {alert('Please input a value in all fields!')} else {alert('Your message has been successfully submitted! If you dont get a feedback within 24 hours, please text +44(0)7823540344'); yourName.value='';yourEmailAddress.value=''; yourMessage.value=''}}, 1000)})



//the below one is the normal one
/*const submitForm=document.querySelector('.send-message-button-js')
submitForm.addEventListener('click', ()=> {const yourName=document.querySelector('.your-name-input-js'); const yourEmailAddress=document.querySelector('.your-email-address-js'); const yourMessage=document.querySelector('.your-message'); if (yourName.value==='' || yourEmailAddress.value==='' || yourMessage.value==='') {alert('Please input a value in all fields!')} else {alert('This form has been successfully submitted!'); console.log(`This user has the name "${yourName.value}", email "${yourEmailAddress.value}" and the message "${yourMessage.value}"`)}})*/

  