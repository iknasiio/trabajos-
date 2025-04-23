document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener valores
    const nombre = document.getElementById('Nombre').value;
    const email = document.getElementById('Email').value;
    const mensaje = document.getElementById('Mensaje').value;
    
    // Validar campos
    let hayError = false;
    
    if (nombre.trim() === '') {
        document.getElementById('errorNombre').textContent = 'El nombre es requerido';
        hayError = true;
    } else {
        document.getElementById('errorNombre').textContent = '';
    }
    
    if (email.trim() === '') {
        document.getElementById('errorEmail').textContent = 'El email es requerido';
        hayError = true;
    } else if (!email.includes('@')) {
        document.getElementById('errorEmail').textContent = 'El email debe contener @';
        hayError = true;
    } else {
        document.getElementById('errorEmail').textContent = '';
    }
    
    if (mensaje.trim() === '') {
        document.getElementById('errorMensaje').textContent = 'El mensaje es requerido';
        hayError = true;
    } else {
        document.getElementById('errorMensaje').textContent = '';
    }
    
    if (!hayError) {
        document.getElementById('mensajeexito').textContent = '¡Mensaje enviado con éxito!';
        document.getElementById('formulario').reset();
    } else {
        document.getElementById('mensajeexito').textContent = '';
    }
}); 