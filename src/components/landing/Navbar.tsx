import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Desktop navbar */}
      <div className="hidden md:flex items-center justify-center h-16 px-6 relative"
        style={{ marginTop: scrolled ? 0 : 12 }}
      >
        {/* Logo - sits outside the pill initially, gets covered on scroll */}
        <a
          href="#"
          className="flex items-center gap-2 absolute left-6 z-10 transition-opacity duration-400 ease-out"
          style={{ opacity: scrolled ? 1 : 1 }}
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-sm">T</span>
          </div>
          <span className="font-heading font-bold text-lg text-foreground">
            Tikona <span className="text-accent">Research</span>
          </span>
        </a>

        {/* Right buttons - sit outside the pill initially */}
        <div className="flex items-center gap-3 absolute right-6 z-10">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button variant="hero" size="sm">Get Started</Button>
        </div>

        {/* Expanding background pill */}
        <div
          className="absolute transition-all duration-500 ease-out"
          style={{
            left: scrolled ? "0" : "50%",
            right: scrolled ? "0" : "50%",
            top: scrolled ? "0" : "6px",
            bottom: scrolled ? "0" : "6px",
            transform: scrolled ? "none" : "translateX(-50%)",
            width: scrolled ? "100%" : "auto",
            minWidth: scrolled ? "100%" : "460px",
            marginLeft: scrolled ? "0" : "50%",
            borderRadius: scrolled ? "0" : "9999px",
            background: scrolled
              ? "hsl(var(--card) / 0.95)"
              : "hsl(var(--card) / 0.65)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: scrolled
              ? "none"
              : "1px solid hsl(var(--border) / 0.4)",
            borderBottom: scrolled
              ? "1px solid hsl(var(--border) / 0.6)"
              : undefined,
            boxShadow: scrolled
              ? "0 4px 30px hsl(var(--foreground) / 0.08)"
              : "0 2px 16px hsl(var(--foreground) / 0.04)",
          }}
        />

        {/* Simpler approach: use two layers */}
        {/* Nav links - always centered */}
        <div className="flex items-center gap-8 relative z-10">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="#ai" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AI Assistant</a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
        </div>
      </div>

      {/* Mobile navbar */}
      <div className="md:hidden">
        <div className="flex items-center justify-between h-14 px-4 bg-card/90 backdrop-blur-xl border-b border-border/50">
          <a href="#" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xs">T</span>
            </div>
            <span className="font-heading font-bold text-base text-foreground">
              Tikona <span className="text-accent">Research</span>
            </span>
          </a>
          <button className="text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-card border-b border-border/50 overflow-hidden"
            >
              <div className="flex flex-col gap-4 p-4">
                <a href="#features" className="text-sm text-muted-foreground">Features</a>
                <a href="#how-it-works" className="text-sm text-muted-foreground">How It Works</a>
                <a href="#ai" className="text-sm text-muted-foreground">AI Assistant</a>
                <a href="#pricing" className="text-sm text-muted-foreground">Pricing</a>
                <div className="flex gap-3 pt-2">
                  <Button variant="ghost" size="sm" className="flex-1">Sign In</Button>
                  <Button variant="hero" size="sm" className="flex-1">Get Started</Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
