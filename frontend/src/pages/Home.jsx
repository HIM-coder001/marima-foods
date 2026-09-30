import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Shop from '../components/Shop'
import Product from '../components/Product'

const Home = () => {
  return (
    <div className='pt-24 lg:pt-28'>
      <Hero />
      <About />
      <Shop />
      <Product />
    </div>
  )
}

export default Home