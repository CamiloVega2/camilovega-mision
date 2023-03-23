const buscarusuario = document.getElementById("buscarusuario");
const btncrearusuario = document.getElementById("btncrearusuario");
const tabla = document.getElementById("tabla");
let cont = 0;
let cont2 = -1;
let objeto = JSON.parse(localStorage.getItem(`${cont}`));
let datospersonas = JSON.parse(localStorage.getItem(`${cont2}`));
console.log(datospersonas.length);
if (datospersonas.length > 0) {
  for (let i = 0; i < datospersonas.length; i++) {
    if (i == 0) {
      tabla.innerHTML += ` <tr class="flex w-full">
        <td class="w-[20%] flex justify-center items-center">${datospersonas[
          i
        ].area.toUpperCase()}</td>
        <td
          id= "nombre${datospersonas[i].area}"
          class="w-[20%] flex justify-center  items-center flex-col"
        ></td>
        <td
          id= "usuario${datospersonas[i].area}"
          class="w-[20%] flex justify-center items-center flex-col"
        ></td>
        <td
          id= "email${datospersonas[i].area}"
          class="w-[20%] flex justify-center   items-center flex-col"
        ></td>
        <td
          id="edad${datospersonas[i].area}"
          class="w-[20%] flex justify-center    items-center flex-col"
        ></td>
      </tr>
      `;
      const nombre = document.getElementById(`nombre${datospersonas[i].area}`);
      const usuario = document.getElementById(
        `usuario${datospersonas[i].area}`
      );
      const email = document.getElementById(`email${datospersonas[i].area}`);
      const edad = document.getElementById(`edad${datospersonas[i].area}`);
      nombre.innerHTML = `<p>${datospersonas[i].nombre}</p>`;
      usuario.innerHTML = `<p>${datospersonas[i].usuario}</p>`;
      email.innerHTML = `<p>${datospersonas[i].email}</p>`;
      edad.innerHTML = `<p>${datospersonas[i].edad}</p>`;
    } else {
      for (let j = 0; j < datospersonas.length; j++) {
        if (datospersonas[j].area != datospersonas[i].area) {
          tabla.innerHTML += ` <tr class="flex w-full">
        <td class="w-[20%] flex justify-center items-center">${datospersonas[
          i
        ].area.toUpperCase()}</td>
        <td
          id= "nombre${datospersonas[i].area}"
          class="w-[20%] flex justify-center  items-center flex-col"
        ></td>
        <td
          id= "usuario${datospersonas[i].area}"
          class="w-[20%] flex justify-center items-center flex-col"
        ></td>
        <td
          id= "email${datospersonas[i].area}"
          class="w-[20%] flex justify-center   items-center flex-col"
        ></td>
        <td
          id="edad${datospersonas[i].area}"
          class="w-[20%] flex justify-center    items-center flex-col"
        ></td>
      </tr>
      `;
          const nombre = document.getElementById(
            `nombre${datospersonas[i].area}`
          );
          const usuario = document.getElementById(
            `usuario${datospersonas[i].area}`
          );
          const email = document.getElementById(
            `email${datospersonas[i].area}`
          );
          const edad = document.getElementById(`edad${datospersonas[i].area}`);
          nombre.innerHTML = `<p>${datospersonas[i].nombre}</p>`;
          usuario.innerHTML = `<p>${datospersonas[i].usuario}</p>`;
          email.innerHTML = `<p>${datospersonas[i].email}</p>`;
          edad.innerHTML = `<p>${datospersonas[i].edad}</p>`;
          break;
        } else {
          const nombre = document.getElementById(
            `nombre${datospersonas[i].area}`
          );
          const usuario = document.getElementById(
            `usuario${datospersonas[i].area}`
          );
          const email = document.getElementById(
            `email${datospersonas[i].area}`
          );
          const edad = document.getElementById(`edad${datospersonas[i].area}`);
          nombre.innerHTML += `<p>${datospersonas[i].nombre}</p>`;
          usuario.innerHTML += `<p>${datospersonas[i].usuario}</p>`;
          email.innerHTML += `<p>${datospersonas[i].email}</p>`;
          edad.innerHTML += `<p>${datospersonas[i].edad}</p>`;
          break
        }
      }
    }
  }
}
