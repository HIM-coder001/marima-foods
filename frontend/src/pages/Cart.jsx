import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (cart.length === 0) {
    return (
      <section className="px-6 pt-32 pb-20 lg:pt-36">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
            <ShoppingBag className="h-10 w-10 text-marama-green" />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-marama-green sm:text-4xl">
            Your Cart Is Empty
          </h1>

          <p className="mx-auto mt-4 max-w-md text-gray-600">
            You haven't added anything to your cart yet. Explore our products
            and find something you'll love.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-marama-green px-6 py-3 font-semibold text-white transition duration-300 hover:bg-maroon"
          >
            <ArrowLeft className="h-5 w-5" />
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 pt-32 pb-20 sm:px-6 lg:pt-36">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-maroon">
            Your Shopping Cart
          </p>

          <h1 className="mt-2 text-4xl font-bold text-marama-green sm:text-5xl">
            Review Your Order
          </h1>

          <p className="mt-4 text-gray-600">
            Check your items before proceeding to checkout.
          </p>
        </div>

        {/* Cart Content */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]">
          {/* Cart Items */}
          <div className="space-y-5">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:p-5"
              >
                {/* Product Image */}
                <div className="h-40 w-full shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-32">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <p className="text-sm font-medium text-maroon">
                    {item.category}
                  </p>

                  <h2 className="mt-1 text-lg font-semibold text-marama-green">
                    {item.name}
                  </h2>

                  <p className="mt-2 font-bold text-gray-800">
                    KSh {item.price}
                  </p>
                </div>

                {/* Quantity + Remove */}
                <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                  <div className="flex items-center overflow-hidden rounded-full border border-gray-200">
                    <button
                      type="button"
                      onClick={() => decreaseQuantity(item.id)}
                      className="flex h-9 w-9 cursor-pointer items-center justify-center text-gray-600 transition duration-300 hover:bg-gray-100 hover:text-maroon"
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      <Minus className="h-4 w-4" />
                    </button>

                    <span className="flex h-9 min-w-10 items-center justify-center border-x border-gray-200 px-2 text-sm font-semibold text-gray-800">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() => increaseQuantity(item.id)}
                      className="flex h-9 w-9 cursor-pointer items-center justify-center text-gray-600 transition duration-300 hover:bg-gray-100 hover:text-marama-green"
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="flex cursor-pointer items-center gap-2 text-sm font-medium text-gray-500 transition duration-300 hover:text-maroon"
                  >
                    <Trash2 className="h-4 w-4" />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-2xl border border-gray-200 bg-gray-50 p-6 lg:sticky lg:top-28">
            <h2 className="text-xl font-bold text-marama-green">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between text-gray-600">
                <span>Subtotal</span>

                <span className="font-semibold text-gray-800">
                  KSh {subtotal}
                </span>
              </div>

              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <span className="font-semibold text-gray-800">
                  Total
                </span>

                <span className="text-xl font-bold text-marama-green">
                  KSh {subtotal}
                </span>
              </div>
            </div>

            <button
              type="button"
              className="mt-6 w-full cursor-pointer rounded-full bg-marama-green px-6 py-3 font-semibold text-white transition duration-300 hover:bg-maroon"
            >
              Proceed to Checkout
            </button>

            <Link
              to="/shop"
              className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-marama-green transition duration-300 hover:text-maroon"
            >
              <ArrowLeft className="h-4 w-4" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;