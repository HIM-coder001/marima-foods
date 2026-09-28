import React from "react";
import { ShoppingCart } from "lucide-react";

const ProductCard = ({ name, image, category, price }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
      <img
        src={image}
        alt={name}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">
        <p className="text-sm text-maroon">{category}</p>

        <h2 className="mt-1 text-lg font-semibold text-marama-green">
          {name}
        </h2>


        <div className="flex justify-between items-center">
            <p className="mt-4 font-bold text-gray-800">
              KSh {price}
            </p>

            <button className="bg-marama-green text-white px-4 py-2 text-sm rounded-full gap-2 flex items-center hover:bg-maroon transition duration-300 cursor-pointer">
                <ShoppingCart className="h-4 w-4"/>
                Add
            </button>
        </div>
        
      </div>
    </div>
  );
};

export default ProductCard;

