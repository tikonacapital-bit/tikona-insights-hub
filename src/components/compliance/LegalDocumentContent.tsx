import { useEffect, useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { fetchLegalDocument } from "@/services/legalDocuments";
import { getStrapiMedia } from "@/lib/strapi";
import type { LegalDocument } from "@/types/legalDocument";
import ErrorBoundary from "./ErrorBoundary";
import { Loader2, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LegalDocumentContentProps {
  slug: string;
}

const LegalDocumentContent = ({ slug }: LegalDocumentContentProps) => {
  const [document, setDocument] = useState<LegalDocument | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const doc = await fetchLegalDocument(slug);
        if (!cancelled) {
          setDocument(doc);
          if (!doc) setError("Document not found.");
        }
      } catch {
        if (!cancelled) setError("Failed to load document. Please try again later.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => { cancelled = true; };
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
        <span className="ml-2 text-muted-foreground">Loading document...</span>
      </div>
    );
  }

  if (error || !document) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">{error || "No content available."}</p>
      </div>
    );
  }

  // PDF media
  if (document.media && document.media.mime === "application/pdf") {
    const pdfUrl = getStrapiMedia(document.media.url);
    return (
      <div className="w-full flex justify-center py-10">
        <object data={pdfUrl} type="application/pdf" className="w-full h-[70vh] rounded-lg hidden md:block">
          <div className="flex flex-col items-center justify-center h-full min-h-[300px] gap-4">
            <p className="text-[#5A6C84] text-[17px]">
              Unable to display PDF in browser.
            </p>
            <Button asChild className="bg-[#243F6C] hover:bg-[#1A3158] text-white rounded-lg px-5 py-5 font-medium shadow-none">
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <FileDown className="w-[18px] h-[18px]" strokeWidth={2.5} />
                Open PDF in New Tab
              </a>
            </Button>
          </div>
        </object>
        
        {/* Mobile/Fallback that always shows when object fails to load directly or on small screens */}
        <div className="md:hidden flex flex-col items-center justify-center min-h-[300px] gap-4">
          <p className="text-[#5A6C84] text-[17px]">
            Unable to display PDF in browser.
          </p>
          <Button asChild className="bg-[#243F6C] hover:bg-[#1A3158] text-white rounded-lg px-5 py-5 font-medium shadow-none">
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FileDown className="w-[18px] h-[18px]" strokeWidth={2.5} />
              Open PDF in New Tab
            </a>
          </Button>
        </div>
      </div>
    );
  }

  // Rich text content
  if (document.content) {
    return (
      <ErrorBoundary>
        <div className="prose prose-sm max-w-none">
          <BlocksRenderer
            content={document.content}
            blocks={{
              paragraph: ({ children }) => (
                <p className="text-muted-foreground mb-3 leading-relaxed">{children}</p>
              ),
              heading: ({ children, level }) => {
                const sizes: Record<number, string> = {
                  1: "text-2xl",
                  2: "text-xl",
                  3: "text-lg",
                  4: "text-base",
                  5: "text-sm",
                  6: "text-xs",
                };
                const Tag = `h${level}` as keyof JSX.IntrinsicElements;
                return (
                  <Tag className={`${sizes[level] || "text-base"} font-heading font-bold text-primary mb-3 mt-6`}>
                    {children}
                  </Tag>
                );
              },
              list: ({ children, format }) => {
                const Tag = format === "ordered" ? "ol" : "ul";
                return (
                  <Tag className={`pl-6 mb-4 space-y-2 ${format === "ordered" ? "list-decimal" : "list-disc"}`}>
                    {children}
                  </Tag>
                );
              },
              "list-item": ({ children }) => (
                <li className="text-muted-foreground leading-relaxed">{children}</li>
              ),
              quote: ({ children }) => (
                <blockquote className="border-l-4 border-accent bg-accent/5 pl-4 py-2 my-4 italic">
                  {children}
                </blockquote>
              ),
              code: ({ children }) => (
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
                  <code className="text-sm text-foreground">{children}</code>
                </pre>
              ),
              link: ({ children, url }) => (
                <a href={url} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 underline">
                  {children}
                </a>
              ),
            }}
            modifiers={{
              bold: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
              italic: ({ children }) => <em>{children}</em>,
              underline: ({ children }) => <u>{children}</u>,
              strikethrough: ({ children }) => <s>{children}</s>,
              code: ({ children }) => (
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm">{children}</code>
              ),
            }}
          />
        </div>
      </ErrorBoundary>
    );
  }

  return (
    <div className="text-center py-12">
      <p className="text-muted-foreground">No content available for this document.</p>
    </div>
  );
};

export default LegalDocumentContent;
