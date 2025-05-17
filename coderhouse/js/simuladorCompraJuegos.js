
let juegos = JSON.parse(localStorage.getItem("juegos")) || [];
class Juego {
    constructor(nombre, tipo, tiempo){
        this.nombre = nombre
        this.tipo = tipo
        this.tiempo = tiempo
        this.precio = precio
    }
}
let juegosContainer = document.getElementById("games")

let nombreInput =document.getElementById("nombre")
let tipoInput = document.getElementById("tipo")
let tiempoInput = document.getElementById("tiempo")
let precioInput = document.getElementById("precio");
let generoInput = document.getElementById("generoBuscar")
let salida = document.getElementById("salida")

let agregar =document.getElementById("agregar")
let ver = document.getElementById("ver")
let busqueda = document.getElementById("busqueda")
let borrar = document.getElementById("borrar")
let busquedaTipo = document.getElementById("busquedaTipo")
let editar = document.getElementById("editar")

function vaciarInput (){
    nombreInput.value = "";
    tipoInput.value = "";
    tiempoInput.value = "";
    precioInput.value = "";
    busquedaTipo.value ="";
}
//funcion para agregar juego a la lista de juegos

function renderJuegos(listaJuegos){
    juegosContainer.innerHTML = "";
    listaJuegos.forEach(juego=> {
        let contenedor = document.createElement("div")
        contenedor.className="games"
        contenedor.innerHTML = `<h3>Juego: ${juego.nombre}</h3>
                                <p>Genero: ${juego.tipo}</p>
                                <p>Duracion: ${juego.tiempo}</p>
                                <p>Precio: $${juego.precio}</p>`
                            //    <button class= "juegoAgregado" id="${juego.nombre}">Agregar</button>`
        juegosContainer.appendChild(contenedor)
    })
}
renderJuegos(juegos)
function almacenar (){
    localStorage.setItem("juegos",JSON.stringify(juegos))
}

agregar.onclick =()=>{
    let nombre = nombreInput.value 
    let tipo = tipoInput.value
    let tiempo = tiempoInput.value
    let precio = precioInput.value;
    if (!nombre || !tipo || !tiempo || !precio) return;

    if (juegos.some(juegoExiste => juegoExiste.nombre == nombre)){
    }
    let elJuego = new Juego(nombre,tipo,tiempo)
    juegos.push(elJuego)
    almacenar();
    vaciarInput();
        
} 
ver.onclick=()=>{
   renderJuegos(juegos)
}
//funcion para buscar los juegos que comparten tipo
busquedaTipo.onclick = () =>{
    let tipo = generoInput.value
    let verificarTipo = juegos.filter(generoJuego => generoJuego.tipo == tipo)
    renderJuegos(verificarTipo)
    vaciarInput()
}

editar.onclick = () => {
    let editar = nombreInput.value
    let juego = juegos.find(buscando => buscando.nombre == editar)
    if (juego){
        juego.tipo =tipoInput.value
        juego.tiempo =tiempoInput.value
        juego.precio = precioInput.value
        almacenar()
        renderJuegos(juegos)
        vaciarInput()
    }
    else{
        vaciarInput()
        return
    }
    
}


//funcion para buscar objeto juego
busqueda.onclick = () =>{
    let nombre = nombreInput.value
    let encontrado = juegos.find(buscar => buscar.nombre == nombre ) || null;
    if (encontrado){
        renderJuegos([encontrado])
    }
    vaciarInput()
} 

 borrar.onclick=()=>{
    juegos =[]
    localStorage.removeItem("juegos")
    juegosContainer.innerHTML = "";
    vaciarInput()
}

fetch("./Lista Juegos/listaJuegos.json")
    .then(response => response.json())
    .then(data => {
        juegos = data;
        renderJuegos(juegos);
    })
    .catch(error => console.error("Error al cargar los juegos:", error));

// let input = document.getElementById("input")
// input.onkeyup = () =>{

// }
