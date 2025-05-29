# ProyectoFinal-Tallaferro-Javier
simulador tienda juegos

El proyecot es un simulador de tienda de juegos desarrollado, orientado a la gestión y simulación de compra de videojuegos tanto para administradores como para clientes.

## Funcionalidad principal

- **Pantalla de inicio:** Permite seleccionar el perfil de acceso: Cliente o Administrador.

- **Login de administrador:** El administrador debe autenticarse con usuario y contraseña para acceder al panel de gestión.

- **Panel Administrador:**  
El Adminstrador podra tener las siguientes cualidades:
  - Visualizar la lista de juegos disponibles.
  - Agregar nuevos juegos con su nombre, tipo, duración y precio.
  - Editar los datos de juegos existentes.
  - Elimina juegos individuales o toda la lista.
  - Busca juegos por nombre o por tipo.

- **Panel Cliente:**  
El Cliente podra tener las siguientes cualidades:
  - Visualiza el catálogo de juegos.
  - Busca juegos por nombre o tipo.
  - Selecciona juegos para agregarlos a un carrito de compras simulado.
  - Visualiza los juegos seleccionados en el carrito.

## Almacenamiento

- Los datos de juegos y del carrito se almacenan en el navegador usando `localStorage`.
- Los usuarios, administradores y la lista inicial de juegos se cargan desde archivos JSON de la carpeta Lista Juegos.

## Estructura (carpetas)

- **HTML:** Define la estructura visual de las pantallas (inicio, login, panel administrador y cliente). Estan en la carpeta HTML
- **JavaScript:** Controla la lógica de interacción, manipulación de datos y renderizado  de la información. Los archivos estan en la carpeta js.
- **Archivos JSON:** Proveen datos iniciales de usuarios y juegos.

