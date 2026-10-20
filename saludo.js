 //documetn.getElementByID recuupera el elemento cun ID especificado
        document.getElementById("miformulario").addEventListener("submit", function(evento) {

            evento.preventDefault(); //previene el comportamiento por defecto del formulario
            let nombre= document.getElementById("nombre").value; //recupera el valor del input con ID nombre
            console.log("El nombre Ingresado es: " + nombre); //muestra en consola el valor del input con ID nombre
        });
  
    const formulario = document.getElementById("miformulario");
        const campoNombre = document.getElementById("nombre");
        const campoMensaje = document.getElementById("mensaje");
        const respuesta = document.getElementById("respuesta");

        formulario.addEventListener("submit", function(evento){
            evento.preventDefault(); //previene el comportamiento por defecto del formulario

            const nombre = campoNombre.value.trim(); //recupera el valor del input con ID nombre y elimina los espacios en blanco
            const mensaje = campoMensaje.value.trim(); //recupera el valor del input con ID mensaje y elimina los espacios en blanco

            if(mensaje.length > 10){
                const saludo = "¡Hola, " + nombre + "!";
             respuesta.textContent = saludo + " Gracias por tu mensaje: " + mensaje; //muestra en el parrafo con ID respuesta el saludo y el mensaje
               
            }else{
             respuesta.textContent = "El mensaje debe tener al menos 10 caracteres."; //muestra en el parrafo con ID respuesta el mensaje de error
            }

          

        });

