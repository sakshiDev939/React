import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-[320px] rounded-2xl bg-[#111318] border border-gray-800 overflow-hidden shadow-xl text-white">
      
      {/* Image */}
      <div className="relative h-64 bg-[#181b21] flex items-center justify-center">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-contain p-6"
        />

        {/* Discount */}
        <span className="absolute top-4 right-4 bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
          {Math.round(product.discountPercentage)}% OFF
        </span>
      </div>

      {/* Details */}
      <div className="p-5">
        <p className="text-sm text-gray-400">{product.brand}</p>

        <h2 className="text-lg font-semibold mt-1 line-clamp-1">
          {product.title}
        </h2>

        <p className="text-2xl font-bold text-purple-400 mt-3">
          ${product.price}
        </p>

        {/* Bottom */}
        <div className="flex gap-3 mt-5">
          
          {/* Quantity */}
          <div className="flex items-center justify-between  w- [115px] px-3 rounded-xl bg-[#1b1e24] border border-gray-700">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="text-xl text-gray-300"
            >
              −
            </button>

            <span>{quantity}</span>

            <button
              onClick={() => setQuantity(quantity + 1)}
              className="text-xl text-gray-300"
            >
              +
            </button>
          </div>

          {/* Cart */}
          <button
            className="flex-1 bg-purple-500 hover:bg-purple-600 transition rounded-xl font-semibold"
            onClick={() => console.log(product, quantity)}
          >
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;