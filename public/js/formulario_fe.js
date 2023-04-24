console.log("El archivo registro.js se ha cargado correctamente.");

window.addEventListener("load", function() {
  console.log("El archivo registro.js se ha cargado correctamente.");

  function validarFormulario() {

    // Validación formulario de LOGIN
    
    // Validar email
    const email = document.getElementById("emailLogin").value;
    console.log(email)
    if (!email) {
      mostrarError("emailLogin", "El campo email es OBLIGATORIO.");
      return false;
    }
    if (!validarEmail(email)) {
      mostrarError("emailLogin", "El email ingresado no es VALIDO.");
      return false;
    }

    function validarEmail(email) {
      // Validar si el email tiene el formato correcto
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    
    
    // Validar contraseña
    const password = document.getElementById("passwordLogin").value;
    
    if (!password) {
      mostrarError("passwordLogin", "El campo contraseña es OBLIGATORIO.");
      return false;
    }
    
    // formulario es válido:
    return true;
  }
  

  function mostrarError(campo, mensaje) {

    // Eliminar cualquier mensaje de error anterior
    const campoError = document.getElementById(campo).parentNode;
    const errorAnterior = campoError.querySelector(".errorMsg");
    if (errorAnterior) {
      campoError.removeChild(errorAnterior);
    }
  
    // Mostrar el nuevo mensaje de error
    const error = document.createElement("p");
    error.className = "errorMsg";
    error.textContent = mensaje;
    campoError.appendChild(error);
  };
  

  // Validación Formulario de REGISTRO

  
function validarFormularioRegistro() {

console.log("registro")
// Obtener el formulario y los campos
const form = document.getElementById('form.formReg');
const firstName = document.getElementById('first_name');

const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmarpassword');
const image = document.getElementById('image');


  // Validar el campo "first_name"
  if (firstName.value.length < 2) {
    firstName.classList.add('is-invalid');
    // Obtener el mensaje de error del servidor y mostrarlo en la etiqueta correspondiente
    const errorMsg = document.querySelector('p')
    .innerText = 'El nombre es OBLIGATORIO, debe tener AL MENOS 2 caracteres';
    
    
  } else {
    firstName.classList.remove('is-invalid');
    // Limpiar el mensaje de error
    const errorMsg = document.querySelector('firsName');
    errorMsg.innerText = '';
  }

  // Validar el campo "last_name"
  if (lastName.value.length < 2) {
    lastName.classList.add('is-invalid');
    // Obtener el mensaje de error del servidor y mostrarlo en la etiqueta correspondiente
    const errorMsg = document.querySelector('p');
    errorMsg.innerText = 'El apellido es OBLIGATORIO, debe tener AL MENOS 2 caracteres';
  } else {
    lastName.classList.remove('is-invalid');
    // Limpiar el mensaje de error
    const errorMsg = document.querySelector('#last_name + .errorMsg');
    errorMsg.innerText = '';
  }

  // Validar el campo "email"
  if (!validateEmail(email.value)) {
    email.classList.add('is-invalid');
    // Obtener el mensaje de error del servidor y mostrarlo en la etiqueta correspondiente
    const errorMsg = document.querySelector('#email-reg + .errorMsg');
    errorMsg.innerText = 'El correo electrónico NO es válido';
  } else {
    email.classList.remove('is-invalid');
    // Limpiar el mensaje de error
    const errorMsg = document.querySelector('#email-reg + .errorMsg');
    errorMsg.innerText = '';
  }

  // Validar el campo "password"
  if (password.value.length < 8) {
    password.classList.add('is-invalid');
    // Obtener el mensaje de error del servidor y mostrarlo en la etiqueta correspondiente
    const errorMsg = document.querySelector('#password-reg + .errorMsg');
    errorMsg.innerText = 'La contraseña debe tener AL MENOS 8 caracteres';
  } else {
    password.classList.remove('is-invalid');
    // Limpiar el mensaje de error
    const errorMsg = document.querySelector('#password-reg + .errorMsg');
    errorMsg.innerText = '';
  }

  // Validar el campo "confirmarpassword"
  if (confirmPassword.value.length < 8 || confirmPassword.value !== password.value) {
    confirmPassword.classList.add('is-invalid');
    // Obtener el mensaje de error del servidor y mostrarlo en la etiqueta correspondiente
    const errorMsg = document.querySelector('#confirmarpassword + .errorMsg');
    errorMsg.innerText = 'Las contraseñas NO coinciden';
  } else {
    confirmPassword.classList.remove('is-invalid');
    // Limpiar el mensaje de error
    const errorMsg = document.querySelector('#confirmarpassword + .errorMsg');
    errorMsg.innerText = '';
  }}

  console.log("casi entré")

   // Asociar la función validarFormulario al evento submit del formulario
   const formulario = document.querySelector("form.formLogin");
   console.log("entré")
   formulario.addEventListener("submit", function(evento) {
    
     evento.preventDefault();
     if (validarFormulario()) {
       formulario.submit();
     }
   })
   
   const formularioRegister = document.querySelector("form.formReg");
   console.log("entré2")
   formularioRegister.addEventListener("change", function(evento) {
   console.log("entré3")

     evento.preventDefault();
     if (validarFormularioRegistro()) {
       formularioRegister.submit();
     }
   })

  // Validar el campo "image"
/*   if (!validateFile(image.files[0])) {
    image.classList


  }
*/})