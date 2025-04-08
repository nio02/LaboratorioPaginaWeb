
//Agregar mensaje de bienvenida
document.getElementById("enviar").addEventListener('click', () => {
    //Evitar recarga de página por defecto.
    event.preventDefault();
    const input = document.getElementById("nombre-invitado");
    //Quitar espacios al inicio o final
    const texto = input.value.trim(); 

    if (texto){
        const mensaje = document.createElement('p');
        mensaje.textContent = `¡Hola, ${texto}!`;
        document.getElementById("contacto").appendChild(mensaje);
        //Devuelve el formulario a cero
        input.value = ''; 
    }
})