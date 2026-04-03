import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const About = () => {
  return (
    // The background color matches the warm, off-white aesthetic
    <section className="bg-[#f4f3ef] min-h-screen p-4 md:p-8 lg:p-12 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto">

        {/* Top Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">

          {/* Left Main Image Area */}
          <div className="lg:col-span-8 relative rounded-[2.5rem] h-[500px] lg:h-[650px] overflow-hidden bg-gray-200">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000"
              alt="Modern Minimalist Interior"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlapping Cutout Shape Container
              Using background matching the section bg to create the "cutout" illusion
            */}
            <div className="absolute bottom-0 left-0 bg-[#f4f3ef] pt-8 pr-12 rounded-tr-[3rem] w-[85%] md:w-[65%]">
              {/* Badge */}
              <div className="inline-block border border-gray-400/80 rounded-full px-5 py-2 text-sm font-medium mb-6">
                Gorgeous Interior
              </div>
              {/* Title */}
              <h1 className="text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight">
                Modern <br /> Minimalist
              </h1>
            </div>
          </div>

          {/* Right Column Grid */}
          <div className="lg:col-span-4 flex flex-col gap-6 h-full">

            {/* Top Text Card */}
            <div className="bg-[#e8e6e1] rounded-[2.5rem] p-8 md:p-10 flex-1 flex flex-col justify-center">
              <div className="inline-block border border-gray-400/80 rounded-full px-4 py-1.5 text-sm font-medium w-max mb-6">
                Aesthetic
              </div>
              <p className="text-gray-700 font-medium text-sm md:text-base mb-6 max-w-[250px] leading-relaxed">
                Aesthetic furniture where every piece tells a story of style
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
                Into a gallery <br /> of elegance
              </h2>
            </div>

            {/* Bottom Image Card */}
            <div className="relative rounded-[2.5rem] overflow-hidden flex-1 group cursor-pointer h-[300px] lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=800"
                alt="Outdoor Chair"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/20" />

              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div>
                  <div className="inline-block border border-white/60 text-white rounded-full px-4 py-1.5 text-sm font-medium w-max mb-4 backdrop-blur-sm">
                    Best Furniture
                  </div>
                  <p className="text-white text-base font-medium max-w-[200px] leading-snug drop-shadow-md">
                    Indulge in the artistry of everyday living
                  </p>
                </div>

                {/* Action Button */}
                <div className="self-end mt-auto">
                  <div className="bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors transform hover:-translate-y-1">
                     <ArrowUpRight size={24} strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center pt-6 lg:pt-12">
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-6xl font-medium mb-3 text-gray-900 tracking-tight">500+</div>
            <div className="text-gray-500 font-medium text-sm md:text-base">Products</div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-6xl font-medium mb-3 text-gray-900 tracking-tight">20+</div>
            <div className="text-gray-500 font-medium text-sm md:text-base">Projects</div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-6xl font-medium mb-3 text-gray-900 tracking-tight">50+</div>
            <div className="text-gray-500 font-medium text-sm md:text-base">Satisfied Customers</div>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-6xl font-medium mb-3 text-gray-900 flex justify-center items-start tracking-tight">
              1<span className="text-3xl md:text-4xl mt-1.5 font-medium">st</span>
            </div>
            <div className="text-gray-500 font-medium text-sm md:text-base">Top 1 in Paris</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
