import { useEffect } from "react";
import { X } from "lucide-react";

interface BookConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ZOHO_FORM_URL =
  "https://forms.zohopublic.in/tikonacapitalfinserv1/form/TikonaCapitalFinserv/formperma/5LdIs8hpJCmeU37zeo1xyrXjShRFBwIV5QCzVK4sbIE";

const BookConsultationModal = ({ isOpen, onClose }: BookConsultationModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose} data-lenis-prevent>
      <div
        className="w-[95vw] max-w-4xl h-[95vh] bg-background rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex items-center justify-between px-6 py-4 shrink-0"
          style={{ background: "linear-gradient(135deg, #1F4690, #3A5BA0)" }}
        >
          <h2 className="text-lg font-heading font-semibold text-white">Book a Consultation</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        <iframe
          src={ZOHO_FORM_URL}
          className="flex-1 w-full border-0"
          title="Book a Consultation"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default BookConsultationModal;
