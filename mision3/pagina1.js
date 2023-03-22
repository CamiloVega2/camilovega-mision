const buscarusuario = document.getElementById("buscarusuario")
const btncrearusuario = document.getElementById("btncrearusuario")
const nombredocencia = document.getElementById("nombredocencia")
const edaddocencia = document.getElementById("edaddocencia")
const emaildocencia = document.getElementById("emaildocencia")
const usuariodocencia = document.getElementById("usuariodocencia")
const nombretecnologia = document.getElementById("nombretecnologia")
const edadtecnologia = document.getElementById("edadtecnologia")
const emailtecnologia = document.getElementById("emailtecnologia")
const usuariotecnologia = document.getElementById("usuariotecnologia")
const nombremarketing = document.getElementById("nombremarketing")
const edadmarketing = document.getElementById("edadmarketing")
const emailmarketing = document.getElementById("emailmarketing")
const usuariomarketing = document.getElementById("usuariomarketing")
let cont = 0
let cont2 = -1
let objeto = JSON.parse(localStorage.getItem(`${cont}`))
let datospersonas = JSON.parse(localStorage.getItem(`${cont2}`))
for(let i = 0;i < datospersonas.length;i++){
    if(datospersonas[i].area == "docencia"){
        nombredocencia.innerHTML += `<label>${datospersonas[i].nombre}</label>`
        edaddocencia.innerHTML += `<label>${datospersonas[i].edad}</label>`
        emaildocencia.innerHTML += `<label>${datospersonas[i].email}</label>`
        usuariodocencia.innerHTML += `<label>${datospersonas[i].usuario}</label>`
    }else{
        if(datospersonas[i].area == "tecnologia"){
            nombretecnologia.innerHTML += `<label>${datospersonas[i].nombre}</label>`
            edadtecnologia.innerHTML += `<label>${datospersonas[i].edad}</label>`
            emailtecnologia.innerHTML += `<label>${datospersonas[i].email}</label>`
            usuariotecnologia.innerHTML += `<label>${datospersonas[i].usuario}</label>`
        }else{
            nombremarketing.innerHTML += `<label>${datospersonas[i].nombre}</label>`
            edadmarketing.innerHTML += `<label>${datospersonas[i].edad}</label>`
            emailmarketing.innerHTML += `<label>${datospersonas[i].email}</label>`
            usuariomarketing.innerHTML += `<label>${datospersonas[i].usuario}</label>`
        }
    }
}
