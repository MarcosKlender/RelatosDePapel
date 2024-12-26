import { BookCard } from "./BookCard"

export function BookList({ books, searchTerm, addToCart }) {
    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
                filteredBooks.length > 0 ? (
                    filteredBooks.map(book => <BookCard key={book.id} book={book} addToCart={addToCart} />)
                ) : (
                    <div className="flex flex-col items-center col-span-full">
                        <p>No se han encontrado resultados para tu búsqueda "{searchTerm}"</p>
                        <p>Por favor, prueba con otros términos.</p>
                    </div>
                )
            }
        </section>
    )
}