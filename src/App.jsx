import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Landing } from './pages/Landing'
import { Home } from './pages/Home'
import { Catalog } from './pages/Catalog'
import { Cart } from './pages/Cart'
import { BookDetail } from './pages/BookDetail'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='px-20 py-10'>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/books/:id' element={<BookDetail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App