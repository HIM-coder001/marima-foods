import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Shop from '../components/Shop'
import Product from '../components/Product'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

// #FoodFriday / Trust bar section
const TrustBar = () => (
  <section className="bg-marama-green px-4 py-10 sm:px-6">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
        {[
          { value: "100%", label: "Organic Products" },
          { value: "Local", label: "Kenyan Farmers" },
          { value: "Expert", label: "Dietician Curated" },
          { value: "Fast", label: "Doorstep Delivery" },
        ].map(({ value, label }) => (
          <div key={label} className="text-white">
            <p className="text-2xl font-bold">{value}</p>
            <p className="mt-1 text-sm text-white/70">{label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// Food Friday CTA
const FoodFriday = () => (
  <section className="bg-gray-50 px-4 py-14 sm:px-6">
    <div className="mx-auto max-w-5xl rounded-3xl border border-gray-200 bg-white px-6 py-10 text-center shadow-sm sm:px-10">
      <span className="inline-block rounded-full bg-green-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-marama-green">
        #FoodFriday
      </span>
      <h2 className="mt-4 text-2xl font-bold text-marama-green sm:text-3xl">
        Weekly nutrition tips &amp; inspiration
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-gray-600">
        Follow us on X (Twitter) every Friday for wholesome recipes, nutrition
        advice, and healthy living tips from the Marama Foods team.
      </p>
      <a
        href="https://www.x.com/MaramaFoods"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-marama-green px-6 py-3 font-semibold text-white transition duration-300 hover:bg-maroon"
      >
        Follow on X
        <ArrowRight className="h-5 w-5" />
      </a>
    </div>
  </section>
)

const Home = () => {
  return (
    <div className="pt-24 lg:pt-28">
      <Hero />
      <TrustBar />
      <About />
      <Product />
      <Shop />
      <FoodFriday />
    </div>
  )
}

export default Home
