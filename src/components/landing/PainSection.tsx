import { useRef, useEffect, useCallback } from "react";
import { FileText, Headphones, Video, Sparkles } from "lucide-react";

// Compute layer opacity: fade in → hold → fade out
function layerOpacity(p: number, inStart: number, inEnd: number, outStart: number, outEnd: number) {
  if (p < inStart) return 0;
  if (p < inEnd) return (p - inStart) / (inEnd - inStart);
  if (p < outStart) return 1;
  if (p < outEnd) return 1 - (p - outStart) / (outEnd - outStart);
  return 0;
}

function lerp(p: number, start: number, end: number, min: number, max: number) {
  if (p < start) return min;
  if (p > end) return max;
  return min + ((p - start) / (end - start)) * (max - min);
}

const PainSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const reportRef = useRef<HTMLDivElement>(null);
  const dimRef = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);
  const layer4Ref = useRef<HTMLDivElement>(null);
  const layer5Ref = useRef<HTMLDivElement>(null);

  const updateStyles = useCallback(() => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const total = sectionRef.current.offsetHeight - window.innerHeight;
    const p = Math.max(0, Math.min(1, -rect.top / total));

    // Layer 1: Report — visible from start, blurs and fades out
    //   0.00–0.15: fully visible (long hold so user reads it)
    //   0.15–0.22: blurs + dims
    //   0.22–0.27: fades out
    const l1Opacity = p < 0.22 ? 1 : lerp(p, 0.22, 0.27, 1, 0);
    const l1Blur = lerp(p, 0.15, 0.22, 0, 10);
    const l1Dim = lerp(p, 0.15, 0.22, 0, 0.55);

    if (layer1Ref.current) layer1Ref.current.style.opacity = String(l1Opacity);
    if (reportRef.current) reportRef.current.style.filter = `blur(${l1Blur}px)`;
    if (dimRef.current) dimRef.current.style.opacity = String(l1Dim);

    // Layer 2: "Still reading?" — fade in 0.24–0.28, hold 0.28–0.40, fade out 0.40–0.44
    const l2 = layerOpacity(p, 0.24, 0.28, 0.40, 0.44);
    if (layer2Ref.current) layer2Ref.current.style.opacity = String(l2);

    // Layer 3: "Page 23 of 35…" — fade in 0.44–0.48, hold 0.48–0.58, fade out 0.58–0.62
    const l3 = layerOpacity(p, 0.44, 0.48, 0.58, 0.62);
    if (layer3Ref.current) layer3Ref.current.style.opacity = String(l3);

    // Layer 4: "Or… just ask." — fade in 0.62–0.66, hold 0.66–0.76, fade out 0.76–0.80
    const l4 = layerOpacity(p, 0.62, 0.66, 0.76, 0.80);
    if (layer4Ref.current) layer4Ref.current.style.opacity = String(l4);

    // Layer 5: Our Way card — fade in 0.82–0.90, stays till end
    const l5 = lerp(p, 0.82, 0.90, 0, 1);
    const l5Y = (1 - l5) * 40;
    if (layer5Ref.current) {
      layer5Ref.current.style.opacity = String(l5);
      layer5Ref.current.style.transform = `translateY(${l5Y}px)`;
    }
  }, []);

  useEffect(() => {
    const onScroll = () => requestAnimationFrame(updateStyles);
    window.addEventListener("scroll", onScroll, { passive: true });
    updateStyles(); // initial
    return () => window.removeEventListener("scroll", onScroll);
  }, [updateStyles]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{
        background: "linear-gradient(135deg, #1F4690 0%, #3A5BA0 50%, #1F4690 100%)",
        height: "500vh",
      }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Subtle glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none"
          style={{ background: "rgba(255, 165, 0, 0.08)" }}
        />

        {/* Layer 1: Research Report — visible immediately */}
        <div
          ref={layer1Ref}
          className="absolute inset-0 flex items-center justify-center px-4 z-10"
          style={{ opacity: 1 }}
        >
          <div className="w-full max-w-2xl max-h-[82vh]">
            <div
              ref={reportRef}
              className="relative bg-white rounded-xl shadow-2xl overflow-hidden max-h-[80vh] w-full"
            >
              {/* Dim overlay */}
              <div
                ref={dimRef}
                className="absolute inset-0 bg-black rounded-xl pointer-events-none z-10"
                style={{ opacity: 0 }}
              />

              {/* Report header */}
              <div className="bg-gray-50 border-b border-gray-200 px-4 md:px-6 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-[10px] md:text-xs text-gray-400 font-mono">HDFC_Bank_Research_Report.pdf</span>
                </div>
              </div>

              {/* Report content */}
              <div className="p-4 md:p-7 space-y-3 md:space-y-4">
                <div className="border-b border-gray-200 pb-3">
                  <p className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-wider mb-1">Institutional Equity Research</p>
                  <h3 className="text-sm md:text-lg font-bold text-gray-800">HDFC Bank Ltd. — Initiating Coverage</h3>
                  <p className="text-[10px] md:text-xs text-gray-400 mt-1">CMP: ₹756</p>
                </div>

                <div className="space-y-1">
                  <p className="text-[9px] md:text-[10px] font-bold text-gray-600 uppercase tracking-wider">Company Overview</p>
                  <p className="text-[8px] md:text-[9px] text-gray-500 leading-relaxed">
                    HDFC Bank Limited is India's largest private sector bank by assets, serving over 93 million customers through 8,738 branches and 20,938 ATMs across 4,065 cities. Post the landmark merger with HDFC Ltd. in July 2023, the bank's consolidated balance sheet has expanded significantly.
                  </p>
                </div>

                <div>
                  <p className="text-[9px] md:text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1.5">Key Financial Summary (Consolidated)</p>
                  <div className="overflow-hidden rounded border border-gray-200">
                    <table className="w-full text-[7px] md:text-[9px] text-gray-600">
                      <thead>
                        <tr className="bg-gray-100 text-left">
                          <th className="px-1.5 md:px-2 py-1 md:py-1.5 font-semibold">Particulars (₹ Cr)</th>
                          <th className="px-1.5 md:px-2 py-1 md:py-1.5 font-semibold text-right">FY22</th>
                          <th className="px-1.5 md:px-2 py-1 md:py-1.5 font-semibold text-right">FY23</th>
                          <th className="px-1.5 md:px-2 py-1 md:py-1.5 font-semibold text-right">FY24</th>
                          <th className="px-1.5 md:px-2 py-1 md:py-1.5 font-semibold text-right">FY25E</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Net Interest Income", "68,363", "85,730", "1,09,232", "1,28,450"],
                          ["Pre-Provision Profit", "52,416", "67,825", "84,340", "1,02,120"],
                          ["PAT", "36,961", "44,109", "60,812", "72,380"],
                          ["EPS (₹)", "20.21", "24.01", "40.02", "47.62"],
                          ["Book Value (₹/sh)", "271", "302", "350", "408"],
                          ["ROAE (%)", "16.4", "16.8", "17.0", "17.5"],
                          ["Gross NPA (%)", "1.17", "1.12", "1.24", "1.18"],
                        ].map(([label, ...values]) => (
                          <tr key={label} className="border-t border-gray-100">
                            <td className="px-1.5 md:px-2 py-0.5 md:py-1">{label}</td>
                            {values.map((v, i) => (
                              <td key={i} className="px-1.5 md:px-2 py-0.5 md:py-1 text-right font-mono">{v}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="space-y-1 hidden md:block">
                  <p className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">Investment Thesis</p>
                  <p className="text-[9px] text-gray-500 leading-relaxed">
                    We initiate coverage on HDFC Bank at CMP of ₹756. Post the HDFC Ltd. merger, the bank's consolidated loan book has expanded to ₹25.2L Cr. We expect NII CAGR of 18.2% over FY24-26E driven by retail credit expansion and improving CASA mix...
                  </p>
                </div>

                <div className="text-center pt-1">
                  <span className="text-[8px] md:text-[9px] text-gray-300">Page 23 of 35</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 2: "Still reading?" */}
        <div
          ref={layer2Ref}
          className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
          style={{ opacity: 0 }}
        >
          <p className="text-3xl md:text-5xl font-heading font-bold text-white text-center drop-shadow-lg px-4">
            Still reading?
          </p>
        </div>

        {/* Layer 3: "Page 23 of 35…" */}
        <div
          ref={layer3Ref}
          className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
          style={{ opacity: 0 }}
        >
          <p className="text-lg md:text-2xl text-white/90 text-center drop-shadow-lg px-6 max-w-xl leading-relaxed">
            Page 23 of 35 — and you still don't know if you should buy or sell.
          </p>
        </div>

        {/* Layer 4: "Or… you could just ask." */}
        <div
          ref={layer4Ref}
          className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
          style={{ opacity: 0 }}
        >
          <p className="text-2xl md:text-4xl font-heading font-semibold text-accent text-center drop-shadow-lg px-4">
            Or... you could just ask.
          </p>
        </div>

        {/* Layer 5: Our Way card */}
        <div
          ref={layer5Ref}
          className="absolute inset-0 flex items-center justify-center z-30 px-4"
          style={{ opacity: 0, transform: "translateY(40px)" }}
        >
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-9 w-full max-w-[440px] flex flex-col border border-gray-100">
            <div className="text-center mb-5">
              <p className="text-sm font-semibold text-[#FFA500] uppercase tracking-wider mb-2">Our Way</p>
              <h3 className="text-lg md:text-2xl font-heading font-bold text-gray-800">
                Same report. Four ways to understand it.
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-2.5 md:gap-3 mb-5">
              {[
                { icon: FileText, label: "Read", desc: "Simplified summary" },
                { icon: Headphones, label: "Listen", desc: "Audio walkthrough" },
                { icon: Video, label: "Watch", desc: "Video explainer" },
                { icon: Sparkles, label: "Ask AI", desc: "Get instant answers" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 md:gap-3 bg-gray-50 rounded-xl px-3 md:px-4 py-2.5 md:py-3 border border-gray-100"
                  >
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-[#1F4690]/10 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-[#1F4690]" />
                    </div>
                    <div>
                      <p className="text-[13px] md:text-sm font-semibold text-gray-800">{item.label}</p>
                      <p className="text-[10px] md:text-[11px] text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-[#FFE5B4]/20 rounded-xl px-3 md:px-4 py-2.5 md:py-3 border border-[#FFA500]/10">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-[#FFA500] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles size={12} className="text-white" />
                </div>
                <div>
                  <p className="text-[11px] md:text-xs text-gray-500 mb-1">You asked: "Should I buy HDFC Bank?"</p>
                  <p className="text-[13px] md:text-sm text-gray-700 font-medium">
                    Yes — strong fundamentals with 17% ROE, healthy asset quality, and 21% profit CAGR over 5 years.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
