import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
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
            Ready to Transform How You Research?
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-8 leading-relaxed">
            Join investors who have upgraded from static PDFs to interactive, AI-powered research. 
            Start with a free report and see the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-base px-10 py-6">
              Get Your First Report Free <ArrowRight className="ml-1" size={18} />
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
              View Sample Report
            </Button>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/50">No credit card required · Cancel anytime</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
