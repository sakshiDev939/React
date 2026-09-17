
import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
let navigate = useNavigate();

  return (
    <div className="w-72 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100">

      {/* Product Image */}
      <div 
      onClick={() => navigate(`/detail/${product.id}`)}
       className="h-64 bg-gray-50 flex items-center justify-center p-5">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain hover:scale-105 transition duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Category */}
        <p className="text-xs uppercase text-gray-500 font-semibold mb-2">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 min-h-14">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <span className="bg-green-600 text-white text-sm px-2 py-1 rounded">
            ⭐ {product.rating.rate}
          </span>

          <span className="text-sm text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-5">
          <p className="text-2xl font-bold text-gray-900">
            ${product.price}
          </p>

          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard; 
