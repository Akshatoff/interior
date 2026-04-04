import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.nav-item', {
        y: -20,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2
      });
    }, headerRef);
    return () => ctx.revert();
  }, []);

  return (
    <nav ref={headerRef} className="flex justify-between w-full px-10 items-center py-6 bg-[#f4f3ef] relative z-50">
      <h1 className="nav-item text-3xl font-bold tracking-tighter">Poliform</h1>
      <ul className="flex flex-row gap-8 list-none text-sm font-medium uppercase tracking-widest">
        {['Product', 'Lifestyle', 'News', 'Projects'].map((item) => (
          <li key={item} className="nav-item cursor-pointer hover:opacity-60 transition-opacity">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}
