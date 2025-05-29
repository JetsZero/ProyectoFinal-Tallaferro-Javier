# ProyectoFinal-Tallaferro-Javier
simulador tienda juegos

El proyecot es un simulador de tienda de juegos desarrollado, orientado a la gestión y simulación de compra de videojuegos tanto para administradores como para clientes.

## Funcionalidad principal

- **Pantalla de inicio:** Permite seleccionar el perfil de acceso: Cliente o Administrador. Esto ocurre a traves del onclick existente en la carpeta inicio de HTML.

- **Login de administrador:** En caso de haber seleccionado administrador, debera autenticarse con usuario y contraseña para acceder al panel de gestión, esto se aplica a traves de la funcion validacion que tiene manejo de errores para la verificacion del usuarion y la contraseña que lo comparara con los datos almacenados en el archivo JSON. En caso de error se  mostrara un mensaje y tendra la posibilidad de regresar a la pantalla de inicio o intentarlo de nuevo.

- **Panel Administrador:**  
El Adminstrador podra tener las siguientes cualidades:
  - Visualizar la lista de juegos disponibles.
  - Agregar nuevos juegos con su nombre, tipo, duración y precio.
  - Editar los datos de juegos existentes.
  - Elimina juegos individuales o toda la lista.
  - Busca juegos por nombre o por tipo.
  Todas estas funciones se gestionan mendiante funciones de JS y actualizan los datos en localStorage.

- **Panel Cliente:**  
El Cliente podra tener las siguientes cualidades:
  - Visualiza el catálogo de juegos.
  - Busca juegos por nombre o tipo.
  - Selecciona juegos para agregarlos a un carrito de compras simulado.
  - Visualiza los juegos seleccionados en el carrito.
  Todas estas funciones se gestionan mendiante funciones de JS y actualizan los datos dependiendo de la seleccion realizada.

## Almacenamiento

- Los datos de juegos y del carrito se almacenan en el navegador usando `localStorage`.
- Los usuarios, administradores y la lista inicial de juegos se cargan desde archivos JSON de la carpeta Lista Juegos.

## Estructura (carpetas)

- **HTML:** Define la estructura visual de las pantallas (inicio, login, panel administrador y cliente). Estan en la carpeta HTML
- **JavaScript:** Controla la lógica de interacción, manipulación de datos y renderizado  de la información. Los archivos estan en la carpeta js.
- **Archivos JSON:** Proveen datos iniciales de usuarios y juegos.

