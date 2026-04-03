import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="relative w-full bg-[#f4f3ef] pb-10">
      <div className="relative w-[95vw] mx-auto h-[85vh] overflow-hidden rounded-[3rem]">
        {/* Hero Image */}
        <img
          src="/hero.jpg"
          alt="Contemporary Minimalist Living Space"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Main Content Wrapper */}
        <div className="absolute inset-0 flex flex-col">
          {/* Top/Middle: Large Title */}
          <div className="flex-1 flex items-center justify-center pt-20">
            <h1 className="text-[12vw] font-bold text-white/80 leading-none pointer-events-none tracking-tighter">
              Contemporary
            </h1>
          </div>

          {/* Bottom: Cards Container (Shifted to the bottom level) */}
          <div className="w-full pb-16 px-10 z-20">
            <div className="flex flex-col md:flex-row items-end gap-6">
              {/* Glass Card 1: Text */}
              <div className="max-w-md p-8 bg-white/15 backdrop-blur-xl border border-white/30 rounded-[2.5rem] shadow-2xl">
                <p className="text-white/95 text-sm md:text-base leading-relaxed mb-8 font-medium">
                  Crafting spaces that harmonize modern aesthetics with timeless
                  elegance, our contemporary interior designs breathe life into
                  every room, redefining the essence of chic living.
                </p>
                <button className="flex items-center gap-2 bg-black text-white px-7 py-3.5 rounded-full text-xs font-bold hover:bg-gray-900 transition-all group">
                  View More
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>

              {/* Glass Card 2: Video */}
              <div className="w-full md:w-[320px] p-4 bg-white/15 backdrop-blur-xl border border-white/30 rounded-[2.5rem] shadow-2xl">
                <div className="relative w-full h-40 rounded-[1.8rem] overflow-hidden group cursor-pointer">
                  <video
                    src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-all">
                    <div className="w-10 h-10 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50">
                      <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacer for Desktop to push the ring to the far right if needed,
                  or let it sit naturally in the flex flow. */}
            </div>
          </div>
        </div>

        {/* Floating Circular Badge (Now sits alongside the cards) */}
        <div className="absolute bottom-16 right-16 hidden lg:block">
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
            <div className="absolute w-1 h-1 bg-white rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
