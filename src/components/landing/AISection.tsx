import { motion } from "framer-motion";
import { MessageSquare, Send } from "lucide-react";

const chatMessages = [
  { role: "user" as const, text: "What is the company's revenue growth rate?" },
  { role: "ai" as const, text: "Based on the report, the company posted 23% YoY revenue growth in FY24, driven primarily by their SaaS segment which grew 31%." },
  { role: "user" as const, text: "What are the key risks mentioned?" },
  { role: "ai" as const, text: "The report highlights 3 key risks: regulatory headwinds in EU markets, customer concentration (top 5 clients = 40% revenue), and rising CAC in competitive segments." },
];

const AISection = () => {
  return (
    <section id="ai" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">AI-Powered</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4 text-foreground">
              Talk to Your Research
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our conversational AI lets you interact with any research report as if you had the analyst 
              sitting across from you. Ask anything — the AI responds with answers grounded entirely in the report's data.
            </p>
            <ul className="space-y-3">
              {["Contextual answers from report data", "No hallucinations — grounded in facts", "Ask follow-ups naturally", "Personalized research experience"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-6 max-w-lg mx-auto">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                <MessageSquare size={18} className="text-accent" />
                <span className="font-heading font-semibold text-sm text-foreground">AI Research Assistant</span>
                <span className="ml-auto text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/10 text-accent font-semibold">Live</span>
              </div>

              <div className="space-y-4 mb-4">
                {chatMessages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`max-w-[80%] rounded-xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2">
                <input
                  type="text"
                  placeholder="Ask about this report..."
                  className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                  readOnly
                />
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center cursor-pointer">
                  <Send size={14} className="text-accent-foreground" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
