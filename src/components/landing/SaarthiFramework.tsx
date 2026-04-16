import { useState } from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Globe,
  Crown,
  TrendingUp,
  Shield,
  Users,
  Crosshair,
  type LucideIcon,
} from "lucide-react";

interface Dimension {
  letter: string;
  title: string;
  full: string;
  teaser: string;
  icon: LucideIcon;
}

const dimensions: Dimension[] = [
  {
    letter: "S",
    title: "Scalability",
    full: "Scalability of Core Engine",
    teaser:
      "Can the business grow without proportional cost increase? We test the compounding potential of the core engine — unit economics, operating leverage, and marginal cost structure.",
    icon: Rocket,
  },
  {
    letter: "A",
    title: "Addressable Market",
    full: "Addressable Market & Adjacency",
    teaser:
      "How large is the total opportunity? We evaluate the runway for growth and the optionality to expand into adjacent verticals without rebuilding from scratch.",
    icon: Globe,
  },
  {
    letter: "A",
    title: "Asymmetric Pricing",
    full: "Asymmetric Pricing Power",
    teaser:
      "Does the company set prices or accept them? We look for structural moats — brand, switching costs, network effects — that grant sustained pricing authority.",
    icon: Crown,
  },
  {
    letter: "R",
    title: "Reinvestment",
    full: "Reinvestment Quality",
    teaser:
      "How effectively does the company reinvest capital? We measure the compounding engine: ROCE × reinvestment rate. This is where long-term wealth gets built.",
    icon: TrendingUp,
  },
  {
    letter: "T",
    title: "Track Record",
    full: "Track Record Through Adversity",
    teaser:
      "How did the company perform when conditions were worst? Resilience under stress — recessions, policy shocks, competitive attacks — separates real quality from narrative.",
    icon: Shield,
  },
  {
    letter: "H",
    title: "Human Capital",
    full: "Human Capital & Institutional DNA",
    teaser:
      "Is quality person-dependent or system-dependent? We assess governance, management depth, and whether the company can endure and thrive beyond its founders.",
    icon: Users,
  },
  {
    letter: "I",
    title: "Inflection Point",
    full: "Inflection Point Identification",
    teaser:
      "What specific catalyst forces the market to reprice this stock in 6–18 months? We hunt for the concrete event that unlocks hidden value.",
    icon: Crosshair,
  },
];

/* ------------------------------------------------------------------ */
/*  Desktop: Horizontal click-to-expand accordion                     */
/* ------------------------------------------------------------------ */
const DesktopAccordion = ({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: (i: number) => void;
}) => {
  return (
    <div className="hidden md:flex gap-2 h-[340px] w-full max-w-6xl mx-auto">
      {dimensions.map((dim, i) => {
        const isActive = activeIndex === i;
        const Icon = dim.icon;

        return (
          <motion.div
            key={i}
            onClick={() => setActiveIndex(i)}
            initial={{ flex: isActive ? 5 : 0.6 }}
            animate={{ flex: isActive ? 5 : 0.6 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className={`
              relative rounded-2xl cursor-pointer overflow-hidden border
              transition-colors duration-300
              ${
                isActive
                  ? "bg-primary border-primary shadow-2xl"
                  : "bg-card border-border hover:border-primary/30 hover:bg-card/90"
              }
            `}
          >
            {/* ---- COLLAPSED STATE ---- */}
            <motion.div
              animate={{ opacity: isActive ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex flex-col items-center pt-8 pointer-events-none"
            >
              <span className="text-3xl font-heading font-bold text-accent mb-4">
                {dim.letter}
              </span>
              <span
                className="text-sm md:text-[15px] font-semibold text-muted-foreground tracking-wide whitespace-nowrap"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                }}
              >
                {dim.title}
              </span>
            </motion.div>

            {/* ---- EXPANDED STATE ---- */}
            <motion.div
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 0.35, delay: isActive ? 0.2 : 0 }}
              className="absolute inset-0 flex flex-col justify-end p-8 pointer-events-none"
            >
              {/* Top: Letter & Icon */}
              <div className="absolute top-8 left-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center backdrop-blur-sm">
                  <Icon size={24} className="text-primary-foreground" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary-foreground/60 bg-white/10 px-3 py-1 rounded-full">
                  Dimension {i + 1}
                </span>
              </div>

              {/* Giant letter watermark */}
              <span className="absolute top-4 right-6 text-[180px] font-heading font-bold leading-none text-white/[0.06] select-none pointer-events-none">
                {dim.letter}
              </span>

              {/* Bottom content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-3">
                  {dim.full}
                </h3>
                <p className="text-sm text-primary-foreground/80 leading-relaxed max-w-md">
                  {dim.teaser}
                </p>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Mobile: Vertical click-to-expand accordion                        */
/* ------------------------------------------------------------------ */
const MobileAccordion = ({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: (i: number) => void;
}) => {
  return (
    <div className="flex md:hidden flex-col gap-2 w-full">
      {dimensions.map((dim, i) => {
        const isActive = activeIndex === i;
        const Icon = dim.icon;

        return (
          <motion.div
            key={i}
            onClick={() => setActiveIndex(i)}
            initial={{ height: isActive ? 220 : 64 }}
            animate={{ height: isActive ? 220 : 64 }}
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            className={`
              relative rounded-xl cursor-pointer overflow-hidden border
              transition-colors duration-300
              ${
                isActive
                  ? "bg-primary border-primary shadow-xl"
                  : "bg-card border-border"
              }
            `}
          >
            {/* Collapsed: Letter + Title row */}
            <motion.div
              animate={{ opacity: isActive ? 0 : 1 }}
              transition={{ duration: 0.15 }}
              className="absolute inset-0 flex items-center gap-4 px-5 pointer-events-none"
            >
              <span className="text-2xl font-heading font-bold text-accent">
                {dim.letter}
              </span>
              <span className="text-sm font-semibold text-muted-foreground">
                {dim.title}
              </span>
            </motion.div>

            {/* Expanded content */}
            <motion.div
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 0.3, delay: isActive ? 0.15 : 0 }}
              className="absolute inset-0 flex flex-col justify-end p-5 pointer-events-none"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center">
                  <Icon size={18} className="text-primary-foreground" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary-foreground/60">
                  Dimension {i + 1}
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold text-primary-foreground mb-2">
                {dim.full}
              </h3>
              <p className="text-xs text-primary-foreground/80 leading-relaxed">
                {dim.teaser}
              </p>
            </motion.div>

            {/* Watermark letter */}
            {isActive && (
              <span className="absolute top-0 right-3 text-[100px] font-heading font-bold leading-none text-white/[0.06] select-none pointer-events-none">
                {dim.letter}
              </span>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Main Section                                                       */
/* ------------------------------------------------------------------ */
const SaarthiFramework = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="saarthi-framework" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Our Research Framework
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-4 text-foreground">
            Powered by <span className="text-gradient">SAARTHI</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Every company we cover is evaluated through our proprietary{" "}
            <span className="font-semibold text-foreground">7-dimension framework</span> — a
            rigorous lens that separates genuine compounders from just good stories.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <DesktopAccordion activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          <MobileAccordion activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-muted-foreground max-w-xl mx-auto mt-12"
        >
          SAARTHI isn't just a checklist — it's a{" "}
          <span className="text-foreground font-medium">decision engine</span> that ensures every
          report carries a clear, conviction-backed verdict.
        </motion.p>
      </div>
    </section>
  );
};

export default SaarthiFramework;
