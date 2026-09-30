import React, { useEffect, useState } from "react";
import { ShoppingCart, Menu, ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "px-4 pt-3" : "px-0 pt-0"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-500 ease-in-out ${
          scrolled
            ? "max-w-6xl rounded-full border border-gray-200 bg-white/95 px-6 py-3 shadow-lg backdrop-blur-md"
            : "w-full border-b border-gray-100 bg-white px-8 py-5 shadow-sm"
        }`}
      >
        {/* Logo */}
        <img
          src="logo.png"
          alt="Marama Foods"
          className="h-auto w-32 cursor-pointer transition-all duration-500 md:w-36"
        />

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-8 text-lg font-semibold">
            <Link to='/' className="cursor-pointer text-marama-green transition duration-300 hover:text-maroon">
              Home
            </Link>

            <Link to='/about' className="cursor-pointer text-marama-green transition duration-300 hover:text-maroon">
              About
            </Link>

            <Link to='/shop' className="cursor-pointer text-marama-green transition duration-300 hover:text-maroon">
              Shop
            </Link>

            <Link to='/products' className="flex cursor-pointer items-center gap-1 text-marama-green transition duration-300 hover:text-maroon">
              Products
              <ChevronDown className="h-4 w-4" />
            </Link>
          </ul>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden cursor-pointer rounded-full bg-marama-green px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-maroon lg:block">
            Login
          </button>

          <Link to='/cart' className="cursor-pointer">
            <ShoppingCart className="h-6 w-6 text-marama-green transition duration-300 hover:text-maroon" />
          </Link>

          <button className="cursor-pointer lg:hidden">
            <Menu className="h-6 w-6 text-marama-green transition duration-300 hover:text-maroon" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;