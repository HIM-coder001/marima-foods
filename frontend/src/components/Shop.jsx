import React, { useState } from "react";
import { Search, ArrowRight, ArrowLeft } from "lucide-react";
import { products } from "../data/shop";
import ProductCard from "./ProductCard";

const Shop = () => {
  const [currentIndex, setCurrentIndex] = useState(3);

  const visibleProducts = products.slice(3);

  const handlePrevious = () => {
    if (currentIndex > 3) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className="px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-maroon">
            Shop
          </p>

          <h2 className="mt-2 text-4xl font-bold leading-tight text-marama-green sm:text-5xl">
            Best Sellers
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Discover wholesome foods and carefully selected ingredients for
            better everyday living.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-8 max-w-2xl">
          <div className="flex items-center rounded-full border border-marama-green px-5 py-3 shadow-sm">
            <Search className="mr-3 h-5 w-5 text-gray-400" />

            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-transparent text-sm outline-none sm:text-base"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mt-8 overflow-x-auto">
          <div className="flex min-w-max justify-center gap-3 px-2">
            <button className="cursor-pointer rounded-full bg-marama-green px-5 py-2 text-sm font-semibold text-white">
              All
            </button>

            <button className="cursor-pointer rounded-full border border-gray-200 px-5 py-2 text-sm font-medium text-gray-600 transition hover:border-marama-green hover:text-marama-green">
              Vegetables
            </button>

            <button className="cursor-pointer rounded-full border border-gray-200 px-5 py-2 text-sm font-medium text-gray-600 transition hover:border-marama-green hover:text-marama-green">
              Cereals
            </button>

            <button className="cursor-pointer rounded-full border border-gray-200 px-5 py-2 text-sm font-medium text-gray-600 transition hover:border-marama-green hover:text-marama-green">
              Oils
            </button>

            <button className="cursor-pointer rounded-full border border-gray-200 px-5 py-2 text-sm font-medium text-gray-600 transition hover:border-marama-green hover:text-marama-green">
              Meal Kits
            </button>

            <button className="cursor-pointer rounded-full border border-gray-200 px-5 py-2 text-sm font-medium text-gray-600 transition hover:border-marama-green hover:text-marama-green">
              Marama Basket
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative mt-10">
          {/* Left Arrow */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 3}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white p-2 shadow-md transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 sm:left-2 sm:p-3"
          >
            <ArrowLeft className="h-5 w-5 text-marama-green sm:h-6 sm:w-6" />
          </button>

          {/* Carousel Viewport */}
          <div className="overflow-hidden px-7 sm:px-10">
            {/* Moving Track */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  (currentIndex - 3) *
                  (100 /
                    (window.innerWidth >= 1024
                      ? 3
                      : window.innerWidth >= 640
                        ? 2
                        : 1))
                }%)`,
              }}
            >
              {visibleProducts.map((product) => (
                <div
                  key={product.id}
                  className="w-full shrink-0 px-2 sm:w-1/2 lg:w-1/3"
                >
                  <ProductCard
                    image={product.image}
                    name={product.name}
                    category={product.category}
                    price={product.price}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={currentIndex === products.length - 1}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white p-2 shadow-md transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 sm:right-2 sm:p-3"
          >
            <ArrowRight className="h-5 w-5 text-marama-green sm:h-6 sm:w-6" />
          </button>
        </div>

        {/* Show More */}
        <div className="mt-10 flex justify-center">
          <button className="flex cursor-pointer items-center gap-2 rounded-full bg-marama-green px-5 py-3 font-semibold text-white transition duration-300 hover:bg-maroon">
            Show More
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Shop;