import React from "react";
import heroImage from "../assets/images/hero_image.jpg";
import { ArrowRight, Leaf, ShoppingBag, Users } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { icon: Leaf, label: "Organic Products", value: "100%" },
  { icon: ShoppingBag, label: "Meal Kits", value: "6+" },
  { icon: Users, label: "Happy Families", value: "500+" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Text */}
        <div className="max-w-xl">
          <span className="inline-block rounded-full bg-green-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-marama-green">
            Organic &amp; Wholesome
          </span>

          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-marama-green sm:text-5xl lg:text-6xl">
            Better Food for{" "}
            <span className="relative text-maroon">
              Better Living.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            Discover wholesome foods, nutritious meal kits, and carefully
            selected ingredients sourced from local Kenyan farmers — made to
            bring better eating closer to home.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/shop"
              className="flex cursor-pointer items-center gap-2 rounded-full bg-marama-green px-6 py-3 font-semibold text-white transition duration-300 hover:bg-maroon"
            >
              Shop Now
              <ArrowRight className="h-5 w-5" />
            </Link>

            <a
              href="#products"
              className="flex cursor-pointer items-center gap-2 rounded-full border border-maroon px-6 py-3 font-semibold text-maroon transition duration-300 hover:bg-maroon hover:text-white"
            >
              Explore Products
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-6 border-t border-gray-100 pt-8">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-50">
                  <Icon className="h-5 w-5 text-marama-green" />
                </div>
                <div>
                  <p className="text-lg font-bold text-marama-green">{value}</p>
                  <p className="text-xs text-gray-500">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="absolute -right-6 -top-6 h-64 w-64 rounded-full bg-green-50 opacity-60 blur-3xl" />
          <img
            src={heroImage}
            alt="Fresh wholesome food from Marama Foods"
            className="relative h-72 w-full rounded-3xl object-cover shadow-xl sm:h-96 lg:h-[480px]"
          />
          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-5 py-3 shadow-lg sm:bottom-6 sm:left-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Sourced From
            </p>
            <p className="mt-0.5 text-sm font-bold text-marama-green">
              Local Kenyan Farmers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
