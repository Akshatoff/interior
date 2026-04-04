import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Header() {
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".nav-item", {
        y: -20,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2,
      });
    }, headerRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.from(".mobile-item", {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
      });
    }
  }, [isOpen]);

  return (
    <nav
      ref={headerRef}
      className="flex justify-between w-full px-6 md:px-10 items-center py-5 md:py-6 bg-[#f4f3ef] relative z-50"
    >
      <h1 className="nav-item text-2xl md:text-3xl font-bold tracking-tighter">
        Poliform
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex flex-row gap-8 list-none text-sm font-medium uppercase tracking-widest">
        {["Product", "Lifestyle", "News", "Projects"].map((item) => (
          <li
            key={item}
            className="nav-item cursor-pointer hover:opacity-60 transition-opacity"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden mobile-item nav-item cursor-pointer text-sm font-medium uppercase tracking-widest hover:opacity-60"
      >
        Menu
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#f4f3ef] flex flex-col items-center py-6 gap-6 md:hidden shadow-md">
          {["Product", "Lifestyle", "News", "Projects"].map((item) => (
            <div
              key={item}
              className="text-sm font-medium uppercase tracking-widest cursor-pointer hover:opacity-60"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
