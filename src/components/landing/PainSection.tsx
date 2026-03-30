import { motion } from "framer-motion";
import { FileText, Headphones, Video, Sparkles, ArrowRight } from "lucide-react";

const PainSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background styling elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 w-full mx-auto">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">The Problem</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-4 text-foreground">
            Traditional Research PDFs Are a Trap
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            You read for hours and still aren't sure if you should buy or sell. <span className="font-semibold text-foreground">It's time to consume research the way you actually want to.</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center relative">
          {/* The Old Way (Problem) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-6 relative overflow-hidden border-destructive/20 bg-destructive/5 opacity-80 filter grayscale-[20%]">
              <div className="absolute top-4 right-4 text-xs font-bold text-destructive uppercase tracking-wider bg-destructive/10 px-3 py-1 rounded-full">
                The Old Way
              </div>
              
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm opacity-60">
                <div className="border-b border-gray-200 pb-3 mb-4">
                  <div className="h-4 w-48 bg-gray-200 rounded animate-pulse" />
                  <div className="h-3 w-32 bg-gray-100 rounded mt-3 animate-pulse" />
                </div>
                <div className="space-y-3 mb-6">
                  <div className="h-2 w-full bg-gray-100 rounded animate-pulse" />
                  <div className="h-2 w-[90%] bg-gray-100 rounded animate-pulse" />
                  <div className="h-2 w-[80%] bg-gray-100 rounded animate-pulse" />
                  <div className="h-2 w-[95%] bg-gray-100 rounded animate-pulse" />
                  <div className="h-2 w-[85%] bg-gray-100 rounded animate-pulse" />
                  <div className="h-2 w-full bg-gray-100 rounded animate-pulse" />
                  <div className="h-2 w-[70%] bg-gray-100 rounded animate-pulse" />
                </div>
                <div className="bg-gray-50 border border-gray-100 rounded p-3 mb-6">
                  <div className="h-24 w-full bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="text-center pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-400 font-mono">Page 23 of 35</span>
                </div>
              </div>
            </div>
            
            {/* Overlay text */}
            <div className="absolute inset-0 flex items-center justify-center z-10 p-6 pointer-events-none">
                <p className="text-xl md:text-2xl font-heading font-bold text-foreground bg-background/90 px-6 py-4 rounded-xl shadow-lg backdrop-blur-md border border-border text-center">
                  Information Overload
                </p>
            </div>
          </motion.div>

          {/* Arrow pointing to solution */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-14 h-14 bg-background border border-border text-muted-foreground rounded-full flex items-center justify-center shadow-xl">
              <ArrowRight size={24} />
            </div>
          </div>

          {/* Our Way (Solution) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-card rounded-3xl shadow-2xl p-6 md:p-9 border border-border">
              <div className="mb-8">
                 <div className="text-xs font-bold text-accent uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full inline-block mb-4">
                  Our Way
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                  Same report. <br />Four ways to consume it.
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: FileText, label: "Read", desc: "Simplified summary" },
                  { icon: Headphones, label: "Listen", desc: "Audio walkthrough" },
                  { icon: Video, label: "Watch", desc: "Video explainer" },
                  { icon: Sparkles, label: "Ask AI", desc: "Get instant answers" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 bg-muted/50 rounded-xl p-4 border border-border hover:border-accent/50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">{item.label}</p>
                        <p className="text-xs text-muted-foreground leading-tight">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-accent/10 rounded-xl p-5 border border-accent/20">
                <div className="flex items-start gap-3 flex-col sm:flex-row">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <Sparkles size={14} className="text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">You asked: "Should I buy HDFC Bank?"</p>
                    <p className="text-sm text-foreground font-medium leading-relaxed">
                      "Yes — strong fundamentals with 17% ROE, healthy asset quality, and 21% profit CAGR over 5 years."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
