import { Link } from 'react-router-dom'
import NotFoundError from '../assets/NotFoundError.svg'

export function NotFound() {
    return (
        <>
            <h1 className="page-title">Página no encontrada</h1>
            <div className="flex flex-col items-center gap-5">
                <p>Será mejor que vuelvas al inicio, créeme.</p>
                <div className='flex flex-col gap-4 sm:gap-10 sm:flex-row'>
                    <Link to='/home' className='hover:underline'>⬅ Volver al Inicio</Link>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className='hover:underline'>Panel de Administrador ➡</a>
                </div>
                <img src={NotFoundError} alt="Error 404 - Página no encontrada" className='w-full sm:w-1/2 md:w-1/3' />
            </div>
        </>
    )
}