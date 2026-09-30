import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Check, Package, Tag, Star } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <section className="px-4 py-32 sm:px-6">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold text-marama-green">
            Product Not Found
          </h1>
          <p className="mt-4 text-gray-600">
            The product you're looking for doesn't exist.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-marama-green px-6 py-3 font-semibold text-white transition duration-300 hover:bg-maroon"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Shop
          </Link>
        </div>
      </section>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="pt-24 lg:pt-28">
      <section className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-7xl">
          {/* Back */}
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm font-semibold text-marama-green transition duration-300 hover:text-maroon"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>

          {/* Product Layout */}
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="overflow-hidden rounded-3xl bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="h-72 w-full object-cover sm:h-96 lg:h-[480px]"
              />
            </div>

            {/* Details */}
            <div>
              {/* Category + Rating */}
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-marama-green">
                  <Tag className="h-3 w-3" />
                  {product.category}
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-amber-500">
                  <Star className="h-3.5 w-3.5 fill-amber-400 stroke-amber-400" />
                  4.8
                  <span className="text-gray-400">(24 reviews)</span>
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-bold leading-tight text-marama-green sm:text-4xl lg:text-5xl">
                {product.name}
              </h1>

              <p className="mt-3 text-2xl font-bold text-gray-800 sm:text-3xl">
                KSh {product.price.toLocaleString()}
              </p>

              <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
                {product.description}
              </p>

              {/* Features */}
              <div className="mt-6 space-y-2.5">
                {[
                  "Sourced from trusted local farmers",
                  "Curated by expert Marama dieticians",
                  "Quality checked before dispatch",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-marama-green text-white">
                      <Check className="h-3 w-3" />
                    </div>
                    <p className="text-sm text-gray-700">{point}</p>
                  </div>
                ))}
              </div>

              {/* Delivery note */}
              <div className="mt-6 flex items-center gap-3 rounded-2xl bg-green-50 px-5 py-4">
                <Package className="h-5 w-5 shrink-0 text-marama-green" />
                <p className="text-sm font-medium text-marama-green">
                  Fast delivery across Nairobi. You'll be notified at every step.
                </p>
              </div>

              {/* Add to Cart */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`flex cursor-pointer items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white transition duration-300 ${
                    added
                      ? "bg-green-600"
                      : "bg-marama-green hover:bg-maroon"
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="h-5 w-5" />
                      Added to Cart!
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="h-5 w-5" />
                      Add to Cart
                    </>
                  )}
                </button>

                <Link
                  to="/cart"
                  className="flex cursor-pointer items-center gap-2 rounded-full border border-marama-green px-7 py-3.5 font-semibold text-marama-green transition duration-300 hover:border-maroon hover:text-maroon"
                >
                  View Cart
                </Link>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {related.length > 0 && (
            <div className="mt-20 border-t border-gray-100 pt-12">
              <h2 className="text-2xl font-bold text-marama-green sm:text-3xl">
                You might also like
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <Link
                    key={p.id}
                    to={`/products/${p.id}`}
                    className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs font-semibold text-maroon">
                        {p.category}
                      </p>
                      <h3 className="mt-1 font-semibold text-marama-green transition group-hover:text-maroon">
                        {p.name}
                      </h3>
                      <p className="mt-2 font-bold text-gray-800">
                        KSh {p.price.toLocaleString()}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
