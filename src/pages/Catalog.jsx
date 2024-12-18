import { BookList } from "../components/BookList"
import { books } from "../utils/Books"

export function Catalog({ searchTerm }) {
    return (
        <>
            <h1 className="page-title">Catálogo de Libros</h1>
            <BookList books={books} searchTerm={searchTerm} />
        </>
    )
}