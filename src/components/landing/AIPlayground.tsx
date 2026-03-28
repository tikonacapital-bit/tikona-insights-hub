import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatMessage {
  role: "user" | "ai";
  text: string;
}

const qaData: { question: string; answer: string }[] = [
  {
    question: "What are the key financials?",
    answer:
      "HDFC Bank reported a net profit of ₹60,812 Cr in FY24, with earnings per share of ₹40.02. Book value stands at ₹350 per share. Return on equity is 17%, and the 5-year profit CAGR is 21%. Net interest income for FY24 was ₹1,09,232 Cr.",
  },
  {
    question: "How is the asset quality?",
    answer:
      "Asset quality remains strong. Gross NPA stands at 1.24% and Net NPA at 0.33% as of FY24. Provision coverage ratio is around 74%, which is among the best in the Indian banking sector. The bank has consistently maintained low slippage ratios.",
  },
  {
    question: "Key risks?",
    answer:
      "Three primary risks to watch: (1) Net interest margin compression due to rising competition in retail lending, (2) Integration challenges post the HDFC Ltd. merger including higher cost-to-income ratio, and (3) Slower deposit growth compared to credit growth putting pressure on the credit-deposit ratio.",
  },
  {
    question: "How does it compare to peers?",
    answer:
      "HDFC Bank's ROE of 17% compares well with ICICI Bank at 18.2% and Kotak Mahindra Bank at 14.5%. Gross NPA at 1.24% is better than ICICI Bank's 2.16% and SBI's 2.78%. On profitability, HDFC Bank's net profit of ₹60,812 Cr is the highest among private sector banks.",
  },
  {
    question: "What about the HDFC merger impact?",
    answer:
      "Post the July 2023 merger with HDFC Ltd., the bank's loan book has expanded significantly with a large home loan portfolio added. The merger brought in ₹6.3L Cr of assets. Short-term challenges include a higher cost-to-income ratio and lower CASA ratio, but long-term benefits include cross-selling opportunities and a larger customer base of 93 million+.",
  },
];

const AIPlayground = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [usedQuestions, setUsedQuestions] = useState<Set<number>>(new Set());
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [currentAnswer, setCurrentAnswer] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);

  const typeAnswer = useCallback((answer: string) => {
    setIsTyping(true);
    setCurrentAnswer(answer);
    setTypingText("");
    let index = 0;

    const interval = setInterval(() => {
      index++;
      setTypingText(answer.slice(0, index));
      if (index >= answer.length) {
        clearInterval(interval);
        setIsTyping(false);
        setMessages((prev) => [...prev, { role: "ai", text: answer }]);
        setTypingText("");
        setCurrentAnswer("");
      }
    }, 15);

    return () => clearInterval(interval);
  }, []);

  const handleChipClick = useCallback(
    (index: number) => {
      if (isTyping) return;
      const qa = qaData[index];

      setUsedQuestions((prev) => new Set(prev).add(index));
      setMessages((prev) => [...prev, { role: "user", text: qa.question }]);

      // Small delay before AI starts typing
      setTimeout(() => typeAnswer(qa.answer), 400);
    },
    [isTyping, typeAnswer]
  );

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, typingText]);

  const availableChips = qaData
    .map((qa, i) => ({ ...qa, index: i }))
    .filter((_, i) => !usedQuestions.has(i));

  return (
    <section id="ai-playground" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Interactive Demo
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4 text-foreground">
              Talk to Your Research
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Don't just read reports — interrogate them. Our AI lets you ask
              questions directly to any research report and get precise, data-backed
              answers instantly.
            </p>

            <div className="glass-card rounded-xl p-4 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={16} className="text-accent" />
                <span className="text-sm font-semibold text-foreground">Try it yourself</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Click any question on the right to see how the AI responds with
                answers grounded entirely in report data. No hallucinations — just facts.
              </p>
            </div>

            <ul className="space-y-3">
              {[
                "Contextual answers from report data",
                "No hallucinations, grounded in facts",
                "Ask follow-ups naturally",
                "Voice-to-voice: talk to your research",
                "Like having an analyst on call, 24/7",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Interactive Chat */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-6 max-w-lg mx-auto">
              {/* Header */}
              <div className="flex items-center gap-2 mb-2 pb-3 border-b border-border">
                <MessageSquare size={18} className="text-accent" />
                <span className="font-heading font-semibold text-sm text-foreground">
                  AI Research Assistant
                </span>
                <span className="ml-auto text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/10 text-accent font-semibold">
                  Live Demo
                </span>
              </div>

              {/* Report title */}
              <div className="bg-muted/50 rounded-lg px-3 py-2 mb-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                  Report
                </p>
                <p className="text-sm font-heading font-semibold text-foreground">
                  HDFC Bank Ltd. - Initiating Coverage
                </p>
              </div>

              {/* Chat messages */}
              <div ref={chatRef} className="space-y-3 mb-4 h-[290px] overflow-y-auto">
                {messages.length === 0 && !isTyping && (
                  <div className="flex items-center justify-center h-[200px]">
                    <p className="text-sm text-muted-foreground text-center">
                      Click a question below to start exploring this report with AI
                    </p>
                  </div>
                )}

                <AnimatePresence mode="popLayout">
                  {messages.map((msg, i) => (
                    <motion.div
                      key={`msg-${i}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-xl px-4 py-2.5 text-sm leading-relaxed ${
                          msg.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing indicator */}
                {isTyping && typingText && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="max-w-[85%] rounded-xl px-4 py-2.5 text-sm leading-relaxed bg-muted text-foreground">
                      {typingText}
                      <span className="inline-block w-0.5 h-4 bg-accent ml-0.5 animate-pulse align-middle" />
                    </div>
                  </motion.div>
                )}

                {isTyping && !typingText && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="rounded-xl px-4 py-2.5 bg-muted">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Question chips */}
              {availableChips.length > 0 && (
                <div className="border-t border-border pt-4">
                  <p className="text-xs text-muted-foreground mb-2">
                    {messages.length === 0 ? "Ask a question:" : "Ask another question:"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {availableChips.map((chip) => (
                      <motion.button
                        key={chip.index}
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleChipClick(chip.index)}
                        disabled={isTyping}
                        className="px-3 py-1.5 rounded-full text-xs font-medium border border-border bg-card text-foreground hover:border-accent hover:text-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {chip.question}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA after all questions used */}
              {availableChips.length === 0 && messages.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="border-t border-border pt-4 text-center"
                >
                  <p className="text-sm text-muted-foreground mb-3">
                    Impressed? Get full access to the AI assistant with any plan.
                  </p>
                  <Button
                    variant="hero"
                    size="sm"
                    onClick={() => scrollTo("pricing")}
                  >
                    See Plans <ArrowRight size={14} className="ml-1" />
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIPlayground;
