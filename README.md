# RelatosDePapel
Cross-cutting project called "Relatos de Papel", made in React.

# Flujo de la búsqueda

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