import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "../context/AppContext";

const BestSeller = () => {
  const { products } = useAppContext();

  return (
    <div className="mt-20 p-20 bg-gradient-to-b from-white via-gray-100 to-gray-200">
      {/* Section Heading */}
      <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center md:text-left">
        🌟 Best Sellers
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-8">
        {products
          .filter((product) => product.inStock)
          .slice(0, 5)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default BestSeller;
