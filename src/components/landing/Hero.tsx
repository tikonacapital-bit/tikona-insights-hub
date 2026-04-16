import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  LineChart,
  Zap,
  FileText,
  PieChart,
  Users,
  Gem,
  Home,
  User,
  Search,
  Wallet,
  Bell,
  Wifi,
  BatteryFull,
} from "lucide-react";
import tikonaIcon from "@/assets/tikona-icon.png";

const Hero = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(220 65% 34%) 1px, transparent 1px), linear-gradient(90deg, hsl(220 65% 34%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

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
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-4">
              <div className="w-5 h-5 rounded bg-white flex items-center justify-center">
                <img
                  src={tikonaIcon}
                  alt="Tikona Capital"
                  className="w-3.5 h-3.5 object-contain"
                />
              </div>
              <span className="text-xs font-semibold text-primary tracking-wide">
                A Product by Tikona Capital
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              <span className="text-foreground">Research That</span>
              <br />
              <span className="text-gradient">Speaks to You</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0">
              Go beyond static PDFs. Read it. Listen to it. Watch it. Ask it questions. Equity
              research, reimagined for the modern investor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="hero"
                size="lg"
                className="text-base px-8 py-6"
                onClick={() => scrollTo("pricing")}
              >
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

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative animate-float scale-[0.55] lg:scale-[0.55] xl:scale-[0.6] transform-gpu origin-center">
              <div
                className="relative w-[320px] rounded-[3rem] p-[6px] shadow-2xl"
                style={{
                  background: "linear-gradient(145deg, #1A2C55, #2B4582)",
                  boxShadow:
                    "0 25px 60px rgba(26, 44, 85, 0.4), 0 0 80px rgba(255, 165, 0, 0.08)",
                }}
              >
                <div className="relative rounded-[2.65rem] overflow-hidden bg-[#0D1118] border border-white/5">
                  <div className="relative bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.08),_transparent_40%),linear-gradient(180deg,#14295A_0%,#0D193A_100%)] px-5 pt-3.5 pb-4">
                    <div className="flex items-center justify-between text-[10px] text-white/90 mb-4">
                      <div className="flex items-center gap-1.5 font-semibold">
                        <span className="font-semibold">1:18</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-white/80">
                        <Wifi size={10} />
                        <Bell size={10} />
                        <BatteryFull size={12} />
                        <span className="font-semibold">82%</span>
                      </div>
                    </div>

                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="h-11 w-11 rounded-full p-[1.5px] bg-[linear-gradient(145deg,#ffd463,#ff9f0a)]">
                            <div className="h-full w-full rounded-full overflow-hidden bg-white">
                              <img
                                src={tikonaIcon}
                                alt="Profile"
                                className="h-full w-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full bg-[#FF9F0A] border-2 border-[#152A57]" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] text-white/55 leading-tight mb-0.5">
                            Good afternoon,
                          </p>
                          <p className="text-[15px] font-heading font-bold text-white leading-tight truncate">
                            Tikona Capital
                          </p>
                        </div>
                      </div>
                      <div className="rounded-full border border-[#D5A61E]/35 bg-[#F0C84B]/12 px-2.5 py-1.5 text-[9px] font-semibold text-[#F0C84B]">
                        Midcap Wealth
                      </div>
                    </div>

                    <div className="rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] backdrop-blur-sm px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { label: "KYC", value: "Verified", icon: ShieldCheck, accent: false },
                          { label: "Profile", value: "Pro", icon: LineChart, accent: false },
                          { label: "AI Credits", value: "35.6K", icon: Zap, accent: true },
                        ].map((item) => {
                          const Icon = item.icon;

                          return (
                            <div key={item.label} className="px-1 py-1">
                              <div className="flex items-center gap-1.5 mb-1.5">
                                <div
                                  className={`h-7 w-7 rounded-full flex items-center justify-center ${
                                    item.accent ? "bg-[#F0B548]/18" : "bg-[#223B72]"
                                  }`}
                                >
                                  <Icon
                                    size={13}
                                    className={item.accent ? "text-[#F0B548]" : "text-[#F7D387]"}
                                  />
                                </div>
                                <p className="text-[7px] uppercase tracking-[0.15em] text-white/50">
                                  {item.label}
                                </p>
                              </div>
                              <p className="text-[12px] font-semibold text-white leading-none truncate ml-0.5">
                                {item.value}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0A0D12] px-4 pt-5 pb-4 min-h-[420px] flex flex-col relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent">
                    <div className="rounded-[24px] bg-[#0E131C] border border-white/5 p-4 flex-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] flex flex-col gap-5">
                      <div>
                        <div className="flex items-center justify-between mb-3.5">
                          <h3 className="text-[13px] font-semibold text-white">Quick Actions</h3>
                        </div>
                        <div className="grid grid-cols-4 gap-3">
                          {[
                            { label: "Reports", icon: FileText },
                            { label: "Portfolio", icon: PieChart },
                            { label: "Analysts", icon: Users },
                            { label: "Plans", icon: Gem },
                          ].map((item) => {
                            const Icon = item.icon;

                            return (
                              <div
                                key={item.label}
                                className="group cursor-pointer rounded-[20px] bg-[linear-gradient(180deg,#19253C_0%,#151E31_100%)] border border-white/5 hover:border-white/10 transition-colors px-1 py-3 flex flex-col items-center text-center gap-2"
                              >
                                <div className="h-10 w-10 rounded-full bg-[#20345E] group-hover:bg-[#263D70] transition-colors flex items-center justify-center">
                                  <Icon size={16} className="text-[#8FC0FF]" />
                                </div>
                                <span className="text-[10px] font-medium text-white/90 leading-tight">
                                  {item.label}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-3.5">
                          <h3 className="text-[13px] font-semibold text-white">Latest Research</h3>
                          <span className="text-[11px] font-medium text-[#5E8FF5] cursor-pointer hover:underline">View All</span>
                        </div>

                        <div className="rounded-[20px] bg-[linear-gradient(180deg,#151A24_0%,#11151D_100%)] border border-white/5 p-3 flex items-center gap-3 hover:border-white/10 transition-colors cursor-pointer">
                          <div className="h-12 w-12 rounded-[14px] bg-[#1B2842] flex items-center justify-center shrink-0">
                            <FileText size={18} className="text-[#F7D387]" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-[11px] font-semibold text-white/95 truncate">
                              Premier Energies Ltd
                            </p>
                            <p className="text-[8px] uppercase tracking-[0.15em] text-white/40 mt-1.5">
                              Report
                            </p>
                            <p className="text-[9px] text-white/50 mt-1">26 Mar 2026</p>
                          </div>
                          <div className="rounded-full bg-[#1F2635] border border-white/5 p-1.5 flex items-center gap-1.5">
                            <div className="h-5 w-5 rounded-full bg-[#283145] flex items-center justify-center">
                                <Play size={8} className="text-[#F7D387] fill-current" />
                            </div>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F7D387] mr-1" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-white/5 px-3 pt-3.5 text-[9px] text-white/40">
                      {[
                        { label: "Home", icon: Home, active: true },
                        { label: "Reports", icon: FileText, active: false },
                        { label: "Analyst", icon: Search, active: false },
                        { label: "Portfolio", icon: Wallet, active: false },
                        { label: "Account", icon: User, active: false },
                      ].map((item) => {
                        const Icon = item.icon;

                        return (
                          <div key={item.label} className="flex flex-col items-center gap-1.5 min-w-[36px] cursor-pointer hover:text-white/60 transition-colors">
                            <Icon
                              size={16}
                              className={item.active ? "text-[#5EA2FF]" : ""}
                            />
                            <span className={item.active ? "text-[#5EA2FF] font-medium" : ""}>
                              {item.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[580px] rounded-full bg-accent/10 blur-[90px] pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
