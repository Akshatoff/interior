import React, { useEffect, useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import gsap from "gsap";

interface CollectionCardProps {
  title: string;
  image: string;
  heightClass: string;
  className?: string;
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  title,
  image,
  heightClass,
  className = "",
}) => (
  <div
    className={`col-card relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group w-full ${heightClass} ${className}`}
  >
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:bg-black/40" />
    <div className="absolute bottom-0 p-5 md:p-6 flex justify-between items-end w-full">
      <h3 className="text-white text-xl md:text-2xl font-medium">{title}</h3>
      <div className="bg-white/90 p-2 rounded-full cursor-pointer hover:scale-110 transition-transform">
        <ArrowUpRight size={18} className="text-black" />
      </div>
    </div>
  </div>
);

export default function CollectionSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".col-text", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".col-card", {
        scrollTrigger: { trigger: ".col-grid", start: "top 85%" },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f0f0f0] py-16 md:py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Responsive Header Wrapper: Stacks on mobile, sides on desktop */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-0 mb-12 md:mb-16">
          <h2 className="col-text text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-full lg:max-w-lg text-gray-900">
            Explore Our Proudly Collection
          </h2>
          <div className="flex flex-col items-start lg:items-end gap-5 max-w-sm text-left lg:text-right">
            <button className="col-text flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-xs hover:bg-gray-800 transition-colors">
              View More <ArrowRight size={14} />
            </button>
            <p className="col-text text-gray-600 text-sm leading-relaxed">
              Poliform will showcase its vision of contemporary architecture,
              interior design trends, and innovative living at Salone del
              Mobile.Milano 2024.
            </p>
          </div>
        </div>

        <div className="col-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="flex flex-col gap-4 md:gap-6">
            <CollectionCard
              title="Mondrian"
              image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
              heightClass="h-[300px] md:h-[350px]"
            />
            <CollectionCard
              title="Brera"
              image="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&q=80&w=800"
              heightClass="h-[350px] md:h-[450px]"
            />
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <CollectionCard
              title="Nirnia"
              image="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800"
              heightClass="h-[350px] md:h-[500px]"
            />
            <CollectionCard
              title="Alea Pro"
              image="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&q=80&w=800"
              heightClass="h-[250px] md:h-[300px]"
            />
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <CollectionCard
              title="Artex"
              image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
              heightClass="h-[300px] md:h-[350px]"
            />
            <CollectionCard
              title="Nirnia"
              image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800"
              heightClass="h-[350px] md:h-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
