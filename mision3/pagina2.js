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
const cajausuario = document.getElementById("cajausuario")
let cont = 0 
const persona = {}
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
    if (
      area.value.toLowerCase() == "docencia" ||
      area.value.toLowerCase() == "marketing" ||
      area.value.toLowerCase() == "tecnologia"
    ) {
      if (
        localStorage.getItem(
          `${usuario.value}` !== undefined &&
            localStorage.getItem(`${usuario.value}`)
        )
      ) {cajausuario.innerHTML += `<p>Este usuario ya esta registrado</p>`
      usuario.value = ""
      }else{
        persona.nombre = nombres.value
        persona.apellido = apellidos.value
        persona.edad = edad.value
        persona.direccion = direccion.value
        persona.email = email.value
        persona.usuario = usuario.value
        localStorage.setItem(`${cont}`, JSON.stringify(persona))
        window.open("index.html","_self")
      }
    }
  }
}

btnvolver.addEventListener("click", () => {
  window.open("index.html", "_self");
});
btnenviar.addEventListener("click",enviardatos);
formulario.addEventListener("submit", (ev) => {
  ev.preventDefault();
});
