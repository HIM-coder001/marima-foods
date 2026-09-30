import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Shop from './components/Shop'
import Cart from './pages/Cart'
import Login from './pages/Login'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/shop' element={ <Shop /> }/>
        <Route path='/products/:id' element={ <ProductDetails /> }/>
        <Route path='/cart' element={ <Cart />}/>
        <Route path='/login' element={ <Login />} />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App