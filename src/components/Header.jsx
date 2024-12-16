import OpenBook from '../assets/OpenBook.svg'
import Cart from '../assets/Cart.svg'
import '../styles/tailwind.css';

export function Header() {
    return (
        <nav className='flex items-center justify-around h-16'>
            <a href="#" className='flex items-center gap-2'>
                <img src={OpenBook} alt="Relatos de Papel" className='h-8' />
                <span>Relatos de Papel</span>
            </a>
            <div className='flex gap-5'>
                <a href="#" className='flex items-center gap-2'>
                    <span>Inicio</span>
                </a>

                <a href="#" className='flex items-center gap-2'>
                    <span>Catálogo</span>
                </a>
            </div>

            <div className='flex gap-6'>
                <input type="search" name="" id="" className='px-3 py-1 text-black rounded' placeholder='Buscar libros...' />
                <img src={Cart} alt="Carrito" />
                <img src="https://unavatar.io/github/marcosklender" alt="Perfil del usuario logueado" className='h-8 rounded-full' />
            </div>
        </nav>
    )
}