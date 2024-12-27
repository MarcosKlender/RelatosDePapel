import { Link, useNavigate } from 'react-router-dom'
import OpenBook from '../assets/OpenBook.svg'
import Cart from '../assets/Cart.svg'
import '../styles/tailwind.css'

export function Header({ onSearchChange, cartItemCount }) {
    const navigate = useNavigate();

    const handleSearchChange = (value) => {
        onSearchChange(value);
        navigate('/catalog');
    }

    return (
        <header>
            <nav className='flex flex-col items-center justify-around h-16 m-4 sm:m-0 sm:flex-row'>
                <div className='flex items-center gap-4 mb-4 md:gap-10 sm:mb-0'>
                    <Link to='/' className='flex items-center gap-2'>
                        <img src={OpenBook} alt="Relatos de Papel" className='h-8' />
                        <span className='hover:underline'>Relatos de Papel</span>
                    </Link>

                    <Link to='/home' className='hover:underline'>Inicio</Link>
                    <Link to='/catalog' className='hover:underline'>Catálogo</Link>
                </div>

                <div className='flex items-center gap-6'>
                    <input
                        type='search'
                        id='search'
                        onChange={(e) => handleSearchChange(e.target.value)}
                        className='px-3 py-1 text-black rounded'
                        placeholder='Buscar libros...'
                    />

                    <Link to='/cart' className='flex'>
                        <img src={Cart} alt="Carrito" />
                        {
                            cartItemCount > 0 && (
                                <span className='px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full'>
                                    {cartItemCount}
                                </span>
                            )
                        }
                    </Link>

                    <a href="https://github.com/MarcosKlender/RelatosDePapel" target='_blank'>
                        <img src="https://avatars.githubusercontent.com/u/36539682" alt="Perfil del usuario logueado" className='h-8 rounded-full' />
                    </a>
                </div>
            </nav>
        </header>
    )
}