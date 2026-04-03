import React from "react";
import { ArrowRight } from "lucide-react";

const Feature = () => {
  return (
    <section className="bg-[#f0f0f0] py-16 md:py-24 px-4 md:px-8 lg:px-12 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Image */}
          <div className="relative w-full h-[400px] md:h-[550px] lg:h-[650px] rounded-[2rem] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200"
              alt="Modern Living Room"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col justify-center max-w-xl">
            <p className="text-sm md:text-base font-semibold text-gray-800 tracking-wide mb-6">
              Elegance • Timeless
            </p>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight mb-8">
              Modern Style <br /> Timeless Charm
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 pr-4 lg:pr-12">
              Discover Poliform's 2024 preview, featuring sofas, chairs, and
              armchairs embodying diverse lifestyle concepts, alongside striking
              tables, coffee tables, and sideboards.
            </p>

            <div>
              <button className="flex items-center gap-3 bg-black text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors group">
                About Us
                <ArrowRight
                  size={18}
                  className="transform transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
