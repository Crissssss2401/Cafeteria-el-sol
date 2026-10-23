const botonMenu = document.getElementById("boton-menu");
const menu = document.getElementById("menu");

botonMenu.addEventListener("click", () => {

  menu.classList.toggle("activo");

  const menuEstaAbierto = menu.classList.contains("activo");

  botonMenu.setAttribute("aria-expanded", menuEstaAbierto);

});