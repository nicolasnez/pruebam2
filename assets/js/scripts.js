

$(document).ready(function() {
    $('#enviar').click(function() {
        Swal.fire({
            icon: 'success',
            title: '¡Mensaje enviado!',
            text: 'A la brevedad nos pondremos en contacto contigo.',
            confirmButtonText: 'Aceptar'
        });
    });
});