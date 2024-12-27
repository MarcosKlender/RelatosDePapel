import BookLover from '../assets/BookLover.svg';
import { Link } from 'react-router-dom';

export function HomeHero() {
    return (
        <section className='flex flex-col justify-around pb-10 sm:flex-row'>
            <div className='flex flex-col items-center justify-center gap-5'>
                <h2 className='text-4xl font-bold'>Encuentra tu libro favorito</h2>
                <p>En nuestra tienda encontrarás todos los libros que necesitas</p>
                <Link
                    to={'/catalog'}
                    className="w-full py-2 text-center text-white bg-blue-500 rounded-lg hover:bg-blue-700 sm:w-1/2"
                >
                    Explorar el Catálogo
                </Link>
            </div>
            <img
                src={BookLover}
                alt="Mujer sentada leyendo su libro favorito"
                className='w-full sm:w-1/3'
            />
        </section>
    )
}