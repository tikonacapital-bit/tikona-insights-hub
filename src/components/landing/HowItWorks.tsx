import { motion } from "framer-motion";
import { Search, ShoppingCart, BookOpen, Sparkles } from "lucide-react";

const steps = [
  { icon: Search, title: "Browse Reports", description: "Explore our growing library of in-depth equity research across sectors." },
  { icon: ShoppingCart, title: "Purchase Access", description: "Get instant access to the reports that matter to your investment thesis." },
  { icon: BookOpen, title: "Read, Listen, Watch", description: "Consume research your way — detailed reports, audio summaries, or explainer videos." },
  { icon: Sparkles, title: "Chat with AI", description: "Ask questions and get contextual answers from the report itself. Research that responds." },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4 text-foreground">
            From Discovery to Insight in 4 Steps
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary mx-auto mb-5 flex items-center justify-center relative">
                <step.icon className="text-primary-foreground" size={28} />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-border" />
              )}
              <h3 className="font-heading font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
