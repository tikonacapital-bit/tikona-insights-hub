import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import AISection from "@/components/landing/AISection";
import Pricing from "@/components/landing/Pricing";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <AISection />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
