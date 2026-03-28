import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Crown, Zap, Rocket, Gem } from "lucide-react";

const plans = [
  {
    id: "midcap",
    name: "Mid Cap Wealth Builders",
    price: "₹24,999",
    period: "/year",
    description: "Consistent performers with long-term compounding potential",
    icon: Zap,
    features: [
      "Curated mid cap stock picks",
      "Consistent performer recommendations",
      "Detailed research reports",
      "Portfolio tracking",
      "Email support",
    ],
    badge: null,
    popular: false,
  },
  {
    id: "smallcap",
    name: "Smallcap Alpha Picks",
    price: "₹29,999",
    period: "/year",
    description: "Focused ideas for aggressive growth investors",
    icon: Rocket,
    features: [
      "High-alpha smallcap ideas",
      "Aggressive growth picks",
      "In-depth company analysis",
      "Portfolio tracking",
      "Priority email support",
    ],
    badge: null,
    popular: false,
  },
  {
    id: "sme",
    name: "SME Emerging Business",
    price: "₹35,999",
    period: "/year",
    description: "Scalable models from the SME platform",
    icon: Gem,
    features: [
      "High-growth SME ideas",
      "Early-stage businesses",
      "In-depth company analysis",
      "Portfolio tracking",
      "Priority email support",
    ],
    badge: null,
    popular: false,
  },
  {
    id: "bundle",
    name: "All In Growth Bundle",
    price: "₹74,999",
    period: "/year",
    description: "Complete access to all research plans",
    icon: Crown,
    features: [
      "Everything in all plans",
      "Mid cap + Smallcap + SME picks",
      "Personalised research calls",
      "Portfolio advisory sessions",
      "Priority dedicated support",
    ],
    badge: "BEST VALUE",
    popular: true,
  },
];

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("bundle");

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-xs tracking-wider uppercase">
            Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Choose Your Research Edge
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isActive = activeTab === plan.id;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-5 md:p-6 transition-all duration-300 flex flex-col sm:flex-row lg:flex-col gap-6 md:gap-8 h-full ${
                  plan.popular
                    ? "bg-primary text-primary-foreground shadow-2xl scale-[1.02] border-2 border-accent"
                    : isActive
                    ? "bg-card border-2 border-primary shadow-xl"
                    : "bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/30"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge
                      className={`px-3 py-1 text-[10px] tracking-wider font-bold ${
                        plan.popular
                          ? "bg-accent text-accent-foreground border-0"
                          : "bg-secondary text-secondary-foreground border-0"
                      }`}
                    >
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                {/* Left Side Info (Mobile Rectangle Layout) */}
                <div className="flex flex-col w-full sm:w-[45%] lg:w-full border-b sm:border-b-0 lg:border-b border-border/20 pb-5 sm:pb-0 lg:pb-5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                      plan.popular
                        ? "bg-accent/20"
                        : "bg-primary/10"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={plan.popular ? "text-accent" : "text-primary"}
                    />
                  </div>
                  <h3
                    className={`text-lg font-heading font-bold mb-1 ${
                      plan.popular ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-4 flex-1 ${
                      plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div className="mt-auto">
                    <span
                      className={`text-3xl font-heading font-bold ${
                        plan.popular ? "text-primary-foreground" : "text-foreground"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-sm ml-1 ${
                        plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Right Side Content (Mobile Rectangle Layout) */}
                <div className="flex flex-col flex-1 w-full sm:w-[55%] lg:w-full">
                  <ul className="space-y-3 mb-6 flex-1 pt-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check
                          size={16}
                          className={`mt-0.5 shrink-0 ${
                            plan.popular ? "text-accent" : "text-primary"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            plan.popular ? "text-primary-foreground/90" : "text-foreground/80"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Button
                      className={`w-full font-semibold ${
                        plan.popular
                          ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg"
                          : "bg-primary text-primary-foreground hover:bg-primary/90"
                      }`}
                      size="lg"
                      onClick={() => window.open("https://tikona-mobile.vercel.app/register", "_blank")}
                    >
                      Get Started <ArrowRight size={16} className="ml-1" />
                    </Button>

                    <p
                      className={`text-center text-xs mt-3 ${
                        plan.popular ? "text-primary-foreground/60" : "text-muted-foreground"
                      }`}
                    >
                      Redirects to Tikona Registration
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Escape hatch */}
        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground">
            Not sure which plan?{" "}
            <a
              href="https://wa.me/919967271135"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              Talk to us on WhatsApp →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
