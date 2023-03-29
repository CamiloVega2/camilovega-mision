const main = async () => {
  const alerta1 = document.getElementById("alerta1");
  const alerta2 = document.getElementById("alerta2");
  const correo = document.getElementById("correo");
  const cajacorreo = document.getElementById("cajacorreo");
  const cajaapodo = document.getElementById("cajaapodo");
  const apodo = document.getElementById("apodo");
  const user = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await user.json();
  let verificar = "";
  localStorage.setItem("datos", JSON.stringify(data));
  console.log(data);
};
main();
function validar() {
  let cont = 0;
  verificar = JSON.parse(localStorage.getItem("datos"));

  verificar.forEach((el) => {
    if (el.email == correo.value && el.username == apodo.value) {
      open("index2.html", "_self");
    } else {
      cont += 1;
      if (
        el.username != apodo.value &&
        el.email != correo.value &&
        cont == verificar.length
      ) {
        alerta2.innerHTML = `<p class = "text-xs text-red-600 font-bold">Verifique sus credenciales</p>`;
        correo.value = "";
        apodo.value = "";
      }
    }
  });
}
const btn = document.getElementById("btn");
btn.addEventListener("click", validar);
