import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-bg", { scale: 1.2, duration: 2 })
        .from(
          ".hero-title",
          {
            y: 100,
            opacity: 0,
            duration: 1.5,
            clipPath: "inset(100% 0% 0% 0%)",
          },
          "-=1.5",
        )
        .from(
          ".hero-card",
          { y: 40, opacity: 0, duration: 1, stagger: 0.2 },
          "-=1",
        )
        .from(
          ".hero-badge",
          { scale: 0, opacity: 0, duration: 1, ease: "back.out(1.5)" },
          "-=0.8",
        );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#f4f3ef] pb-10">
      <div className="relative w-[95vw] mx-auto h-[85vh] overflow-hidden rounded-[3rem]">
        <img
          src="/hero.jpg"
          alt="Hero"
          className="hero-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute inset-0 flex flex-col">
          <div className="flex-1 flex items-center justify-center pt-20 overflow-hidden">
            <h1 className="hero-title text-[12vw] font-bold text-white/80 leading-none pointer-events-none tracking-tighter">
              Contemporary
            </h1>
          </div>

          <div className="w-full pb-16 px-10 z-20">
            <div className="flex flex-col md:flex-row items-end gap-6">
              {/* Card 1 */}
              <div className="hero-card max-w-md p-8 bg-white/15 backdrop-blur-xl border border-white/30 rounded-[2.5rem] shadow-2xl">
                <p className="text-white/95 text-sm md:text-base mb-8 font-medium">
                  Crafting spaces that harmonize modern aesthetics with timeless
                  elegance...
                </p>
                <button className="flex items-center gap-2 bg-black text-white px-7 py-3.5 rounded-full text-xs font-bold">
                  View More <ArrowRight size={14} />
                </button>
              </div>

              {/* Card 2 */}
              <div className="hero-card w-full md:w-[320px] p-4 bg-white/15 backdrop-blur-xl border border-white/30 rounded-[2.5rem]">
                <div className="relative w-full h-40 rounded-[1.8rem] overflow-hidden">
                  <video
                    src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="hero-badge absolute bottom-16 right-16 hidden lg:block">
          <div className="relative w-28 h-28 flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full animate-spin-slow opacity-60"
            >
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="text-[10px] uppercase font-bold tracking-[0.2em] fill-white">
                <textPath xlinkHref="#circlePath">
                  Modern Minimalist • Modern Minimalist •
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
