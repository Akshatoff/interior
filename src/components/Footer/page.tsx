import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax on the image - only active on larger screens for performance
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.to(".footer-img", {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Text reveal
      gsap.from(".ft-text", {
        scrollTrigger: { trigger: footerRef.current, start: "top 85%" },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-black text-white py-16 md:py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 mb-16 md:mb-24">
          <div>
            <h2 className="ft-text text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 md:mb-10 tracking-tight leading-tight">
              Talk to <br className="hidden md:block" /> Pratyush Interiors.
            </h2>
            <p className="ft-text text-gray-400 text-sm md:text-base max-w-md leading-relaxed">
              Unlock the full believable of your living spaces with our unique
              design consultancy service. Our proficient team provides the best
              solutions that enhance functionality and aesthetic to elevate your
              home to the next level.
            </p>
          </div>
          <div className="rounded-[2rem] md:rounded-[2.5rem] overflow-hidden h-[250px] md:h-[350px]">
            <img
              src="/foot.jpeg"
              alt="Conversation"
              className="footer-img w-full h-full md:h-[120%] object-cover md:-mt-[10%]"
            />
          </div>
        </div>

        {/* Links Grid setup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 relative">
          <div className="ft-text">
            <h4 className="font-semibold mb-5 text-lg">About</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">
                Our Story
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Store Locator
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Sustainability
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Careers
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Contact
              </li>
            </ul>
          </div>

          <div className="ft-text">
            <h4 className="font-semibold mb-5 text-lg">Our Service</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">
                Residential Designing
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Offical Designing
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Commercial Designing
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Modular kitchen
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Modular Washroom
              </li>
            </ul>
          </div>

          <div className="ft-text">
            <h4 className="font-semibold mb-5 text-lg">Social Media</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">
                Instagram
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Facebook
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Linkedin
              </li>
            </ul>
          </div>

          {/* Large Brand Mark */}
          <div className="flex items-end justify-start sm:justify-end col-span-1 sm:col-span-2 lg:col-span-1 ft-text pt-10 sm:pt-0">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter opacity-100">
              Pratyush Interior
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
}
