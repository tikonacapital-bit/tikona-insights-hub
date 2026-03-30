import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import tikonaLogo from "@/assets/tikona-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      if (y > 300) {
        setHidden(y > lastY);
      } else {
        setHidden(false);
      }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    ["features", "Features"],
    ["how-it-works", "How It Works"],
    ["ai-playground", "AI Assistant"],
    ["pricing", "Pricing"],
    ["portfolios", "Portfolios"],
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex justify-center"
      style={{
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.3s ease",
      }}
    >
      {/* Desktop */}
      <div className="hidden md:block w-full" style={{ padding: scrolled ? "10px 0" : "0", transition: "padding 0.4s ease" }}>
        <div
          className="mx-auto flex items-center justify-between h-16 px-8"
          style={{
            maxWidth: scrolled ? 880 : 1100,
            borderRadius: scrolled ? 40 : 0,
            background: scrolled
              ? "rgba(255, 255, 255, 0.25)"
              : "transparent",
            backdropFilter: scrolled ? "blur(10px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(10px)" : "none",
            border: scrolled
              ? "1px solid rgba(0, 0, 0, 0.08)"
              : "1px solid transparent",
            boxShadow: scrolled
              ? "0 8px 32px rgba(0, 0, 0, 0.08)"
              : "none",
            transition: "all 0.4s ease",
          }}
        >
          {/* Logo */}
          <a href="/" onClick={scrollToTop} className="shrink-0 cursor-pointer">
            <img src={tikonaLogo} alt="Tikona Capital" className="h-10 w-auto" />
          </a>

          {/* Center nav links */}
          <div className="flex items-center gap-8">
            {navLinks.map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors whitespace-nowrap"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Right button */}
          <div className="flex items-center shrink-0">
            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollTo("ai-playground")}
            >
              Try AI Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden w-full" style={{ padding: scrolled ? "8px 12px" : "0", transition: "padding 0.4s ease" }}>
        <div
          className="flex items-center justify-between h-14 px-4"
          style={{
            borderRadius: scrolled ? 24 : 0,
            background: scrolled
              ? "rgba(255, 255, 255, 0.85)"
              : "transparent",
            backdropFilter: scrolled ? "blur(10px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(10px)" : "none",
            border: scrolled
              ? "1px solid rgba(0, 0, 0, 0.08)"
              : "1px solid transparent",
            boxShadow: scrolled
              ? "0 8px 32px rgba(0, 0, 0, 0.08)"
              : "none",
            transition: "all 0.4s ease",
          }}
        >
          <a href="/" onClick={scrollToTop} className="shrink-0 cursor-pointer">
            <img src={tikonaLogo} alt="Tikona Capital" className="h-8 w-auto" />
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
              className="overflow-hidden mx-2 mt-1 rounded-2xl"
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
              }}
            >
              <div className="flex flex-col gap-4 p-4">
                {navLinks.map(([id, label]) => (
                  <button
                    key={id}
                    onClick={() => { setIsOpen(false); scrollTo(id); }}
                    className="text-sm text-muted-foreground"
                  >
                    {label}
                  </button>
                ))}
                <div className="flex gap-3 pt-2">
                  <Button variant="hero" size="sm" className="flex-1" onClick={() => { setIsOpen(false); scrollTo("ai-playground"); }}>
                    Try AI Demo
                  </Button>
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
