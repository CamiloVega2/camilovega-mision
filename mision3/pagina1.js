const buscarusuario = document.getElementById("buscarusuario");
const btncrearusuario = document.getElementById("btncrearusuario");
const tabla = document.getElementById("tabla");
let cont = 0;
let cont2 = -1;
let datospersonas = JSON.parse(localStorage.getItem(`${cont2}`));
const areas = [];
let areaa = "";
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
      for (let i = 0; i < datospersonas.length; i++) {
        if (!areas.includes(`${datospersonas[i].area}`)) {
          areaa = datospersonas[i].area;
          areas.push(areaa);
          areaa = "";
        }
      }
      for (let j = 1; j < datospersonas.length; j++) {
        const verificar = areas.some((el) => el == datospersonas[j].area);
        console.log(verificar);
        if (verificar) {
          cont += 1;
          if (cont == areas.length) {
            tabla.innerHTML += ` <tr class="flex w-full">
          <td class="w-[20%] flex justify-center items-center">${areas[
            j
          ].toUpperCase()}</td>
          <td
            id= "nombre${areas[j]}"
            class="w-[20%] flex justify-center  items-center flex-col"
          ></td>
          <td
            id= "usuario${areas[j]}"
            class="w-[20%] flex justify-center items-center flex-col"
          ></td>
          <td
            id= "email${areas[j]}"
            class="w-[20%] flex justify-center   items-center flex-col"
          ></td>
          <td
            id="edad${areas[j]}"
            class="w-[20%] flex justify-center    items-center flex-col"
          ></td>
        </tr>
        `;
            const nombre = document.getElementById(`nombre${areas[j]}`);
            const usuario = document.getElementById(`usuario${areas[j]}`);
            const email = document.getElementById(`email${areas[j]}`);
            const edad = document.getElementById(`edad${areas[j]}`);
            nombre.innerHTML = `<p>${datospersonas[j].nombre}</p>`;
            usuario.innerHTML = `<p>${datospersonas[j].usuario}</p>`;
            email.innerHTML = `<p>${datospersonas[j].email}</p>`;
            edad.innerHTML = `<p>${datospersonas[j].edad}</p>`;
            cont = 0
            break;
          }
        } else {
          const nombre = document.getElementById(`nombre${areas[j]}`);
          const usuario = document.getElementById(`usuario${areas[j]}`);
          const email = document.getElementById(`email${areas[j]}`);
          const edad = document.getElementById(`edad${areas[j]}`);
          nombre.innerHTML = `<p>${datospersonas[j].nombre}</p>`;
          usuario.innerHTML = `<p>${datospersonas[j].usuario}</p>`;
          email.innerHTML = `<p>${datospersonas[j].email}</p>`;
          edad.innerHTML = `<p>${datospersonas[j].edad}</p>`;
        }
      }
    }
  }
}
