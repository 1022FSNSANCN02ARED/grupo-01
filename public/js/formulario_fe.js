console.log("El archivo registro.js se ha cargado correctamente.")
window.addEventListener("load", function () {
  const form = document.querySelector("#formRegistro");
  //Validación FRONT = Capturo los campos
  const firstName = document.getElementById("first_name");
  const lastName = document.getElementById("last_name");
  const emailInput = document.getElementById("emailRegistro");
  const password = document.getElementById("password1");
  const errorPassword = document.getElementById("errorPassword");
  const confirmPassword = document.getElementById("confirmarpasswordReg");
  const submitButton = document.querySelector('button[type="submit"]');
  const fileInput = document.getElementById("image");
  let file = fileInput.file;
  console.log(file);
  const registeredEmails = ["email1@example.com", "email2@example.com"];

  // Validar el formulario al enviar
  form.addEventListener("submit", function (event) {


    let totalErrors = 0;
    totalErrors = totalErrors + validateFields(firstName);
    totalErrors = totalErrors + validateFields(lastName);
    totalErrors = totalErrors + validateEmail(emailInput);
    totalErrors = totalErrors + validatePass(password, confirmPassword);
    totalErrors = totalErrors + validateFile(fileInput);

    //si hay error no enviar (contar errores del form)


    if (totalErrors > 0) {
      event.preventDefault();
    }
  });

  //Función para validar campos nombre y apellido (Debe ser obligatorio y tener al menos 2 caracteres)
  const validateFields = (campo) => {
    const field = campo;
    const fieldValue = campo.value.trim();

    if (fieldValue.length < 2) {
      field.classList.add("invalid");
      field.nextElementSibling.classList.add("errorMessages");
      field.nextElementSibling.textContent =
        "El " +
        field.name +
        " es obligatorio. Debe tener al menos 2 caracteres";
      return 1;
    } else {
      field.classList.remove("invalid");
      field.nextElementSibling.classList.remove("errorMessages");
      field.nextElementSibling.textContent = "";
      return 0;
    }
  };

  //Validar email (Debe ser obligatorio y Válido)
  const validateEmail = (campo) => {
    const field = campo;
    const fieldValue = campo.value.trim();

    //Expresión regular para email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    /*   const emailRegex = fieldValue.includes("@"); */

    if (!fieldValue) {
      field.classList.add("invalid");
      field.nextElementSibling.classList.add("errorMessages");
      field.nextElementSibling.textContent =
        "El mail es Obligatorio.Por favor introduce un email válido";
      return 1;
    } else if (!emailRegex.test(fieldValue)) {
      // Check si el formato es válido
      field.classList.add("invalid");
      field.nextElementSibling.classList.add("errorMessages");
      field.nextElementSibling.textContent =
        "Por favor introduce un email válido.";
      return 1;
    } else if (registeredEmails.includes(fieldValue)) {
      // Check si el email ya está registrado
      field.classList.add("invalid");
      field.nextElementSibling.classList.add("errorMessages");
      field.nextElementSibling.textContent =
        "Este email ya ha sido registrado. Por favor introduce otro email.";
      return 1;
    } else {
      field.classList.remove("invalid");
      field.nextElementSibling.classList.remove("errorMessages");
      field.nextElementSibling.textContent = "";
      return 0;
    }
  };

  const validatePass = (password, confirmPassword) => {
    // Verificar que la contraseña cumpla con los requisitos
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();
    const errors = [];


    if (passwordValue !== confirmPasswordValue) {
      errors.push("Las contraseñas no coinciden");
    }

    if (passwordValue.length < 8) {
      errors.push("La contraseña debe tener al menos 8 caracteres");
    }

    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regex.test(passwordValue)) {
      errors.push(
        "La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial"
      );
    }

    // Si hay errores, mostrarlos
    if (errors.length > 0) {
      errorPassword.innerHTML = errors.join("<br>");
      submitButton.disabled = true;
      return 1;
    } else {
      errorPassword.innerHTML = "";
      submitButton.disabled = false;
      return 0;
    }
  };

  //Validar imagen (Deberá ser un archivo válido (JPG, JPEG, PNG, GIF)).
  const validateFile = (campo) => {
    const field = campo;
    let fileExtension = []
    if (campo.files[0]) {
      fileExtension = campo.files[0].name.split(".").pop().toLowerCase();
    }
    const allowedExt = ["jpg", "jpeg", "png", "gif"];

    let errors = 0;

    if (!campo.files[0] || !allowedExt.includes(fileExtension)) {
      field.classList.add("invalid");
      field.nextElementSibling.classList.add("errorMessages");
      field.nextElementSibling.textContent =
        "Por favor introduce un archivo con extensión válida (JPG, JPEG, PNG, GIF)";
      errors++;
    } else {
      field.classList.remove("invalid");
      field.nextElementSibling.classList.remove("errorMessages");
      field.nextElementSibling.textContent = "Archivo válido";
    }
    return errors;
  };






  //Validación formualario Login
  const formLogin = document.querySelector(".formlogin");
  const email = document.getElementById("email");
  const passwordLogin = document.getElementById("password");
  const emailError = document.getElementById("errorLogin");
  const passwordError = document.getElementById("errorPassLogin");
  const registeredEmailsLog = ["email1@example.com", "email2@example.com"];

  formLogin.addEventListener("submit", function (event) {
    let totalErrors = 0;
    totalErrors = totalErrors + validateEmailLogin(email);
    totalErrors = totalErrors + validatePasswordLogin(passwordLogin);

console.log(totalErrors)
    if (totalErrors > 0) {
      event.preventDefault();
    }
  });

  //Validar email (Debe ser obligatorio y Válido)
  function validateEmailLogin(campo) {
    const field = campo;
    const fieldValue = campo.value.trim();

    //Expresión regular para email
    const emailRegexLogin = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    /*   const emailRegex = fieldValue.includes("@"); */

    if (!fieldValue) {
      field.classList.add("invalid");
      field.nextElementSibling.classList.add("emailError");
      field.nextElementSibling.textContent =
        "El mail es Obligatorio.Por favor introduce un email válido";
      return 1;
    } else if (!emailRegexLogin.test(fieldValue)) {
      // Check si el formato es válido
      field.classList.add("invalid");
      field.nextElementSibling.classList.add("emailError");
      field.nextElementSibling.textContent =
        "Por favor introduce un email válido.";
      return 1;
    } else if (registeredEmailsLog.includes(fieldValue)) {
      // Check si el email ya está registrado
      field.classList.add("invalid");
      field.nextElementSibling.classList.add("emailError");
      field.nextElementSibling.textContent =
        "Este email ya ha sido registrado. Por favor introduce otro email.";
      return 1;
    } else {
      field.classList.remove("invalid");
      field.nextElementSibling.classList.remove("emailError");
      field.nextElementSibling.textContent = "";
      return 0;
    }
  };


  function validatePasswordLogin(password) {
    const passwordL = password.value.trim();

    if (passwordL === "") {
      passwordLogin.classList.add("invalid");
      passwordError.textContent = "La contraseña es obligatoria.";
      return 1;
    } else {
      passwordLogin.classList.remove("invalid");
      errorPassLogin.textContent = "";
      return 0;
    }
  }



console.log("me fui")

});