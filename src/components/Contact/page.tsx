import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate the left side text
      gsap.from(".contact-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Animate the form fields
      gsap.from(".form-item", {
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f4f3ef] py-20 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Side: Contact Info */}
        <div className="flex flex-col justify-center">
          <p className="contact-text text-xs md:text-sm font-semibold tracking-wide mb-4 uppercase text-gray-500">
            Get in touch
          </p>
          <h2 className="contact-text text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight mb-8 text-gray-900">
            Let's Shape <br /> Your Space.
          </h2>
          <p className="contact-text text-gray-600 text-lg leading-relaxed mb-12 max-w-md">
            Whether you have a specific project in mind or simply want to
            explore our collections, our design consultants are here to assist
            you.
          </p>

          <div className="flex flex-col sm:flex-row gap-10 md:gap-16">
            <div className="contact-text">
              <h4 className="font-semibold text-gray-900 mb-2">Headquarters</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Via Jyoti Nagar D-96,
                <br />
                Shahdra 110094, New Delhi
              </p>
            </div>
            <div className="contact-text">
              <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-1">
                info@poliform.it
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                +39 031 6951
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Minimalist Form */}
        <div className="contact-form bg-white/50 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/60 shadow-lg flex flex-col justify-center">
          <form
            className="flex flex-col gap-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-item flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-xs font-semibold uppercase tracking-wider text-gray-500"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-black transition-colors placeholder:text-gray-300"
              />
            </div>

            <div className="form-item flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-xs font-semibold uppercase tracking-wider text-gray-500"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-black transition-colors placeholder:text-gray-300"
              />
            </div>

            <div className="form-item flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-xs font-semibold uppercase tracking-wider text-gray-500"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-black transition-colors placeholder:text-gray-300 resize-none"
              ></textarea>
            </div>

            <div className="form-item mt-4">
              <button
                type="submit"
                className="w-full flex justify-center items-center gap-3 bg-black text-white px-7 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors group"
              >
                Send Message
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
