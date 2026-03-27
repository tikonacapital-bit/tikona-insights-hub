import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
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
    badge: "ACTIVE",
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-xs tracking-wider uppercase">
            Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Choose Your Research Edge
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pick a plan that matches your investment style. All plans include detailed research reports and portfolio tracking.
          </p>
        </motion.div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setActiveTab(plan.id)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === plan.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/30"
              }`}
            >
              {plan.name.split(" ").slice(0, 2).join(" ")}
              {plan.badge && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {plan.badge === "BEST VALUE" ? "★" : "●"}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isActive = activeTab === plan.id;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-6 transition-all duration-300 ${
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

                <div className="mb-4 mt-2">
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
                    className={`text-sm leading-relaxed ${
                      plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
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

                <ul className="space-y-3 mb-6">
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

                <Button
                  className={`w-full font-semibold ${
                    plan.popular
                      ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                  size="lg"
                >
                  Get Started <ArrowRight size={16} className="ml-1" />
                </Button>

                <p
                  className={`text-center text-xs mt-3 ${
                    plan.popular ? "text-primary-foreground/60" : "text-muted-foreground"
                  }`}
                >
                  Redirects to Secure Tradebox Checkout
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
