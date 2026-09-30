import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ id, name, image, category, price }) => {
  const { addToCart } = useCart();

  const product = {
    id,
    name,
    image,
    category,
    price,
  };

  return (
    <div className="h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <Link to={`/products/${id}`}>
        <div className="overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-48 w-full object-cover transition duration-500 hover:scale-105 sm:h-52 lg:h-56"
          />
        </div>
      </Link>

      <div className="p-4 sm:p-5">
        <p className="text-sm font-medium text-maroon">{category}</p>

        <Link to={`/products/${id}`}>
          <h2 className="mt-1 line-clamp-2 text-base font-semibold text-marama-green transition duration-300 hover:text-maroon sm:text-lg">
            {name}
          </h2>
        </Link>

        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="font-bold text-gray-800">KSh {price}</p>

          <button
            type="button"
            onClick={() => addToCart(product)}
            className="flex cursor-pointer items-center gap-2 rounded-full bg-marama-green px-3 py-2 text-xs font-semibold text-white transition duration-300 hover:bg-maroon sm:px-4 sm:text-sm"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
