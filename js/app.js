//Efecto hacer visible el header
const header = document.querySelector('#header');
window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 100);
})

//Codigo para que funcione el formulario
const btn = document.querySelector('.btn_form');

document.querySelector('.contact_form')
  .addEventListener('submit', function (event) {
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

//Cambiar texto en width portatil
const parrafo = document.querySelector('.parrafoAbout');




cambiarTexto();

function cambiarTexto() {
  var width = document.documentElement.clientWidth;

  if (width <= 1366) {
    parrafo.innerHTML = `<p class="parrafoAbout">Hola, ¡bienvenido a mi página personal! Mi nombre es Jean Yerena, y soy un desarrollador
    frontend junior apasionado por crear experiencias digitales atractivas y accesibles. <br>

    Siempre he tenido una gran curiosidad por la tecnología y el diseño. Me encanta trabajar con HTML, CSS y
    JavaScript para crear páginas web y aplicaciones que no solo sean funcionales, sino también hermosas y
    fáciles de usar. <br>

    he estado trabajando duro para mejorar mis habilidades y adquirir nuevas herramientas y conocimientos,
    estoy emocionado por la oportunidad de aprender y crecer en esta industria en constante evolución.
</p>`;
  }
}

// menu hamburguesa
let iconMenu = document.querySelector('#menu-icon');
let menu = document.querySelector('.menu');

iconMenu.onclick = () => {
  iconMenu.classList.toggle('bx-x');
  menu.classList.toggle('open');
}

window.onscroll = () => {
  iconMenu.classList.remove('bx-x');
  menu.classList.remove('open');
}