import { Box } from "lucide-react";
import { Button } from "@/components/ui/button";

const portfolios = [
  {
    title: "Young India Themes - Multicap Fundamental",
    image: "https://assets.smallcase.com/images/smallcases/160/TIKONM_0001.png",
    link: "https://tikonacapital.smallcase.com/smallcase/TIKONM_0001",
    description: "Select 15-25 Young Companies that have a significant opportunity to grow over their life cycle.",
    minInvestment: "1,00,000",
  },
  {
    title: "Tikona Capital Value Top 10 Fundamental",
    image: "https://assets.smallcase.com/images/smallcases/160/TIKOFMM_0001.png",
    link: "https://tikonacapital.smallcase.com/smallcase/TIKOFMM_0001",
    description: "High-quality companies selected for value potential.",
    minInvestment: "33,435",
  },
  {
    title: "Tikona Capital Growth Top 10 Fundamental",
    image: "https://assets.smallcase.com/images/smallcases/160/TIKOFMM_0002.png",
    link: "https://tikonacapital.smallcase.com/smallcase/TIKOFMM_0002",
    description: "Portfolio positioned for long-term growth opportunities.",
    minInvestment: "68,419",
  }
];

const Portfolios = () => {
  return (
    <section id="portfolios" className="py-24 bg-background relative overflow-hidden border-t border-border/40">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Invest With Us
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4 text-foreground">
            Our Portfolios
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {portfolios.map((portfolio, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row lg:flex-col relative overflow-hidden group border border-border/50 hover:border-accent/40 transition-all duration-300 h-full hover:shadow-lg gap-5"
            >
              {/* Background accent glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[40px] group-hover:bg-accent/15 transition-all duration-500" />

              <div className="flex flex-row sm:flex-col lg:flex-col gap-4 w-full sm:w-1/3 lg:w-full">
                {/* Image Placeholder matching Smallcase Layout */}
                <div className="w-16 h-16 shrink-0 bg-[#FFEDB9]/30 rounded-[6px] border border-border/50 overflow-hidden flex items-center justify-center p-1.5 align-top">
                  <img
                    src={portfolio.image}
                    alt={portfolio.title}
                    className="w-full h-full object-contain mix-blend-multiply"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden text-accent text-center text-[8px] font-bold leading-tight uppercase tracking-wider">
                    {portfolio.title.split(' ')[0]}<br />{portfolio.title.split(' ')[1]}
                  </div>
                </div>

                <div className="flex flex-col flex-1">
                  <h3 className="text-lg font-heading font-bold text-foreground leading-tight mb-2 pr-2">
                    {portfolio.title}
                  </h3>
                  
                  {/* Tags remain as wraps */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-[4px] border border-border/80 text-[9px] font-semibold text-foreground/60 tracking-wider uppercase bg-card/50">
                      <Box size={8} className="text-foreground/50 shrink-0" />
                      Stock smallcase
                    </span>
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-[4px] border border-red-200 text-[9px] font-semibold text-red-500 tracking-wider uppercase bg-red-50/50">
                      <span className="w-1 h-1 rounded-full bg-red-500 shrink-0"></span>
                      High Volatility
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-col lg:flex-col flex-1 w-full sm:w-2/3 lg:w-full justify-between h-full">
                <div className="lg:h-[72px] mb-4">
                  <p className="text-muted-foreground text-[13px] leading-relaxed line-clamp-3">
                    {portfolio.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4 lg:gap-4 mt-auto border-t border-border/70 pt-4 relative sm:items-center lg:items-stretch">
                  <div className="flex sm:flex-col lg:flex-row justify-between items-center sm:items-start lg:items-center text-sm w-full sm:w-auto lg:w-full">
                    <span className="text-muted-foreground text-xs sm:text-sm">Min. Investment</span>
                    <span className="font-bold text-foreground text-base tracking-tight">₹ {portfolio.minInvestment}</span>
                  </div>

                  <Button
                    asChild
                    className="w-full sm:w-auto lg:w-full bg-[#3BB48A] hover:bg-[#2D9972] text-white h-10 sm:h-11 rounded-[6px] text-sm font-bold tracking-wide border-none shadow-none sm:px-8 lg:px-0"
                  >
                    <a href={portfolio.link} target="_blank" rel="noopener noreferrer">
                      Subscribe Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolios;
