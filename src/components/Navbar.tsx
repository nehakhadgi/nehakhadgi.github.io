import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const links = [{ label: "About", id: "about" }, { label: "Work", id: "projects" }, { label: "Skills", id: "skills" }, { label: "Background", id: "education" }];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return <><a href="#main" className="skip-link">Skip to content</a><header className="fixed inset-x-0 top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border"><nav aria-label="Main navigation" className="page-container h-20 flex items-center justify-between gap-4"><a href="#home" onClick={() => setOpen(false)} className="font-display font-bold text-xl">nk<span className="text-accent">.</span></a><div className="hidden md:flex items-center gap-8">{links.map(link => <a key={link.id} href={`#${link.id}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</a>)}<Button asChild variant="outline" size="sm"><a href="#contact">Get in touch <ArrowUpRight /></a></Button></div><Button variant="ghost" size="icon" className="md:hidden" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></nav>{open && <nav id="mobile-nav" aria-label="Mobile navigation" className="md:hidden page-container pb-5 border-t border-border">{[...links, { label: "Contact", id: "contact" }].map(link => <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)} className="block py-3 text-muted-foreground">{link.label}</a>)}</nav>}</header></>;
};
export default Navbar;
