import React from "react";
import { categories } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Categories = () => {
  const { navigate } = useAppContext();

  return (
    <div className="mt-20 px-4 ">
      {/* Heading */}
      <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center md:text-left">
        Browse Categories
      </p>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/products/${category.path.toLowerCase()}`);
              scrollTo(0, 0);
            }}
            className="group cursor-pointer py-6 px-4 rounded-xl flex flex-col justify-center items-center bg-gradient-to-br from-white via-gray-100 to-gray-200 hover:from-gray-100 hover:to-gray-300 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="w-24 h-24 flex items-center justify-center mb-3 bg-white rounded-full shadow-inner group-hover:scale-110 transform transition-transform duration-300">
              <img
                src={category.image}
                alt={category.text}
                className="max-w-16 max-h-16 object-contain"
              />
            </div>
            <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition">
              {category.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
