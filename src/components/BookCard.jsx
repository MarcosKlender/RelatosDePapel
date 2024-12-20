import { Link } from "react-router-dom";

export function BookCard({ book }) {
    return (
        <article className="border rounded-lg">
            <Link to={`/books/${book.id}`}>
                <div className="w-full overflow-hidden rounded-t-lg h-80">
                    <img
                        src={book.image}
                        alt={`Portada del libro ${book.title}`}
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="flex flex-col gap-1 p-4">
                    <span className="text-emerald-400">$ {book.price}</span>
                    <h2 className="text-lg font-semibold">{book.title}</h2>
                    <p className="text-sm opacity-90">{book.author}</p>
                </div>
            </Link>
        </article>
    );
}
