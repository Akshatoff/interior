import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax on the image
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

      // Text reveal
      gsap.from(".ft-text", {
        scrollTrigger: { trigger: footerRef.current, start: "top 80%" },
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
      className="bg-black text-white py-20 px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="ft-text text-7xl font-semibold mb-10 tracking-tight">
              Engage with Us in <br /> Conversation.
            </h2>
            <p className="ft-text text-gray-400 text-base max-w-md">
              In a global world based on communication...
            </p>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden h-[350px]">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"
              alt="Conversation"
              className="footer-img w-full h-[120%] object-cover -mt-[10%]"
            />
          </div>
        </div>

        {/* Links Grid setup (reuse from previous code, add 'ft-text' class to columns) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative">
          <div className="ft-text">
            <h4 className="font-semibold mb-6 text-lg">About</h4>
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
            <h4 className="font-semibold mb-6 text-lg">Customer Service</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">
                Prices and Payments
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Shipping
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Return Policy
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Terms of Service
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Privacy Policy
              </li>
            </ul>
          </div>

          <div className="ft-text">
            <h4 className="font-semibold mb-6 text-lg">Social Media</h4>
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
          <div className="flex items-end justify-end col-span-full md:col-span-1 ft-text">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter opacity-100">
              Poliform
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
}
