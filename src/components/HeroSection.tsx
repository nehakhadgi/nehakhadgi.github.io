import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import SectionReveal from "./SectionReveal";

const HeroSection = () => (
  <section id="home" className="hero-section">
    <div className="page-container">
      <SectionReveal>
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 md:mb-14">
          <p className="font-mono-label text-muted-foreground flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-accent-sage" /> Computer Engineering Graduate</p>
          <p className="font-mono-label text-muted-foreground">Kathmandu, Nepal · 27.7172° N</p>
        </div>
        <p className="hero-name">Neha Khadgi<span className="text-accent">.</span></p>
        <h1 className="hero-heading">Building intelligent<br className="hidden sm:block" /> solutions <span className="text-muted-foreground">from data.</span></h1>
        <div className="grid md:grid-cols-[1fr_auto] items-end gap-8 mt-8 md:mt-10">
          <p className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed">Exploring the intersection of machine learning, data science, and applied AI. Turning curiosity into practical, data-driven projects.</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg"><a href="#projects">Explore my work <ArrowDownRight /></a></Button>
            <Button asChild variant="outline" size="lg"><a href="#contact">Let's connect <ArrowUpRight /></a></Button>
          </div>
        </div>
        <div className="hero-bottom flex flex-wrap items-center justify-between gap-5">
          <div className="flex flex-wrap gap-x-7 gap-y-2 font-mono-label text-muted-foreground"><span>Machine Learning</span><span>Data Science</span><span>Applied AI</span></div>
          <Button asChild variant="link" className="p-0 text-muted-foreground"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight /></a></Button>
        </div>
      </SectionReveal>
    </div>
  </section>
);
export default HeroSection;
