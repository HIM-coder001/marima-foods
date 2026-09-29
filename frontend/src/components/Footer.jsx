import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-16 bg-marama-green text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <img
              src="/images/logo/marama-logo.png"
              alt="Marama Foods"
              className="w-36"
            />

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/75">
              Wholesome foods, nutritious meal kits, and carefully selected
              ingredients to help you live better every day.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition duration-300 hover:border-white hover:bg-white hover:text-marama-green"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition duration-300 hover:border-white hover:bg-white hover:text-marama-green"
              >
                <FaInstagram className="h-5 w-5" />
              </a>

              <a
                href="#"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition duration-300 hover:border-white hover:bg-white hover:text-marama-green"
              >
                <FaXTwitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>
                <a
                  href="#"
                  className="transition duration-300 hover:text-white"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition duration-300 hover:text-white"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition duration-300 hover:text-white"
                >
                  Shop
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition duration-300 hover:text-white"
                >
                  Products
                </a>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg font-semibold">
              Shop
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 transition duration-300 hover:text-white"
                >
                  Meal Kits

                  <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 transition duration-300 hover:text-white"
                >
                  Marama Basket

                  <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">
              Get In Touch
            </h3>

            <ul className="mt-5 space-y-4 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0" />

                <span>
                  Kenya
                </span>
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
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-center text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} Marama Foods. All rights reserved.
          </p>

          <div className="flex justify-center gap-5 sm:justify-end">
            <a
              href="#"
              className="transition duration-300 hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition duration-300 hover:text-white"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;