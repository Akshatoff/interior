import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

export default function FeatureSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.from(".feat-image", {
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 1.5,
        ease: "power4.inOut",
      })
        .from(
          ".feat-img-inner",
          { scale: 1.2, duration: 1.5, ease: "power3.out" },
          "-=1.5",
        )
        // Everything with .feat-text will stagger in naturally, including the new list items
        .from(
          ".feat-text",
          { y: 40, opacity: 0, duration: 1, stagger: 0.15, ease: "power3.out" },
          "-=1",
        );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const processSteps = [
    {
      num: "01",
      title: "Concept & Design",
      desc: "Tailoring spatial aesthetics to your lifestyle.",
    },
    {
      num: "02",
      title: "Material Selection",
      desc: "Sourcing premium, sustainable textures.",
    },
    {
      num: "03",
      title: "Master Craftsmanship",
      desc: "Refining every detail with precision.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#f0f0f0] py-16 md:py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Side */}
        <div className="feat-image relative w-full h-[400px] md:h-[550px] lg:h-[650px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden order-2 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200"
            alt="Living Room"
            className="feat-img-inner absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text Side */}
        <div className="flex flex-col justify-center max-w-xl order-1 lg:order-2">
          <p className="feat-text text-xs md:text-sm font-semibold tracking-wide mb-4 md:mb-6 uppercase text-gray-500">
            Elegance • Timeless
          </p>
          <h2 className="feat-text text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-6 md:mb-8 text-gray-900">
            Modern Style <br /> Timeless Charm
          </h2>
          <p className="feat-text text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            Discover Poliform's 2024 preview, featuring sofas, chairs, and
            armchairs designed to redefine contemporary living spaces.
          </p>

          {/* NEW: Process List */}
          <ul className="flex flex-col gap-5 mb-10">
            {processSteps.map((item, index) => (
              <li
                key={index}
                className="feat-text flex gap-4 items-start group"
              >
                <span className="text-xs font-bold mt-1 text-black/40 group-hover:text-black transition-colors">
                  {item.num}
                </span>
                <div>
                  <h4 className="font-medium text-gray-900 text-lg">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="feat-text">
            <button className="flex items-center gap-3 bg-black text-white px-7 py-3.5 rounded-full text-sm hover:bg-gray-800 transition-colors">
              About Us <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
