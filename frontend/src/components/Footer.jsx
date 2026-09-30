import React from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-16 bg-marama-green text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <img src="/logo.png" alt="Marama Foods" className="w-36" />
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/75">
              Wholesome foods, nutritious meal kits, and carefully selected
              ingredients — sourced from local farmers to help you live better
              every day.
            </p>
            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/maramafoods"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition duration-300 hover:border-[#1877F2] hover:bg-[#1877F2]"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition duration-300 hover:border-[#E1306C] hover:bg-[#E1306C]"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/maramafoods"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition duration-300 hover:border-black hover:bg-black"
              >
                <FaXTwitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/#about" },
                { label: "Shop", to: "/shop" },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="transition duration-300 hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {[
                { label: "Meal Kits", to: "/meal-kits" },
                { label: "Marama Basket", to: "/marama-basket" },
                { label: "All Products", to: "/shop" },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="group flex items-center gap-2 transition duration-300 hover:text-white"
                  >
                    {label}
                    <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0" />
                <a
                  href="tel:+254745399495"
                  className="transition duration-300 hover:text-white"
                >
                  +254 745 399 495
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0" />
                <a
                  href="mailto:shop@maramafoods.com"
                  className="transition duration-300 hover:text-white"
                >
                  shop@maramafoods.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-white/80">
                #FoodFriday — Follow us for weekly nutrition tips
              </p>
              <a
                href="https://www.x.com/MaramaFoods"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-white hover:text-white"
              >
                <FaXTwitter className="h-3.5 w-3.5" />
                Follow on X
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-center text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} Marama Foods. All rights reserved.</p>
          <div className="flex justify-center gap-5 sm:justify-end">
            <a href="#" className="transition duration-300 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition duration-300 hover:text-white">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
