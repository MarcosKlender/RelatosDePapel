import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from './hooks/useCart'
import { Toaster, toast } from 'sonner'

import { Header } from './components/Header'
import { Landing } from './pages/Landing'
import { Home } from './pages/Home'
import { Catalog } from './pages/Catalog'
import { Cart } from './pages/Cart'
import { BookDetail } from './pages/BookDetail'
import { Checkout } from './pages/Checkout'
import { NotFound } from './pages/NotFound'

function App() {
  const { cart, addToCart, removeFromCart, cartItemCount } = useCart();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <BrowserRouter
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <Toaster richColors />
      <Header
        onSearchChange={setSearchTerm}
        cartItemCount={cartItemCount}
      />
      <main className='px-20 py-10'>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/catalog' element=
            {
              <Catalog
                searchTerm={searchTerm}
                addToCart={(book) => {
                  addToCart(book);
                  toast.success(`"${book.title}" añadido al carrito`);
                }}
              />
            }
          />
          <Route path='/cart' element=
            {
              <Cart
                cart={cart}
                removeFromCart={(bookId) => {
                  const removedBook = cart.find(book => book.id === bookId);
                  removeFromCart(bookId);

                  if (removedBook) {
                    toast.error(`"${removedBook.title}" eliminado del carrito`);
                  }
                }}
              />
            }
          />
          <Route path='/books/:id' element=
            {
              <BookDetail
                addToCart={(book) => {
                  addToCart(book);
                  toast.success(`"${book.title}" añadido al carrito`);
                }}
              />
            }
          />
          <Route path='/checkout' element={
            <Checkout
              cart={cart}
            />
          }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App