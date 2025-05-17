let juegos = JSON.parse(localStorage.getItem("juegos")) || [];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function renderJuegos(listaJuegos){
    juegosContainer.innerHTML = "";
    listaJuegos.forEach(juego=> {
        let contenedor = document.createElement("div")
        contenedor.className="games"
        contenedor.innerHTML = `<h3>Juego: ${juego.nombre}</h3>
                                <p>Genero: ${juego.tipo}</p>
                                <p>Duracion: ${juego.tiempo}</p>
                                <p>Precio: $${juego.precio}</p>
                                <button onclick="agregarCarrito('${juego.nombre}')">Seleccionar</button>`
                            //    <button class= "juegoAgregado" id="${juego.nombre}">Agregar</button>`
        juegosContainer.appendChild(contenedor)
    })
}

function agregarCarrito(nombre){
    let juego = juegos.find(juego => juego.nombre == nombre)
    if (juego && !carrito.some(juego => juego.nombre == nombre)){
        carrito.push(juego)
        localStorage.setItem("carrito", JSON.stringify(carrito))
        alert("Juego agregado al carrito")
    }
}

busqueda.onclick = () =>{
    let nombre = nombreInput.value
    let encontrado = juegos.find(buscar => buscar.nombre.toLowerCase() == nombre.toLowerCase() ) || null;
    if (encontrado){
        renderJuegos([encontrado])
    }
    vaciarInput()
} 

busquedaTipo.onclick = () =>{
    let tipo = generoInput.value
    let verificarTipo = juegos.filter(generoJuego => generoJuego.tipo == tipo)
    renderJuegos(verificarTipo)
    vaciarInput()
}

verSeleccionados.onclick=()=>{
   renderJuegos(carrito)
}

ver.onclick=()=>{
   renderJuegos(juegos)
}