console.log("El archivo form-product.js se ha cargado correctamente.");

window.addEventListener("load", () => {
    console.log("entró correctamente.");
let errors=0
    //Validacion Formulario de PRODUCTOS

    // Obtener los elementos del formulario
    const form = document.querySelector('form.formNewProduct');
    const nameInput = document.getElementById('name');
    const priceInput = document.getElementById('price');
    const descriptionInput = document.getElementById('description');
    const colorsInput = document.getElementById('colors');
    const sizesInput = document.getElementById('sizes');
    const submitButton = document.getElementById('submit-button');
  
    function validarFormulario(evento) {
    // Evitar que se envíe el formulario por defecto
    evento.preventDefault();
    
   
    if (nameInput.value.length < 4) {
        nameInput.classList.add('is-invalid');
        errors+=1;
        // Obtener el mensaje de error del servidor y mostrarlo en la etiqueta correspondiente
        const errorMsg = document.querySelector('#name + .errorMsg');
        errorMsg.innerText = 'El nombre es OBLIGATORIO, debe tener AL MENOS 5 caracteres';
    } else {
        errors-=1;

        nameInput.classList.remove('is-invalid');
        // Limpiar el mensaje de error
        const errorMsg = document.querySelector('#name + .errorMsg');
        errorMsg.innerText = '';

            // Validar el campo "name"
        /* if (nameInput.value === '') {
            alert('Por favor, introduce un nombre para el producto.');
            return;
        } */
    } 
    
    // Validar el campo "description"
    if (descriptionInput.value.length < 5) {
        descriptionInput.classList.add('is-invalid');
        // Obtener el mensaje de error del servidor y mostrarlo en la etiqueta correspondiente
        const errorMsg = document.querySelector('#description + .errorMsg');
        errorMsg.innerText = 'La descripcion es OBLIGATORIA, debe tener AL MENOS 5 caracteres';
    } else {
        descriptionInput.classList.remove('is-invalid');
        // Limpiar el mensaje de error
        const errorMsg = document.querySelector('#description + .errorMsg');
        errorMsg.innerText = '';
    }

    // Validar el campo "colors"
    if (!colorsInput.checked) {
        // Obtener el mensaje de error del servidor y mostrarlo en la etiqueta correspondiente
        const errorMsg = document.querySelector('.colorMsg');
        errorMsg.classList.add('is-invalid');
        errorMsg.classList.add('chkerrorMsg');
        errorMsg.innerText = 'Debe seleccionar un color';
    } else {
        
        // Limpiar el mensaje de error
        const errorMsg = document.querySelector('.colorMsg');
        errorMsg.classList.remove('is-invalid');
        errorMsg.classList.remove('chkerrorMsg');
        
        errorMsg.innerText = 'Seleccione un color:';
    }
  
 // Validar el campo "sizes"
 if (!sizesInput.checked) {
    // Obtener el mensaje de error del servidor y mostrarlo en la etiqueta correspondiente
    const errorMsg = document.querySelector('.sizeMsg');
    errorMsg.classList.add('is-invalid');
    errorMsg.classList.add('chkerrorMsg');
    errorMsg.innerText = 'Debe seleccionar un talle';
} else {
    
    // Limpiar el mensaje de error
    const errorMsg = document.querySelector('.sizeMsg');
    errorMsg.classList.remove('is-invalid');
    errorMsg.classList.remove('chkerrorMsg');
    
    errorMsg.innerText = 'Seleccione un talle:';
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
        const errorMsg = document.querySelector('#price + .errorMsg');
        errorMsg.innerText = 'El precio es OBLIGATORIO, debe tener AL MENOS 2 caracteres';
      
    } else {
        priceInput.classList.remove('is-invalid');
        // Limpiar el mensaje de error
        const errorMsg = document.querySelector('#price + .errorMsg');
        errorMsg.innerText = '';
    } 
    if (errors==0) {
        
    
    // Si todos los campos son válidos, enviar el formulario al servidor
    form.submit();}
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
