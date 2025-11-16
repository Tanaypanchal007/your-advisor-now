import React from "react";
import Heroimg from "../public/Images/Hero-img.jpg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen" id="home">
      {/* Background Image */}
      <Image
        src={Heroimg}
        className="w-full h-screen object-cover"
        alt="Hero"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-2xl md:text-5xl font-bold font-serif mb-2 xl:mb-4 xl:px-16">
          Exquisite Accounting Solutlons for Discerning Professionals
        </h1>
        <p className="text-lg md:text-xl mb-6">
          For Professionals & Businesses Who Value Excellence
        </p>

        <button className="bg-secondary text-white px-6 py-3 rounded-full hover:bg-gray-200 transition">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
