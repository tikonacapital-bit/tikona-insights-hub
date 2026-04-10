import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import PainSection from "@/components/landing/PainSection";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import AIPlayground from "@/components/landing/AIPlayground";
import DemoVideo from "@/components/landing/DemoVideo";
import Pricing from "@/components/landing/Pricing";
import Portfolios from "@/components/landing/Portfolios";
import Footer from "@/components/landing/Footer";

const Index = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PainSection />
      <Features />
      <HowItWorks />
      <DemoVideo />
      <AIPlayground />
      <Pricing />
      <Portfolios />
      <Footer />
    </div>
  );
};

export default Index;
