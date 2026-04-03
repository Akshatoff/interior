import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

// Reusable Card Component for the Grid
const CollectionCard = ({ title, image, heightClass }) => (
  <div
    className={`relative rounded-[2rem] overflow-hidden group cursor-pointer w-full ${heightClass}`}
  >
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    {/* Gradient overlay for text readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-100" />

    <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
      <h3 className="text-white text-2xl font-medium tracking-wide">{title}</h3>
      <div className="bg-white/90 backdrop-blur-sm text-black p-2 rounded-full transform transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
        <ArrowUpRight size={20} strokeWidth={2.5} />
      </div>
    </div>
  </div>
);

const Collection = () => {
  return (
    <section className="bg-[#f0f0f0] py-16 md:py-24 px-4 md:px-8 lg:px-12 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight max-w-lg">
            Explore Our Proudly Collection
          </h2>

          <div className="flex flex-col items-start lg:items-end gap-6 max-w-sm text-right lg:text-right">
            <button className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-xs font-medium hover:bg-gray-800 transition-colors group">
              View More
              <ArrowRight
                size={14}
                className="transform transition-transform group-hover:translate-x-1"
              />
            </button>
            <p className="text-gray-600 text-sm leading-relaxed lg:text-right">
              Poliform will showcase its vision of contemporary architecture,
              interior design trends, and innovative living at Salone del
              Mobile.Milano 2024.
            </p>
          </div>
        </div>

        {/* Masonry Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <CollectionCard
              title="Mondrian"
              image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
              heightClass="h-[350px]"
            />
            <CollectionCard
              title="Brera"
              image="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&q=80&w=800"
              heightClass="h-[450px]"
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <CollectionCard
              title="Nirnia"
              image="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800"
              heightClass="h-[500px]"
            />
            <CollectionCard
              title="Alea Pro"
              image="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&q=80&w=800"
              heightClass="h-[300px]"
            />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <CollectionCard
              title="Artex"
              image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
              heightClass="h-[350px]"
            />
            <CollectionCard
              title="Nirnia"
              image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800"
              heightClass="h-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
