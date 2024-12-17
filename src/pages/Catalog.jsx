import { BookList } from "../components/BookList"

export function Catalog() {
    return (
        <>
            <h1 className="page-title">Catálogo de Libros</h1>
            <BookList />
        </>
    )
}