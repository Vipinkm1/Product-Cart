
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/cart'
import ProductPage from './components/Product/ProductPage'
import { CartProvider } from './components/CartContext'
function App() {
  return (
    <>
    <CartProvider>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<ProductPage/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
      
    </>
  )
}

export default App
