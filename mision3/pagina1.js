const buscarusuario = document.getElementById("buscarusuario")
const btncrearusuario = document.getElementById("btncrearusuario")
let cont = 0
let objeto = JSON.parse(localStorage.getItem(`${cont}`))

btncrearusuario.addEventListener("click",()=>{
    window.open("index2.html","_self")
})