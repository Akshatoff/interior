import React, { useEffect, useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import gsap from "gsap";

const CollectionCard = ({ title, image, heightClass, className }) => (
  <div
    className={`col-card relative rounded-[2rem] overflow-hidden group w-full ${heightClass} ${className}`}
  >
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/30" />
    <div className="absolute bottom-0 p-6 flex justify-between items-end w-full">
      <h3 className="text-white text-2xl font-medium">{title}</h3>
      <div className="bg-white/90 p-2 rounded-full">
        <ArrowUpRight size={20} />
      </div>
    </div>
  </div>
);

export default function CollectionSection() {
  const sectionRef = useRef(null);

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
        scrollTrigger: { trigger: ".col-grid", start: "top 75%" },
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
    <section ref={sectionRef} className="bg-[#f0f0f0] py-24 px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="col-text text-6xl font-semibold leading-tight max-w-lg">
            Explore Our Proudly Collection
          </h2>
          <div className="flex flex-col items-end gap-6 max-w-sm text-right">
            <button className="col-text flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-xs">
              View More <ArrowRight size={14} />
            </button>
            <p className="col-text text-gray-600 text-sm">
              Poliform will showcase its vision of contemporary architecture...
            </p>
          </div>
        </div>

        <div className="col-grid grid grid-cols-3 gap-6">
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
}
