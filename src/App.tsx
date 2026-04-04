import React, { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./components/Header/page";
import Hero from "./components/Hero/page";
import About from "./components/About/page";
import Feature from "./components/Feature/page";
import Collection from "./components/Collection/page";
import Footer from "./components/Footer/page";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize vanilla Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Premium ease
      smoothWheel: true,
    });

    // Synchronize Lenis scrolling with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Add Lenis's requestAnimationFrame to GSAP's ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable GSAP lag smoothing to prevent jitter with Lenis
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);
  return (
    <div className="bg-[#f4f3ef] min-h-screen overflow-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Feature />
        <Collection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
