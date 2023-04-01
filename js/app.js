//Efecto hacer visible el header
const header = document.querySelector('#header');
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 100);
})

//Codigo para que funcione el formulario
const btn = document.querySelector('.btn_form');

document.querySelector('.contact_form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_dv1368q';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});