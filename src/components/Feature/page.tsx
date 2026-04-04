import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

export default function FeatureSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });

      tl.from(".feat-image", { clipPath: "inset(100% 0% 0% 0%)", duration: 1.5, ease: "power4.inOut" })
        .from(".feat-img-inner", { scale: 1.2, duration: 1.5, ease: "power3.out" }, "-=1.5")
        .from(".feat-text", { y: 40, opacity: 0, duration: 1, stagger: 0.15, ease: "power3.out" }, "-=1");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f0f0f0] py-24 px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="feat-image relative w-full h-[650px] rounded-[2rem] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200"
            alt="Living Room"
            className="feat-img-inner absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center max-w-xl">
          <p className="feat-text text-sm font-semibold tracking-wide mb-6">Elegance • Timeless</p>
          <h2 className="feat-text text-6xl font-semibold leading-[1.1] tracking-tight mb-8">
            Modern Style <br /> Timeless Charm
          </h2>
          <p className="feat-text text-gray-600 text-lg leading-relaxed mb-10">
            Discover Poliform's 2024 preview, featuring sofas, chairs, and armchairs...
          </p>
          <div className="feat-text">
            <button className="flex items-center gap-3 bg-black text-white px-6 py-3.5 rounded-full text-sm">
              About Us <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
