import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import ShopPage from './pages/Shop'
import Cart from './pages/Cart'
import Login from './pages/Login'
import ProductDetails from './pages/ProductDetails'
import MealKits from './pages/MealKits'
import MaramaBasket from './pages/MaramaBasket'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/meal-kits' element={<MealKits />} />
        <Route path='/marama-basket' element={<MaramaBasket />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
