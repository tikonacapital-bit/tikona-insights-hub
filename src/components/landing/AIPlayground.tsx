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
    question: "What is the investment thesis?",
    answer:
      "HDFC Bank is India's largest private sector bank by market cap, with a dominant franchise across retail and corporate banking. The thesis rests on three pillars: (1) best-in-class asset quality discipline built over decades, (2) a massive distribution network of 8,000+ branches enabling low-cost deposit mobilization, and (3) cross-selling potential across banking, insurance, and asset management. It remains a core portfolio holding for long-term compounding.",
  },
  {
    question: "What is the competitive moat?",
    answer:
      "HDFC Bank's moat comes from its unmatched retail deposit franchise, which gives it a structural cost-of-funds advantage over peers. Its technology backbone processes millions of transactions daily with near-zero downtime. The brand trust built over 30 years makes it the default salary account and home loan provider for India's urban middle class. These are durable, difficult-to-replicate advantages.",
  },
  {
    question: "How is the management quality?",
    answer:
      "The bank has a strong track record of institutional leadership. Risk management culture is deeply embedded, not personality-driven. The current leadership has maintained the conservative underwriting standards that defined the bank under its founder. Succession planning has been smooth historically, and SEBI/RBI governance compliance is robust. Management guidance has been reliable and consistent over multiple cycles.",
  },
  {
    question: "What are the key risks?",
    answer:
      "Three risks to monitor: (1) Rising competition in retail lending from fintechs and smaller banks compressing margins, (2) Post-merger integration of HDFC Ltd.'s book, particularly around aligning the cost structure and deposit base, and (3) Regulatory risk from evolving RBI norms on digital lending, unsecured loans, and capital adequacy. Macro risks like a prolonged slowdown in credit growth could also impact earnings trajectory.",
  },
  {
    question: "What are the growth drivers?",
    answer:
      "Key growth levers include: (1) India's under-penetrated credit market, especially in semi-urban and rural areas where the bank is expanding aggressively, (2) Cross-selling insurance, mutual funds, and credit cards to the combined HDFC entity's massive customer base, (3) Digital-first acquisition funnels reducing customer acquisition costs, and (4) The secular shift of market share from PSU banks to well-governed private banks, a multi-decade tailwind.",
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
