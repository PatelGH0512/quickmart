import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Images */}
      <img
        src={assets.main_banner_bg}
        alt="banner"
        className="w-full hidden md:block object-cover"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="banner"
        className="w-full md:hidden object-cover"
      />

      {/* Banner Content */}
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-6 md:pl-20 lg:pl-32 text-white bg-gradient-to-t from-black/50 via-transparent">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center md:text-left max-w-80 md:max-w-2xl leading-tight drop-shadow-lg">
          Freshness You Can Trust,
          <br className="hidden md:block" />
          Savings You'll Love!
        </h1>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-8 font-medium">
          <Link
            to="/products"
            className="group flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 shadow-lg transition-transform transform hover:scale-105"
          >
            Shop Now
            <img
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              src={assets.white_arrow_icon}
              alt="arrow"
            />
          </Link>

          <Link
            to="/products"
            className="group hidden md:flex items-center gap-2 px-8 py-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-black shadow-md transition-all transform hover:scale-105"
          >
            Explore Deals
            <img
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              src={assets.black_arrow_icon}
              alt="arrow"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
