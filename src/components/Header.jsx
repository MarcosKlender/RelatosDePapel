import OpenBook from '../assets/OpenBook.svg'
import '../styles/tailwind.css';

export function Header() {
    return (
        <nav className='flex items-center justify-around h-16'>
            <a href="#" className='flex items-center gap-2'>
                <img src={OpenBook} alt="Logo de Relatos de Papel" className='h-8' />
                <span>Relatos de Papel</span>
            </a>

            <a href="#" className='flex h-8'>
                <span>Carrito</span>
            </a>
        </nav>
    )
}