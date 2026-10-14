import { ArrowUpRight, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
const Footer = () => <footer className="border-t border-border py-8"><div className="page-container flex flex-wrap items-center justify-between gap-5"><p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Neha Khadgi</p><div className="flex items-center gap-6"><Button asChild variant="link" className="text-muted-foreground p-0"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight /></a></Button><Button asChild variant="link" className="text-muted-foreground p-0"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight /></a></Button><Button asChild variant="ghost" size="icon"><a href="#home" aria-label="Back to top" title="Back to top"><ArrowUp /></a></Button></div></div></footer>;
export default Footer;
