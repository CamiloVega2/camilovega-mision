let persona = {nombre:"camilo",usuario:"cagordoca"}
let persona2 = {nombre:"javier",usuario:"cargo"}
const array = [persona,persona2]
let zunona = "zunona"

const verificar = array.every(el =>  el.usuario != "zunona")
console.log(verificar);
console.log(array);