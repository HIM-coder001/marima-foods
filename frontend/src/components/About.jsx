 import React from "react";
import aboutImage from "../assets/images/about_image.jpg";

const About = () => {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-12 lg:grid-cols-2 lg:gap-16">
      <div className="order-1 lg:order-2">
        <p className="text-sm font-bold uppercase tracking-wide text-maroon">
          About Us
        </p>

        <h2 className="mt-2 text-4xl font-bold leading-tight text-marama-green sm:text-5xl">
          Wellness Starts in the Kitchen.
        </h2>

        <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
          At Marama Foods, we believe wellness starts in the kitchen. We help
          our customers reach their health goals by sourcing organic vegetables
          and food from our network of farmers across the country.
        </p>
      </div>

      <img
        src={aboutImage}
        alt="About Marama Foods"
        className="order-2 h-100 w-full rounded-2xl lg:order-1"
      />
    </section>
  );
};

export default About;