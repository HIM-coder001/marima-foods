import React, { useEffect, useState } from "react";
import { ShoppingCart, Menu, ChevronDown, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const { cart } = useCart();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `cursor-pointer transition duration-300 ${
      isActive ? "text-maroon font-bold" : "text-marama-green hover:text-maroon"
    }`;

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled ? "px-4 pt-3" : "px-0 pt-0"
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-500 ease-in-out ${
            scrolled
              ? "max-w-6xl rounded-full border border-gray-200 bg-white/95 px-6 py-3 shadow-lg backdrop-blur-md"
              : "w-full border-b border-gray-100 bg-white px-6 py-4 shadow-sm sm:px-8"
          }`}
        >
          {/* Logo */}
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <img
              src="/logo.png"
              alt="Marama Foods"
              className="h-auto w-28 cursor-pointer transition-all duration-500 sm:w-32 md:w-36"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-8 text-base font-semibold">
              <li>
                <NavLink to="/" end className={navLinkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <a
                  href="/#about"
                  className="cursor-pointer text-marama-green transition duration-300 hover:text-maroon"
                >
                  About
                </a>
              </li>
              <li>
                <NavLink to="/shop" className={navLinkClass}>
                  Shop
                </NavLink>
              </li>

              {/* Products Dropdown */}
              <li className="group relative">
                <button
                  type="button"
                  className="flex cursor-pointer items-center gap-1 text-marama-green transition duration-300 group-hover:text-maroon font-semibold"
                >
                  Products
                  <ChevronDown className="h-4 w-4 transition duration-300 group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-52 -translate-x-1/2 translate-y-2 rounded-2xl border border-gray-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <Link
                    to="/marama-basket"
                    className="block rounded-xl px-4 py-3 font-semibold text-marama-green transition duration-300 hover:bg-gray-50 hover:text-maroon"
                  >
                    Marama Basket
                  </Link>
                  <Link
                    to="/meal-kits"
                    className="mt-1 block rounded-xl px-4 py-3 font-semibold text-marama-green transition duration-300 hover:bg-gray-50 hover:text-maroon"
                  >
                    Meal Kits
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Login */}
            <Link
              to="/login"
              className="hidden cursor-pointer rounded-full bg-marama-green px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-maroon lg:block"
            >
              Login
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative cursor-pointer"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="h-6 w-6 text-marama-green transition duration-300 hover:text-maroon" />
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-maroon px-1 text-xs font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="cursor-pointer lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="h-6 w-6 text-marama-green" />
              ) : (
                <Menu className="h-6 w-6 text-marama-green transition duration-300 hover:text-maroon" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
          mobileOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 flex h-full w-72 max-w-[85vw] flex-col bg-white shadow-2xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
            <img src="/logo.png" alt="Marama Foods" className="h-auto w-28" />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-marama-green" />
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="flex-1 overflow-y-auto px-6 py-6">
            <ul className="space-y-1 text-base font-semibold">
              <li>
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-3 py-3 text-marama-green transition hover:bg-green-50 hover:text-maroon"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="/#about"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-3 py-3 text-marama-green transition hover:bg-green-50 hover:text-maroon"
                >
                  About
                </a>
              </li>
              <li>
                <Link
                  to="/shop"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-3 py-3 text-marama-green transition hover:bg-green-50 hover:text-maroon"
                >
                  Shop
                </Link>
              </li>

              {/* Products sub-section */}
              <li>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-marama-green transition hover:bg-green-50 hover:text-maroon"
                  onClick={() => setProductsOpen(!productsOpen)}
                >
                  Products
                  <ChevronDown
                    className={`h-4 w-4 transition duration-300 ${productsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {productsOpen && (
                  <ul className="ml-4 mt-1 space-y-1 border-l-2 border-green-100 pl-4">
                    <li>
                      <Link
                        to="/marama-basket"
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-xl px-3 py-2 text-sm text-marama-green transition hover:bg-green-50 hover:text-maroon"
                      >
                        Marama Basket
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/meal-kits"
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-xl px-3 py-2 text-sm text-marama-green transition hover:bg-green-50 hover:text-maroon"
                      >
                        Meal Kits
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>

          {/* Drawer Footer */}
          <div className="border-t border-gray-100 px-6 py-5">
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="block w-full rounded-full bg-marama-green py-3 text-center font-semibold text-white transition hover:bg-maroon"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
