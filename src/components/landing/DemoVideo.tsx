import { motion } from "framer-motion";

const DemoVideo = () => {
  return (
    <section id="demo-video" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            See It In Action
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4 text-foreground">
            Your Research, One Click Away
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Watch how easy it is to access in-depth reports, AI-powered insights, and more inside the Tikona app.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card"
        >
          <div
            style={{
              position: "relative",
              boxSizing: "content-box",
              maxHeight: "80vh",
              width: "100%",
              aspectRatio: "2.32",
              padding: "40px 0 40px 0",
            }}
          >
            <iframe
              src="https://app.supademo.com/embed/cmnczlffk1c5uxtguzy8x0t42?embed_v=2&utm_source=embed"
              loading="lazy"
              title="Access Research Reports and AI-Powered Investment Insights"
              allow="clipboard-write"
              frameBorder="0"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoVideo;
