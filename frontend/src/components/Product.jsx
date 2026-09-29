import React from "react";
import { ArrowRight } from "lucide-react";
import maramaBasket from "../assets/images/marama_basket.jpg";
import mealKit from "../assets/images/meal_kit.jpg";

const Product = () => {
  return (
    <section className="px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-maroon">
            Shop
          </p>

          <h2 className="mt-2 text-4xl font-bold leading-tight text-marama-green sm:text-5xl">
            Shop Your Way
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Explore our carefully curated meal kits and Marama baskets,
            created to make healthy living easier.
          </p>
        </div>

        {/* Shop Categories */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Meal Kits */}
          <div className="group relative min-h-[420px] overflow-hidden rounded-3xl">
            <img
              src={mealKit}
              alt="Marama Meal Kits"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
                Convenient & Nutritious
              </p>

              <h3 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                Meal Kits
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/80 sm:text-base">
                Everything you need to prepare wholesome meals, carefully
                selected and made convenient for you.
              </p>

              <button className="mt-6 flex cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-marama-green transition duration-300 hover:bg-maroon hover:text-white">
                Explore Meal Kits
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Marama Basket */}
          <div className="group relative min-h-[420px] overflow-hidden rounded-3xl">
            <img
              src={maramaBasket}
              alt="Marama Basket"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
                Fresh & Wholesome
              </p>

              <h3 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                Marama Basket
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/80 sm:text-base">
                Discover a collection of wholesome foods and carefully
                selected ingredients for your everyday needs.
              </p>

              <button className="mt-6 flex cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-marama-green transition duration-300 hover:bg-maroon hover:text-white">
                Explore Basket
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;