let juegosContainer = document.getElementById("games")

let nombreInput =document.getElementById("nombre")
let tipoInput = document.getElementById("tipo")
let tiempoInput = document.getElementById("tiempo")
let precioInput = document.getElementById("precio");
let generoInput = document.getElementById("generoBuscar")
//let salida = document.getElementById("salida")

let agregar =document.getElementById("agregar")
let ver = document.getElementById("ver")
let verSeleccionados = document.getElementById("verSeleccionados")
let busqueda = document.getElementById("busqueda")
let borrar = document.getElementById("borrar")
let borrarSeleccionados = document.getElementById("borrarSeleccionados")
let busquedaTipo = document.getElementById("busquedaTipo")
let editar = document.getElementById("editar")

function vaciarInput (){
    nombreInput.value = "";
    tipoInput.value = "";
    tiempoInput.value = "";
    precioInput.value = "";
    generoInput.value ="";
}