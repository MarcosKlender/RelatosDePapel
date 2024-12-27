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
  const { cart, addToCart, removeFromCart, clearCart, cartItemCount } = useCart();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <BrowserRouter
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <Toaster richColors />
      <Header onSearchChange={setSearchTerm} cartItemCount={cartItemCount} />
      <main className='px-20 py-10'>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home addToCart={addToCart} />} />
          <Route path='/catalog' element={<Catalog searchTerm={searchTerm} addToCart={addToCart} />} />
          <Route path='/cart' element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path='/books/:id' element={<BookDetail addToCart={addToCart} />} />
          <Route path='/checkout' element={<Checkout cart={cart} clearCart={clearCart} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App