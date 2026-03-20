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
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-[padding] duration-400 ease-out"
      style={{ padding: scrolled ? "0" : "12px 16px 0" }}
    >
      <nav
        className="w-full transition-all duration-400 ease-out"
        style={{
          maxWidth: scrolled ? "100%" : "1200px",
          borderRadius: scrolled ? "0" : "16px",
          background: scrolled
            ? "hsl(var(--card) / 0.95)"
            : "hsl(var(--card) / 0.6)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: `1px solid hsl(var(--border) / ${scrolled ? "0.8" : "0.3"})`,
          boxShadow: scrolled
            ? "0 4px 30px hsl(var(--foreground) / 0.08)"
            : "0 4px 20px hsl(var(--foreground) / 0.03)",
          border: scrolled
            ? "none"
            : "1px solid hsl(var(--border) / 0.3)",
        }}
      >
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-sm">T</span>
            </div>
            <span className="font-heading font-bold text-lg text-foreground">
              Tikona <span className="text-accent">Research</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
            <a href="#ai" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AI Assistant</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button variant="hero" size="sm">Get Started</Button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-card border-t border-border/50 overflow-hidden"
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
      </nav>
    </div>
  );
};

export default Navbar;
