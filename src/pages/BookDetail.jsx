import { useParams, Link } from 'react-router-dom';
import { books } from '../utils/Books.js';
import { NotFound } from './NotFound.jsx';

export function BookDetail({ addToCart }) {
    const { id } = useParams();
    const book = books.find(book => book.id === parseInt(id));

    if (!book) {
        return <NotFound />;
    }

    return (
        <section className='flex flex-col justify-center gap-10 sm:flex-row'>
            <img src={book.image} alt={`Portada del libro ${book.title}`} className='w-1/4 h-full rounded' />

            <aside className='flex flex-col justify-center w-full sm:w-2/4'>
                <div className='flex items-center justify-between'>
                    <span className='px-2 my-2 text-sm border rounded-lg w-fit'>{book.year}</span>
                    <span className="text-2xl text-emerald-400">$ {book.price}</span>
                </div>
                <h1 className='text-4xl font-bold'>{book.title}</h1>
                <h2 className='opacity-80'>Por {book.author}</h2>

                <p className='py-10'>{book.description}</p>

                <div className='flex gap-4'>
                    <button
                        onClick={() => addToCart(book)}
                        className='px-4 py-2 transition duration-300 rounded bg-emerald-600 hover:bg-emerald-800'
                    >
                        Añadir al Carrito
                    </button>
                    <Link to='/catalog' className='px-4 py-2 border rounded border-emerald-600'>Volver al Catálogo</Link>
                </div>
            </aside>
        </section>
    );
}
