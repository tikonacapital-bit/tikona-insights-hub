import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "30px 30px"
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Your Next Investment Decision Deserves Better Research
          </h2>
          <p className="text-lg text-primary-foreground/85 mb-4 leading-relaxed">
            Stop making decisions based on tips and outdated PDFs.
            Get research you can read, listen to, watch, and interrogate with AI.
          </p>

          {/* Community proof */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-primary-foreground/20 bg-primary-foreground/10 flex items-center justify-center text-xs font-bold text-primary-foreground/60"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <p className="text-sm text-primary-foreground/70">
              Join <span className="font-semibold text-primary-foreground">2,400+</span> investors who upgraded their research this quarter
            </p>
          </div>

          <Button
            variant="hero"
            size="lg"
            className="text-base px-10 py-6"
            onClick={() => scrollTo("pricing")}
          >
            See Plans <ArrowRight className="ml-1" size={18} />
          </Button>
          <p className="mt-6 text-sm text-primary-foreground/70">SEBI Registered Investment Adviser · No credit card required</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
