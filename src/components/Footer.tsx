import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-mono-label text-muted-foreground">© 2025 Neha Khadgi. All rights reserved.</p>
      <div className="flex items-center gap-3">
        {[Github, Linkedin, Twitter].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300"
          >
            <Icon size={15} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
