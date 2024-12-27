import { Link } from "react-router-dom"
import { BookCard } from "./BookCard"
import { books } from "../utils/Books"

export function HomeTop({ addToCart }) {
    const bestSellers = (books.slice(-5, -1)).reverse()

    return (
        <section>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Los más vendidos</h2>
                <Link to={'/catalog'} className="hover:underline">Ver más ➡</Link>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    bestSellers.map(book =>
                        <BookCard
                            key={book.id}
                            book={book}
                            addToCart={addToCart}
                        />
                    )
                }
            </div>
        </section>
    )
}