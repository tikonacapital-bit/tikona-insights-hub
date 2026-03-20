import { motion } from "framer-motion";
import { FileText, Headphones, Video, MessageSquare } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "In-Depth Research Reports",
    description: "Comprehensive equity analysis with detailed financials, valuations, and actionable insights crafted by expert analysts.",
    tag: "Core",
  },
  {
    icon: Headphones,
    title: "Audio Insights",
    description: "Podcast-style summaries of every report. Perfect for consuming research during your commute or workout.",
    tag: "Listen",
  },
  {
    icon: Video,
    title: "Explainer Videos",
    description: "Complex research made simple through visual storytelling. Understand the thesis in minutes, not hours.",
    tag: "Watch",
  },
  {
    icon: MessageSquare,
    title: "AI Conversational Interface",
    description: "Ask questions directly to any research report. Get contextual, accurate answers powered by AI — like having an analyst on call.",
    tag: "Chat",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Features</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4 text-foreground">
            Research, Reimagined
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Experience equity research like never before — multi-format, interactive, and designed for how modern investors consume information.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-8 hover:shadow-xl hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                  <feature.icon className="text-primary group-hover:text-accent transition-colors" size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-heading font-semibold text-foreground">{feature.title}</h3>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                      {feature.tag}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
