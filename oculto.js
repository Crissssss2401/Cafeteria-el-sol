const botonInformacion =
document.getElementById("boton-informacion");

const contenidoExtra =
document.getElementById("contenido-extra");

botonInformacion.addEventListener("click", () => {
  contenidoExtra.classList.toggle("oculto");
  // Cambia la clase "oculto" en el contenido extra
  
if (contenidoExtra.classList.contains("oculto")) {
    // Si el contenido extra está oculto, actualiza el texto del botón y el atributo aria-expanded
  botonInformacion.textContent = "Mostrar más";
  botonInformacion.setAttribute("aria-expanded", "false");
} else {    
    // cambiar el texto del botón para indicar que se puede mostrar menos información y actualizar el atributo aria-expanded a true
  botonInformacion.textContent = "Mostrar menos";
  botonInformacion.setAttribute("aria-expanded", "true");
}
});
