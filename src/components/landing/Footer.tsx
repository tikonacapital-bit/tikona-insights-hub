import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Clock,
  Loader2,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { toast } from "sonner";
import tikonaIcon from "@/assets/tikona-icon.png";
import ComplianceModal from "@/components/compliance/ComplianceModal";
import LegalDocumentContent from "@/components/compliance/LegalDocumentContent";
import BookConsultationModal from "@/components/BookConsultationModal";

// --- Types ---
type SubmitStatus = "idle" | "success" | "error";

interface ComplianceLink {
  label: string;
  key: string;
  slug?: string;
  href?: string;
}

// --- Data ---
const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/tikonacapital/", icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com/tikonacapital", icon: Twitter },
  { label: "Instagram", href: "https://www.instagram.com/tikonacapital/", icon: Instagram },
  { label: "YouTube", href: "https://www.youtube.com/@tikonacapital", icon: Youtube },
];

const productLinks = [
  { label: "Features", id: "features" },
  { label: "How It Works", id: "how-it-works" },
  { label: "AI Assistant", id: "ai-playground" },
  { label: "Pricing", id: "pricing" },
  { label: "Portfolios", id: "portfolios" },
];

const companyLinks = [
  { label: "About Tikona Capital", href: "https://tikonacapital.com" },
  { label: "Blog", href: "https://tikonacapital.com/post" },
];

const complianceLinks: ComplianceLink[] = [
  { label: "Investor Charter (Research Analyst)", key: "investor-charter", slug: "investor-charter" },
  { label: "Complaints & Annual Compliance Report", key: "complaints", slug: "complaints" },
  { label: "T&C of Research Services", key: "research-services", slug: "research-services" },
  { label: "Most Important Terms and Conditions (MITC)", key: "mitc", slug: "most-important-terms-and-conditions" },
  { label: "Use of Artificial Intelligence (AI)", key: "ai-disclosure", slug: "use-of-artificial-intelligence" },
  { label: "Disclosure", key: "disclosure", slug: "disclosure" },
  { label: "Disclaimer", key: "disclaimer", slug: "disclaimer" },
  { label: "Grievance Policy", key: "grievance-policy", slug: "grievance-policy" },
  { label: "Grievance Contact", key: "designations" },
  { label: "Terms of Use", key: "terms-of-use", slug: "terms-of-use" },
];

const externalComplianceLinks = [
  { label: "SmartODR", href: "https://smartodr.in/login" },
  { label: "SEBI Scores Portal", href: "https://scores.sebi.gov.in/" },
];

const grievanceContacts = [
  { designation: "Principal Officer", person: "Sumit Poddar", email: "sumitpoddar@tikonacapital.com", phone: "9833362488", time: "9:00 AM - 6:00 PM" },
  { designation: "Customer Care", person: "Sumit Poddar", email: "contact@tikonacapital.com", phone: "9833362488", time: "9:00 AM - 6:00 PM" },
  { designation: "Head of Customer Care", person: "Sumit Poddar", email: "contact@tikonacapital.com", phone: "9833362488", time: "9:00 AM - 6:00 PM" },
  { designation: "Compliance Officer", person: "Sumit Poddar", email: "contact@tikonacapital.com", phone: "9833362488", time: "9:00 AM - 6:00 PM" },
  { designation: "CEO", person: "Sumit Poddar", email: "contact@tikonacapital.com", phone: "9833362488", time: "9:00 AM - 6:00 PM" },
];

// --- Component ---
const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    try {
      const endpoint = import.meta.env.VITE_NEWSLETTER_ENDPOINT;
      if (endpoint) {
        await fetch(endpoint, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify({ email }),
        });
      }
      setSubmitStatus("success");
      setEmail("");
      toast.success("Subscribed! Check your inbox.");
    } catch {
      setSubmitStatus("error");
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const getModalTitle = (key: string) => {
    const link = complianceLinks.find((l) => l.key === key);
    return link?.label || key;
  };

  return (
    <>
      <footer className="bg-primary text-primary-foreground">
        {/* ── Main Grid ── */}
        <div className="container mx-auto px-4 pt-16 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Col 1-2: Company Info */}
            <div className="sm:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center">
                  <img src={tikonaIcon} alt="Tikona Capital" className="w-6 h-6 object-contain" />
                </div>
                <span className="font-heading font-bold text-lg text-primary-foreground">Tikona Capital</span>
              </div>
              <p className="text-sm text-primary-foreground/70 leading-relaxed mb-6 max-w-sm">
                Tikona Capital is a SEBI Registered Investment Advisor and Research Analyst, specializing in equity portfolio advisory and financial planning. We help HNIs, entrepreneurs, and business leaders grow and protect their wealth through disciplined, research-driven investing.
              </p>

              {/* Newsletter */}
              <form onSubmit={handleNewsletterSubmit} className="mb-6">
                <p className="text-sm font-medium text-primary-foreground/90 mb-2">Get weekly market insights</p>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Input
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 h-10 pr-10"
                    />
                    {isSubmitting && <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 animate-spin text-primary-foreground/60" />}
                    {submitStatus === "success" && <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-400" />}
                    {submitStatus === "error" && <XCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-red-400" />}
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="bg-accent text-accent-foreground hover:bg-accent/90 h-10 px-4 shrink-0">
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </form>

              {/* Social */}
              <div className="flex gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors group"
                  >
                    <s.icon size={18} className="text-primary-foreground group-hover:text-accent-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Col 3: Product */}
            <div>
              <h4 className="font-heading font-semibold text-accent text-sm uppercase tracking-wider mb-4">Product</h4>
              <ul className="space-y-2.5">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Company */}
            <div>
              <h4 className="font-heading font-semibold text-accent text-sm uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 5: Contact */}
            <div>
              <h4 className="font-heading font-semibold text-accent text-sm uppercase tracking-wider mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-primary-foreground/70">
                <li className="flex gap-2">
                  <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                  <span>2C 123 Kalpataru Estate, JVLR, Andheri East, Mumbai, 400093</span>
                </li>
                <li className="flex gap-2 items-center">
                  <Mail size={16} className="text-accent shrink-0" />
                  <a href="mailto:contact@tikonacapital.com" className="hover:text-accent transition-colors">
                    contact@tikonacapital.com
                  </a>
                </li>
                <li className="flex gap-2 items-center">
                  <Phone size={16} className="text-accent shrink-0" />
                  <a href="tel:+919967271135" className="hover:text-accent transition-colors">
                    +91 99672 71135
                  </a>
                </li>
                <li className="flex gap-2 items-center">
                  <Clock size={16} className="text-accent shrink-0" />
                  <span>9:00 AM to 6:00 PM</span>
                </li>
              </ul>
              <Button
                onClick={() => setIsConsultationModalOpen(true)}
                className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90 w-full"
                size="sm"
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* ── SEBI Registration ── */}
        <div className="bg-[#FFE5B4]/10 border-t border-primary-foreground/10">
          <div className="container mx-auto px-4 py-6">
            <h4 className="font-heading font-semibold text-accent text-sm mb-3">SEBI Registration Details</h4>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-xs text-primary-foreground/60">
              <p><span className="text-primary-foreground/80 font-medium">CIN:</span> U66190MH2024PTC429732</p>
              <p><span className="text-primary-foreground/80 font-medium">SEBI Reg No:</span> INH000069807</p>
              <p><span className="text-primary-foreground/80 font-medium">Registered Name:</span> Sumit Poddar Proprietor Tikona Capital</p>
              <p><span className="text-primary-foreground/80 font-medium">Brand Name:</span> Tikona Capital</p>
              <p><span className="text-primary-foreground/80 font-medium">Registered Address:</span> 2C 123 Kalpataru Estate, JVLR, Andheri East, Mumbai, 400093</p>
              <p><span className="text-primary-foreground/80 font-medium">Principal Officer:</span> sumitpoddar@tikonacapital.com</p>
              <p><span className="text-primary-foreground/80 font-medium">Validity:</span> Jun 13, 2022 to Jun 12, 2027</p>
              <p><span className="text-primary-foreground/80 font-medium">BSE Enlistment:</span> 5585</p>
            </div>
          </div>
        </div>

        {/* ── Regulatory & Compliance Links ── */}
        <div className="border-t border-primary-foreground/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-wrap items-center gap-x-1 gap-y-1.5 justify-center text-xs">
              {complianceLinks.map((link, i) => (
                <span key={link.key} className="flex items-center">
                  {i > 0 && <span className="text-primary-foreground/30 mx-1.5">&bull;</span>}
                  <button
                    onClick={() => setActiveModal(link.key)}
                    className="text-primary-foreground/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </span>
              ))}
              {externalComplianceLinks.map((link) => (
                <span key={link.label} className="flex items-center">
                  <span className="text-primary-foreground/30 mx-1.5">&bull;</span>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/60 hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    {link.label} <ExternalLink size={10} />
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-primary-foreground/10">
          <div className="container mx-auto px-4 py-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/50">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveModal("terms-of-use")}
                  className="hover:text-accent transition-colors"
                >
                  Terms of Use
                </button>
                <span>|</span>
                <a
                  href="https://tikonacapital.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
              <p>&copy; {new Date().getFullYear()} Tikona Capital. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Modals ── */}
      {complianceLinks.map((link) => (
        <ComplianceModal
          key={link.key}
          isOpen={activeModal === link.key}
          onClose={() => setActiveModal(null)}
          title={getModalTitle(link.key)}
        >
          {link.key === "designations" ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left p-3 font-medium text-foreground">Designation</th>
                    <th className="text-left p-3 font-medium text-foreground">Person</th>
                    <th className="text-left p-3 font-medium text-foreground">Email</th>
                    <th className="text-left p-3 font-medium text-foreground">Phone</th>
                    <th className="text-left p-3 font-medium text-foreground">Availability</th>
                  </tr>
                </thead>
                <tbody>
                  {grievanceContacts.map((row, i) => (
                    <tr key={i} className="border-t border-border">
                      <td className="p-3 text-muted-foreground">{row.designation}</td>
                      <td className="p-3 text-foreground font-medium">{row.person}</td>
                      <td className="p-3">
                        <a href={`mailto:${row.email}`} className="text-accent hover:underline">{row.email}</a>
                      </td>
                      <td className="p-3 text-muted-foreground">{row.phone}</td>
                      <td className="p-3 text-muted-foreground">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : link.slug ? (
            <LegalDocumentContent slug={link.slug} />
          ) : null}
        </ComplianceModal>
      ))}

      <BookConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </>
  );
};

export default Footer;
