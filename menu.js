const botonMenu = document.getElementById("boton-menu");
const menu = document.getElementById("menu");


botonMenu.addEventListener("click", () => {

  menu.classList.toggle("activo"); // Cambia la clase "activo" en el menú

  const menuEstaAbierto = menu.classList.contains("activo"); // Verifica si el menú está abierto

  botonMenu.setAttribute("aria-expanded", menuEstaAbierto); // Actualiza el atributo aria-expanded según el estado del menú

});


const botonArriba = 
document.getElementById("boton-arriba");
botonArriba.addEventListener("click", () => {
  //window scroll es para avisar a la ventana que se usará una propiedad scroll
  window.scrollTo({
    // dirigirá a la parte superior
    top: 0,
    //movimiento suave
    behavior: "smooth"
  });
});