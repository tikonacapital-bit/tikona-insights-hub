const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-sm">T</span>
              </div>
              <span className="font-heading font-bold text-foreground">Tikona Research</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A research-driven investment platform by Tikona Capital. Comprehensive wealth solutions for serious investors.
            </p>
          </div>

          {[
            { title: "Product", links: ["Research Reports", "Audio Insights", "Explainer Videos", "AI Assistant"] },
            { title: "Company", links: ["About Tikona Capital", "Careers", "Blog", "Contact"] },
            { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Disclaimer", "SEBI Registration"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-semibold text-foreground mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 Tikona Capital. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">SEBI Registered Investment Adviser</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
