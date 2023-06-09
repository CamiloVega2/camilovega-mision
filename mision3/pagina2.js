const btnvolver = document.getElementById("btnvolver");
const formulario = document.getElementById("formulario");
const btnenviar = document.getElementById("btnenviar");
const nombres = document.getElementById("nombres");
const apellidos = document.getElementById("apellidos");
const area = document.getElementById("area");
const usuario = document.getElementById("usuario");
const edad = document.getElementById("edad");
const direccion = document.getElementById("direccion");
const email = document.getElementById("email");
const cajausuario = document.getElementById("cajausuario");
const cajaarea = document.getElementById("cajaarea");
let datos = [];
let datospersonas = [];
let cont = 1;
let cont2 = -1;
let persona = {};
function enviardatos() {
  if (
    nombres.value != "" &&
    apellidos.value != "" &&
    area.value != "" &&
    usuario.value != "" &&
    edad.value != "" &&
    direccion.value != "" &&
    email.value != ""
  ) {
    datospersonas = JSON.parse(localStorage.getItem(`${cont2}`));
    cont = JSON.parse(localStorage.getItem("cont"));
    if (cont == undefined || cont == null) {
      cont = 1;
      switch (cont) {
        case 1:
          persona.nombre = nombres.value;
          persona.apellido = apellidos.value;
          persona.edad = edad.value;
          persona.direccion = direccion.value;
          persona.email = email.value;
          persona.usuario = usuario.value;
          persona.area = area.value.toLowerCase();
          datos.push(persona);
          localStorage.setItem(`${cont2}`, JSON.stringify(datos));
          localStorage.setItem(`${cont}`, JSON.stringify(persona));
          cont += 1;
          localStorage.setItem("cont", `${cont}`);
          open("index.html", "_self");
          break;
      }
    } else {
      cont = JSON.parse(localStorage.getItem("cont"));
      datospersonas = JSON.parse(localStorage.getItem(`${cont2}`));
      switch (cont) {
        default:
          const verificar = datospersonas.every(
            (el) => el.usuario != `${usuario.value}`
          );
          if (verificar) {
            datos = datospersonas
            persona.nombre = nombres.value;
            persona.apellido = apellidos.value;
            persona.edad = edad.value;
            persona.direccion = direccion.value;
            persona.email = email.value;
            persona.usuario = usuario.value;
            persona.area = area.value.toLowerCase();
            datos.push(persona);
            localStorage.setItem(`${cont2}`, JSON.stringify(datos));
            localStorage.setItem(`${cont}`, JSON.stringify(persona));
            cont += 1;
            localStorage.setItem("cont", `${cont}`);
            open("index.html", "_self");
          } else {
            cajausuario.innerText = `Este usuario ya esta registrado`
            usuario.value = ""
          }
      }
    }
  }
}

btnvolver.addEventListener("click", () => {
  window.open("index.html", "_self");
});
btnenviar.addEventListener("click", enviardatos);
formulario.addEventListener("submit", (ev) => {
  ev.preventDefault();
});
