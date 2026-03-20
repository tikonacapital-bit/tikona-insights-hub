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
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="relative flex items-center justify-between h-16 px-8 max-w-[1400px] mx-auto">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 relative z-10">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-sm">T</span>
            </div>
            <span className="font-heading font-bold text-lg text-foreground">
              Tikona <span className="text-accent">Research</span>
            </span>
          </a>

          {/* Center nav links */}
          <div className="flex items-center gap-8 relative z-10">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
            <a href="#ai" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AI Assistant</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          </div>

          {/* Right buttons */}
          <div className="flex items-center gap-3 relative z-10">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button variant="hero" size="sm">Get Started</Button>
          </div>

          {/* Animated background - starts as center pill, expands to full width */}
          <div
            className="absolute inset-y-0 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            style={{
              left: scrolled ? "-9999px" : "50%",
              right: scrolled ? "-9999px" : "50%",
              marginLeft: scrolled ? "9999px" : "-240px",
              marginRight: scrolled ? "9999px" : "-240px",
              top: scrolled ? 0 : 8,
              bottom: scrolled ? 0 : 8,
              borderRadius: scrolled ? 0 : 9999,
              background: scrolled
                ? "hsl(var(--card) / 0.95)"
                : "hsl(var(--card) / 0.6)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: scrolled ? "none" : "1px solid hsl(var(--border) / 0.4)",
              borderBottom: scrolled ? "1px solid hsl(var(--border) / 0.6)" : undefined,
              boxShadow: scrolled
                ? "0 4px 30px hsl(var(--foreground) / 0.08)"
                : "0 2px 16px hsl(var(--foreground) / 0.04)",
            }}
          />
        </div>
      </div>

      {/* Mobile */}
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
