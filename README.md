# RelatosDePapel
Cross-cutting project called "Relatos de Papel", made in React.

## Flujo de la búsqueda
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

## Flujo del carrito
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