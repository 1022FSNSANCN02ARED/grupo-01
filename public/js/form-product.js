window.addEventListener("load", () => {

    //Validacion Formulario de PRODUCTOS

    // Obtener los elementos del formulario
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const priceInput = document.getElementById('price');
    const descriptionInput = document.getElementById('description');
    const submitButton = document.getElementById('submit-button');
  
    function validarFormulario(evento) {
    // Evitar que se envíe el formulario por defecto
    evento.preventDefault();
    
   
    if (nameInput.value.length < 4) {
        nameInput.classList.add('is-invalid');
        // Obtener el mensaje de error del servidor y mostrarlo en la etiqueta correspondiente
        const errorMsg = document.querySelector('#nameInput + .errorMsg');
        errorMsg.innerText = 'El nombre es OBLIGATORIO, debe tener AL MENOS 5 caracteres';
    } else {
        nameInputclassList.remove('is-invalid');
        // Limpiar el mensaje de error
        const errorMsg = document.querySelector('#nameInput+ .errorMsg');
        errorMsg.innerText = '';

            // Validar el campo "name"
        /* if (nameInput.value === '') {
            alert('Por favor, introduce un nombre para el producto.');
            return;
        } */
    } 
    
    // Validar el campo "description"
    if (descriptionInput.value.length < 20) {
        descriptionInput.classList.add('is-invalid');
        // Obtener el mensaje de error del servidor y mostrarlo en la etiqueta correspondiente
        const errorMsg = document.querySelector('#descriptionInput + .errorMsg');
        errorMsg.innerText = 'La descripcion es OBLIGATORIA, debe tener AL MENOS 20 caracteres';
    } else {
        descriptionInput.remove('is-invalid');
        // Limpiar el mensaje de error
        const errorMsg = document.querySelector('#descriptionInput+ .errorMsg');
        errorMsg.innerText = '';
    }

  
    // Validar el campo "precio"
    
    // Validar que el campo "precio" sea un número mayor que cero
    if (isNaN(parseFloat(priceInput.value)) || parseFloat(priceInput.value) <= 0) {
        alert('El precio debe ser un número mayor que cero.');
        return;
    }

    if (priceInput.value.length < 2) {
        priceInput.classList.add('is-invalid');
        // Obtener el mensaje de error del servidor y mostrarlo en la etiqueta correspondiente
        const errorMsg = document.querySelector('#priceInput + .errorMsg');
        errorMsg.innerText = 'El precio es OBLIGATORIO, debe tener AL MENOS 2 caracteres';
    } else {
        priceInput.remove('is-invalid');
        // Limpiar el mensaje de error
        const errorMsg = document.querySelector('#priceInput+ .errorMsg');
        errorMsg.innerText = '';
    } 
    
    // Si todos los campos son válidos, enviar el formulario al servidor
    form.submit();
    }
  
    // Asociar la función de validación al evento "submit" del formulario
    submitButton.addEventListener('click', validarFormulario);
  })


  //la función validarFormulario se encarga de validar los campos del formulario
  // y evitar que se envíe al servidor si alguno de ellos no es válido. 
  //Si todos los campos son válidos, la función llama al método submit 
  //del formulario para enviarlo al servidor. 
  //También se utiliza el método preventDefault del objeto evento para evitar que el 
  //formulario se envíe automáticamente al pulsar el botón "Crear/Modificar".
