async function validacion(username, password) {
    try {
        let administrador = await fetch("../Lista Juegos/listaUsuario.json")
        if (!administrador.ok) throw new Error("No hay usuarios")
        let data = await administrador.json()
        let usuario = data.usuarios.find(user => user.username == username && user.password == password)
        return usuario
        } catch (error) {
            alert("Error al cargar los usuarios", error)
        return false
        }
}

login.onclick = async () => {
    try {
        let user = username.value
        let clave = password.value
        let usuario = await validacion(user, clave)
        if (usuario) {
            alert("Bienvenido " + user)
        } else {
            alert("Usuario o contraseña incorrectos")
        }
    } catch (error) {
        alert("Ocurrió un error durante el inicio de sesión")
    }
}