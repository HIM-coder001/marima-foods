 import React from "react";
import heroImage from "../assets/images/hero_image.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto grid max-w-7xl items-center gap-6 lg:grid-cols-2 lg:gap-16">
        
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-marama-green sm:text-5xl lg:text-6xl">
            Better Food for Better Living.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            Discover wholesome foods, nutritious meal kits, and carefully
            selected ingredients made to bring better eating closer to home.
          </p>

          <button className="mt-8 flex cursor-pointer items-center gap-2 rounded-lg bg-marama-green px-6 py-3 font-semibold text-white transition duration-300 hover:bg-maroon">
            Shop Our Products
            <ArrowRight />
          </button>
        </div>

        <img
          src={heroImage}
          alt="hero image"
          className="h-100 w-full rounded-2xl object-cover"
        />

      </div>
    </section>
  );
};

export default Hero;