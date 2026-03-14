import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-mono-label text-muted-foreground">© 2025 Neha Khadgi. All rights reserved.</p>
      <div className="flex items-center gap-4">
        {[Github, Linkedin, Twitter].map((Icon, i) => (
          <a key={i} href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Icon size={16} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
