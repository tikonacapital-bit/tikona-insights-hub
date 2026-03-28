import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play, FileText, Headphones, Video, Sparkles, Send, TrendingUp, ChevronLeft } from "lucide-react";

const Hero = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{
        backgroundImage: "linear-gradient(hsl(220 65% 34%) 1px, transparent 1px), linear-gradient(90deg, hsl(220 65% 34%) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-12 xl:px-20 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              <span className="text-foreground">Research That</span>
              <br />
              <span className="text-gradient">Speaks to You</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0">
              Go beyond static PDFs. Read it. Listen to it. Watch it. Ask it questions.
              Equity research, reimagined for the modern investor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-base px-8 py-6" onClick={() => scrollTo("pricing")}>
                See Plans <ArrowRight className="ml-1" size={18} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 py-6 border-2 border-primary/30 text-primary hover:bg-primary/5 font-semibold"
                onClick={() => scrollTo("ai-playground")}
              >
                <Play size={18} className="mr-1" /> Try AI Assistant
              </Button>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative animate-float">
              {/* Phone frame */}
              <div
                className="relative w-[260px] rounded-[2.8rem] p-[9px] shadow-2xl"
                style={{
                  background: "linear-gradient(145deg, #1F4690, #3A5BA0)",
                  boxShadow: "0 25px 60px rgba(31, 70, 144, 0.3), 0 0 80px rgba(255, 165, 0, 0.08)",
                }}
              >
                {/* Dynamic Island */}
                <div className="absolute top-[9px] left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-full z-10" />

                {/* Screen */}
                <div className="relative rounded-[2.2rem] overflow-hidden bg-white">
                  {/* Status bar */}
                  <div className="h-11 bg-[#1F4690] flex items-end justify-between px-5 pb-1.5">
                    <span className="text-[10px] text-white/80 font-medium" style={{ letterSpacing: "1.5px" }}>11:11</span>
                    <div className="flex gap-1 items-center">
                      <div className="w-3.5 h-2 border border-white/80 rounded-[2px] relative">
                        <div className="absolute inset-[1px] right-[2px] bg-white/80 rounded-[1px]" />
                      </div>
                    </div>
                  </div>

                  {/* Report cover — top 1/3 */}
                  <div className="bg-[#1F4690] px-4 pb-2.5 pt-1">
                    {/* Back nav */}
                    <div className="flex items-center gap-1 mb-2.5">
                      <ChevronLeft size={10} className="text-white/50" />
                      <span className="text-[8px] text-white/50">Reports</span>
                    </div>
                    {/* Report title */}
                    <p className="text-white font-heading font-bold text-[15px] leading-tight mb-0.5">
                      HDFC Bank
                    </p>
                    <p className="text-white/50 text-[9px] mb-2.5">Equity Research Report</p>
                    {/* Tags row */}
                    <div className="flex gap-1.5">
                      <div className="flex items-center gap-1 bg-green-400/20 rounded-full px-2 py-0.5">
                        <TrendingUp size={8} className="text-green-300" />
                        <span className="text-[8px] text-green-300 font-semibold">BUY</span>
                      </div>
                      <div className="bg-white/10 rounded-full px-2 py-0.5">
                        <span className="text-[8px] text-white/70">NSE: HDFCBANK</span>
                      </div>
                    </div>
                  </div>

                  {/* Format tabs */}
                  <div className="px-3 pt-2.5 pb-2">
                    <div className="flex gap-1">
                      {[
                        { label: "Read", icon: FileText, active: false },
                        { label: "Listen", icon: Headphones, active: false },
                        { label: "Watch", icon: Video, active: false },
                        { label: "Ask AI", icon: Sparkles, active: true },
                      ].map((tab) => {
                        const Icon = tab.icon;
                        return (
                          <div
                            key={tab.label}
                            className={`flex-1 flex flex-col items-center gap-0.5 py-1.5 rounded-lg text-[9px] font-medium ${
                              tab.active
                                ? "bg-[#FFA500] text-white"
                                : "bg-muted/50 text-muted-foreground"
                            }`}
                          >
                            <Icon size={12} strokeWidth={2} />
                            {tab.label}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* AI Chat */}
                  <div className="px-3 pb-2.5 space-y-2">
                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="bg-[#1F4690] rounded-xl rounded-br-sm px-3 py-1.5 max-w-[82%]">
                        <p className="text-[9px] text-white leading-relaxed">
                          What are the key financials of HDFC Bank?
                        </p>
                      </div>
                    </div>

                    {/* AI response — all numbers sourced from Screener.in FY24 */}
                    <div className="flex gap-1.5 items-start">
                      <div className="w-5 h-5 rounded-full bg-[#FFA500] flex items-center justify-center shrink-0 mt-0.5">
                        <Sparkles size={10} className="text-white" />
                      </div>
                      <div className="bg-[#FFE5B4]/30 rounded-xl rounded-tl-sm px-3 py-2 flex-1">
                        <p className="text-[9px] text-foreground/90 leading-relaxed mb-1.5">
                          Key financials for HDFC Bank (FY24):
                        </p>
                        <div className="space-y-[4px]">
                          {[
                            ["Net Profit", "\u20B960,812 Cr"],
                            ["ROE", "17%"],
                            ["Gross NPA", "1.24%"],
                            ["Net NPA", "0.33%"],
                            ["Book Value", "\u20B9350/share"],
                          ].map(([label, value]) => (
                            <div key={label} className="flex justify-between text-[8px] py-[2px] border-b border-border/60 last:border-0">
                              <span className="text-muted-foreground">{label}</span>
                              <span className="font-semibold text-foreground">{value}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-[8px] text-muted-foreground mt-1.5 leading-relaxed">
                          5-year profit CAGR of 21% with strong asset quality.
                        </p>
                      </div>
                    </div>

                    {/* Input bar */}
                    <div className="flex items-center gap-1.5 bg-muted/40 rounded-full px-3 py-1.5">
                      <div className="flex-1 text-[9px] text-muted-foreground">Ask a follow-up...</div>
                      <div className="w-5 h-5 rounded-full bg-[#FFA500] flex items-center justify-center shrink-0">
                        <Send size={9} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent glow behind phone */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[500px] rounded-full bg-accent/10 blur-[80px] pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
