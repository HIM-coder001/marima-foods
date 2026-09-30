import React from "react";
import aboutImage from "../assets/images/about_image.jpg";
import { Leaf, Truck, HeartHandshake, Sprout } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Organic Sourcing",
    description:
      "We source organic vegetables and foods from our trusted network of farmers across Kenya.",
  },
  {
    icon: HeartHandshake,
    title: "Expert Nutritionists",
    description:
      "Our team of dieticians and nutritionists craft every plan and kit with your health in mind.",
  },
  {
    icon: Truck,
    title: "Dedicated Delivery",
    description:
      "We notify you at every step — from order confirmation right through to your doorstep.",
  },
  {
    icon: Sprout,
    title: "Empowering Farmers",
    description:
      "Every purchase supports local Kenyan farmers, helping grow sustainable livelihoods.",
  },
];

const About = () => {
  return (
    <section id="about" className="scroll-mt-28 bg-gray-50 px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -bottom-4 -left-4 h-48 w-48 rounded-full bg-green-100 opacity-50 blur-2xl" />
            <img
              src={aboutImage}
              alt="About Marama Foods — wholesome organic food"
              className="relative h-72 w-full rounded-3xl object-cover shadow-lg sm:h-96 lg:h-[460px]"
            />
            {/* Floating card */}
            <div className="absolute -right-4 bottom-6 rounded-2xl bg-marama-green px-5 py-4 text-white shadow-xl sm:right-6">
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm font-medium text-white/80">
                Organic &amp; Natural
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-bold uppercase tracking-wide text-maroon">
              About Us
            </p>

            <h2 className="mt-2 text-3xl font-bold leading-tight text-marama-green sm:text-4xl lg:text-5xl">
              Wellness Starts in the Kitchen.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              At Marama Foods, we believe wellness starts in the kitchen. We
              help our customers reach their health goals by sourcing organic
              vegetables and food from our network of farmers across the
              country — delivering nutrition that is both wholesome and
              affordable.
            </p>

            {/* Features grid */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {features.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50">
                    <Icon className="h-5 w-5 text-marama-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-marama-green">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
