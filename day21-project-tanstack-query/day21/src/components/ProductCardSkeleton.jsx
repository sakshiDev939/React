import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="w-[320px] rounded-2xl bg-[#111318] border border-gray-800 overflow-hidden shadow-xl animate-pulse">

      {/* Image Skeleton */}
      <div className="h-64 bg-[#1b1e24]"></div>

      {/* Content */}
      <div className="p-5">

        {/* Brand */}
        <div className="h-4 w-20 bg-[#252932] rounded mb-3"></div>

        {/* Title */}
        <div className="h-5 w-56 bg-[#252932] rounded"></div>

        {/* Price */}
        <div className="h-7 w-20 bg-[#252932] rounded mt-4"></div>

        {/* Bottom */}
        <div className="flex gap-3 mt-5">

          {/* Quantity */}
          <div className="w- [115px] h-12 bg-[#1b1e24] border border-gray-700 rounded-xl"></div>

          {/* Add Cart */}
          <div className="flex-1 h-12 bg-[#252932] rounded-xl"></div>

        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;