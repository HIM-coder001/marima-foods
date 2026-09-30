import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import maramaBasket from "../assets/images/marama_basket.jpg";
import mealKit from "../assets/images/meal_kit.jpg";

const Product = () => {
  return (
    <section
      id="products"
      className="scroll-mt-32 bg-white px-4 py-16 sm:px-6 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-maroon">
            Our Products
          </p>
          <h2 className="mt-2 text-3xl font-bold leading-tight text-marama-green sm:text-4xl lg:text-5xl">
            Explore Our Collections
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Carefully curated meal kits and Marama baskets, assembled by expert
            dieticians to make healthy living easier and more convenient.
          </p>
        </div>

        {/* Product Categories */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Meal Kits */}
          <Link
            to="/meal-kits"
            className="group relative block min-h-[420px] overflow-hidden rounded-3xl focus:outline-none focus-visible:ring-4 focus-visible:ring-marama-green"
          >
            <img
              src={mealKit}
              alt="Marama Meal Kits — nutritious meal kit baskets"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
                Convenient &amp; Nutritious
              </p>
              <h3 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                Meal Kits
              </h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/80 sm:text-base">
                Expertly packed kits filled with nutrient-rich items for
                pregnant women, lactating mums, weaning babies, and those
                managing chronic conditions.
              </p>
              <span className="mt-6 flex w-fit cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-marama-green transition duration-300 group-hover:bg-maroon group-hover:text-white">
                Explore Meal Kits
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          {/* Marama Basket */}
          <Link
            to="/marama-basket"
            className="group relative block min-h-[420px] overflow-hidden rounded-3xl focus:outline-none focus-visible:ring-4 focus-visible:ring-marama-green"
          >
            <img
              src={maramaBasket}
              alt="Marama Basket — wholesome food basket for the family"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
                Fresh &amp; Wholesome
              </p>
              <h3 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                Marama Basket
              </h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/80 sm:text-base">
                Nutritious food baskets for the whole family, put together by
                our expert dieticians at affordable rates.
              </p>
              <span className="mt-6 flex w-fit cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-marama-green transition duration-300 group-hover:bg-maroon group-hover:text-white">
                Explore Basket
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Product;
