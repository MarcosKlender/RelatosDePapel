import { books } from "../utils/Books"
import { BookCard } from "./BookCard"

export function BookList() {
    return (
        <section className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {books.map(book => <BookCard key={book.id} book={book} />)}
        </section>
    )
}