<a id="readme-top"></a>

<div align="center">

![React](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png)

</div>

<h1 align="center">Relatos de Papel</h1>

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

<!-- ![Screenshot](/public/images/screenshot.webp) -->

## Índice

  <ol>
    <li><a href="#acerca-del-proyecto">Acerca del Proyecto</a></li>
    <li><a href="#flujo-de-la-búsqueda">Flujo de la Búsqueda</a></li>
    <li><a href="#flujo-del-carrito">Flujo del Carrito</a></li>
  </ol>


## Acerca del Proyecto

Proyecto transversal llamado "Relatos de Papel" de la Maestría de Ingeniería de Software y Sistemas Informáticos, Universidad Internacional de La Rioja (UNIR).

Puedes acceder a la videomemoria a través de [este enlace](https://www.youtube.com/watch?v=vzVQBS3oXj0).

<p align="right"><a href="#readme-top">Volver al índice ⬆️</a></p>


## Flujo de la Búsqueda
```
Header (escucha el evento del input)
        ↓
Actualiza el searchTerm en App
        ↓
Redirige a la página Catalog
        ↓
Catalog pasa el searchTerm a BookList
        ↓
BookList filtra libros y muestra resultados
```

<p align="right"><a href="#readme-top">Volver al índice ⬆️</a></p>


## Flujo del Carrito
```
Función addToCart
        ↓
¿El libro ya está en el carrito?
        ↓
(SI) Incrementa cantidad : (NO) Agrega el libro
        ↓
Actualiza el carrito
        ↓
Muestra cantidad total (cartItemCount)
```
```
Función removeFromCart
        ↓
Elimina el libro por su ID
        ↓
Actualiza el carrito
        ↓
Muestra cantidad total (cartItemCount)
```

<p align="right"><a href="#readme-top">Volver al índice ⬆️</a></p>