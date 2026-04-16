import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, Headphones, Video, MessageSquare } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "In-Depth Research Reports",
    description:
      "Comprehensive equity analysis with detailed financials, valuations, and actionable insights crafted by expert analysts.",
    tag: "Core",
  },
  {
    icon: Headphones,
    title: "Audio Insights",
    description:
      "Podcast-style summaries of every report. Perfect for consuming research during your commute or workout.",
    tag: "Listen",
  },
  {
    icon: Video,
    title: "Explainer Videos",
    description:
      "Complex research made simple through visual storytelling. Understand the thesis in minutes, not hours.",
    tag: "Watch",
  },
  {
    icon: MessageSquare,
    title: "AI Conversational Interface",
    description:
      "Ask questions directly to any research report. Get contextual, accurate answers powered by AI - like having an analyst on call.",
    tag: "Chat",
  },
];

const Features = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.45, once: false });

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (isInView) {
      void video.play().catch(() => { });
      return;
    }

    video.pause();
  }, [isInView]);

  return (
    <section ref={sectionRef} id="features" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-4 text-foreground">
            Research, Reimagined
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A single workflow to read, listen, watch, and interrogate every report without
            switching contexts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.72fr)] gap-8 xl:gap-12 max-w-6xl mx-auto items-start xl:items-stretch">
          <div className="grid grid-cols-1 md:grid-cols-2 md:auto-rows-fr gap-4 lg:gap-5">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-2xl p-6 hover:shadow-xl hover:border-accent/30 transition-all duration-300 group min-h-[220px] flex flex-col"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                    <feature.icon
                      className="text-primary group-hover:text-accent transition-colors"
                      size={22}
                    />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/15">
                    {feature.tag}
                  </span>
                </div>

                <div className="space-y-3 flex-1">
                  <h3 className="text-lg font-heading font-semibold text-foreground leading-snug max-w-[16rem]">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 120, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="xl:h-full xl:flex xl:items-center xl:justify-center"
          >
            <div className="mx-auto w-full max-w-[280px] xl:w-[280px] xl:flex xl:justify-center">
              <div 
                className="relative w-full rounded-[3rem] p-[6px] shadow-2xl"
                style={{
                  background: "linear-gradient(145deg, #1A2C55, #2B4582)",
                  boxShadow: "0 25px 60px rgba(0, 0, 0, 0.4)",
                }}
              >
                <div className="relative overflow-hidden rounded-[2.65rem] border border-white/5 bg-[#0D1118]">
                  <video
                    ref={videoRef}
                    className="w-full aspect-[9/19.5] object-cover bg-black"
                    src="/demo_video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
