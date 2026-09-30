import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ShoppingBasket,
  ShoppingCart,
  X,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { useCart } from "../context/CartContext";

import maramaBasket from "../assets/images/marama_basket.jpg";

const baskets = [
  {
    id: "basket-ruby",
    name: "Ruby",
    price: 5000,
    image: maramaBasket,
    contents: [
      "Apple Cider Vinegar",
      "Beef Tallow",
      "Sauerkraut",
      "Groundnut Flour",
    ],
  },
  {
    id: "basket-emerald",
    name: "Emerald",
    price: 4500,
    image: maramaBasket,
    contents: [
      "Pearl Porridge Flour",
      "Himalayan Pink Salt",
      "Sauerkraut",
      "Virgin Coconut Oil",
    ],
  },
  {
    id: "basket-diamond",
    name: "Diamond",
    price: 3500,
    image: maramaBasket,
    contents: [
      "Tail Fat",
      "Baby Porridge",
      "Baobab Coffee",
      "Pumpkin Flour",
      "Sauerkraut",
    ],
  },
  {
    id: "basket-elite",
    name: "Elite",
    price: 3500,
    image: maramaBasket,
    contents: [
      "Himalayan Pink Salt",
      "Beef Tallow Fat",
      "Coffee",
      "Porridge Flour",
    ],
  },
];

const MaramaBasket = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [selectedBasket, setSelectedBasket] = useState(null);

  const handleBuyNow = (basket) => {
    addToCart({
      id: basket.id,
      name: `${basket.name} Marama Basket`,
      image: basket.image,
      category: "Marama Basket",
      price: basket.price,
    });

    navigate("/cart");
  };

  const handleAddToCart = (basket) => {
    addToCart({
      id: basket.id,
      name: `${basket.name} Marama Basket`,
      image: basket.image,
      category: "Marama Basket",
      price: basket.price,
    });
  };

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative min-h-[600px] overflow-hidden">
        <img
          src={maramaBasket}
          alt="Marama Basket"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-center px-6 py-32">
          <div className="max-w-3xl text-white">
            <Link
              to="/#products"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition duration-300 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Link>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
              Marama Foods
            </p>

            <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              Marama Basket
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
              Discover our carefully selected baskets, packed with wholesome
              food products for everyday meals.
            </p>

            <a
              href="#baskets"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-marama-green transition duration-300 hover:bg-maroon hover:text-white"
            >
              Explore Baskets
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-maroon">
            Our Baskets
          </p>

          <h2 className="mt-3 text-3xl font-bold text-marama-green sm:text-4xl">
            Choose your Marama Basket
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            Explore our selection of Marama Baskets and choose the collection
            that suits you. Each basket contains a carefully selected range of
            food products.
          </p>
        </div>
      </section>

      {/* Basket Collection */}
      <section
        id="baskets"
        className="scroll-mt-28 bg-gray-50 px-6 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-wide text-maroon">
              Available Baskets
            </p>

            <h2 className="mt-2 text-3xl font-bold text-marama-green sm:text-4xl">
              Find your basket
            </h2>

            <p className="mt-3 max-w-2xl text-gray-600">
              Select a basket to view its contents or buy it directly.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {baskets.map((basket) => (
              <article
                key={basket.id}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={basket.image}
                    alt={`${basket.name} Marama Basket`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-marama-green">
                    Marama Basket
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-2xl font-bold text-marama-green">
                      {basket.name}
                    </h3>

                    <ShoppingBasket className="mt-1 h-5 w-5 shrink-0 text-maroon" />
                  </div>

                  <div className="mt-5">
                    <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                      Includes
                    </p>

                    <ul className="mt-3 space-y-2">
                      {basket.contents.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-marama-green" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="border-t border-gray-100 pt-5">
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                        Price
                      </p>

                      <p className="mt-1 text-2xl font-bold text-gray-800">
                        KSh {basket.price.toLocaleString()}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleBuyNow(basket)}
                      className="mt-5 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-marama-green px-5 py-3 font-semibold text-white transition duration-300 hover:bg-maroon"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Buy Now
                    </button>

                    <button
                      type="button"
                      onClick={() => handleAddToCart(basket)}
                      className="mt-3 w-full cursor-pointer rounded-full border border-marama-green px-5 py-3 text-sm font-semibold text-marama-green transition duration-300 hover:bg-marama-green hover:text-white"
                    >
                      Add to Cart
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedBasket(basket)}
                      className="mt-3 flex w-full cursor-pointer items-center justify-center gap-2 text-sm font-semibold text-gray-500 transition duration-300 hover:text-maroon"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Marama Baskets */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-maroon">
                Marama Foods
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-marama-green sm:text-4xl">
                Carefully selected food collections
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-gray-600">
                Marama Baskets bring several food products together in one
                convenient collection, making it easier to shop for the
                products included in each basket.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-50 text-marama-green">
                    <Check className="h-4 w-4" />
                  </div>

                  <p className="text-gray-700">
                    Multiple food products in one basket
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-50 text-marama-green">
                    <Check className="h-4 w-4" />
                  </div>

                  <p className="text-gray-700">
                    Convenient shopping experience
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-50 text-marama-green">
                    <Check className="h-4 w-4" />
                  </div>

                  <p className="text-gray-700">
                    Different basket options and prices
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem]">
              <img
                src={maramaBasket}
                alt="Marama Basket"
                className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-marama-green px-6 py-14 text-center text-white sm:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-white/60">
            Marama Foods
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Looking for something different?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/75">
            Explore our Meal Kits or browse individual products from the
            Marama Foods shop.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/meal-kits"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-marama-green transition duration-300 hover:bg-maroon hover:text-white"
            >
              Meal Kits
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-white hover:text-marama-green"
            >
              Visit Shop
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Basket Details Modal */}
      {selectedBasket && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-6"
          onClick={() => setSelectedBasket(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={selectedBasket.image}
                alt={`${selectedBasket.name} Marama Basket`}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20" />

              <button
                type="button"
                onClick={() => setSelectedBasket(null)}
                className="absolute right-4 top-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/90 text-gray-700 transition duration-300 hover:bg-white"
                aria-label="Close basket details"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-wide text-maroon">
                Marama Basket
              </p>

              <h2 className="mt-2 text-3xl font-bold text-marama-green">
                {selectedBasket.name}
              </h2>

              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                  Basket Contents
                </p>

                <ul className="mt-4 space-y-3">
                  {selectedBasket.contents.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-50 text-marama-green">
                        <Check className="h-4 w-4" />
                      </div>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col gap-5 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    Price
                  </p>

                  <p className="mt-1 text-2xl font-bold text-gray-800">
                    KSh {selectedBasket.price.toLocaleString()}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleBuyNow(selectedBasket)}
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-marama-green px-6 py-3 font-semibold text-white transition duration-300 hover:bg-maroon"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default MaramaBasket;
