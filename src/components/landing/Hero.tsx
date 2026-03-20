import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "linear-gradient(160deg, hsl(0 0% 100%) 0%, hsl(220 40% 96%) 25%, hsl(220 55% 88%) 50%, hsl(220 65% 40%) 80%, hsl(220 65% 30%) 100%)" }}>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent/6 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              <span className="text-sm text-primary-foreground/80 font-medium">By Tikona Capital</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              <span className="text-foreground">Research That</span>
              <br />
              <span className="text-gradient">Speaks to You</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0">
              Go beyond static PDFs. Access in-depth equity research as interactive reports, 
              audio insights, explainer videos — and even chat with your research using AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-base px-8 py-6">
                Start Exploring <ArrowRight className="ml-1" size={18} />
              </Button>
              <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
                <Play size={18} className="mr-1" /> Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
              <div className="text-center">
                <p className="text-2xl font-heading font-bold text-primary-foreground">500+</p>
                <p className="text-xs text-primary-foreground/60">Research Reports</p>
              </div>
              <div className="w-px h-10 bg-primary-foreground/20" />
              <div className="text-center">
                <p className="text-2xl font-heading font-bold text-primary-foreground">50+</p>
                <p className="text-xs text-primary-foreground/60">Companies Covered</p>
              </div>
              <div className="w-px h-10 bg-primary-foreground/20" />
              <div className="text-center">
                <p className="text-2xl font-heading font-bold text-primary-foreground">AI</p>
                <p className="text-xs text-primary-foreground/60">Powered Insights</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative animate-float">
              <img
                src={heroDashboard}
                alt="Tikona Research dashboard showing equity research reports with interactive charts and analytics"
                className="w-full drop-shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl" style={{ boxShadow: "var(--glow-accent)" }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
