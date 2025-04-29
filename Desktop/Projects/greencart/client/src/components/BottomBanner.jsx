import React from "react";
import { assets, features } from "../assets/assets";

const BottomBanner = () => {
  return (
    <div className="relative mt-28 overflow-hidden">
      {/* Background Images */}
      <img
        src={assets.bottom_banner_image}
        alt="banner"
        className="w-full hidden md:block object-cover"
      />
      <img
        src={assets.bottom_banner_image_sm}
        alt="banner"
        className="w-full md:hidden object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center md:items-end justify-center pt-20 md:pt-0 px-6 md:pr-24 bg-gradient-to-t from-white/20 via-white/12 to-transparent">
        <div className="max-w-lg backdrop-blur-sm bg-white/70 rounded-xl p-8 shadow-lg">
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-600 mb-8 text-center md:text-right">
            Why We Are the Best?
          </h1>

          <div className="flex flex-col gap-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 group hover:scale-105 transition-transform"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full shadow-inner group-hover:bg-green-200 transition">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-6 h-6"
                  />
                </div>
                <div className="w-full text-center md:text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
