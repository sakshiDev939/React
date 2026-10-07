import React from "react";

 export const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition">

      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-contain"
      />

      <p className="text-sm text-gray-500 capitalize mt-3">
        {product.category}
      </p>

      <h2 className="text-lg font-semibold mt-1 truncate">
        {product.title}
      </h2>

      <div className="flex justify-between items-center mt-3">
        <span className="text-xl font-bold text-blue-600">
          ${product.price}
        </span>

        <span className="text-yellow-500">
          ⭐ {product.rating}
        </span>
      </div>

      <button className="w-full mt-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer">
        Add to Cart
      </button>

    </div>
  );
};

export default ProductCard;