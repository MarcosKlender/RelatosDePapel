import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Catalog } from './pages/Catalog'
import { Cart } from './pages/Cart'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='px-20 py-10'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App