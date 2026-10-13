import { Brain, BookOpen, MessagesSquare, ScanEye } from "lucide-react";
import SectionReveal from "./SectionReveal";
const AboutSection = () => (
  <section id="about" className="section-band">
    <SectionReveal className="section-container">
      <div className="section-heading"><p className="section-label">01 / About</p><h2 className="section-title">Curiosity, with purpose.</h2></div>
      <div className="grid md:grid-cols-2 gap-10 md:gap-20">
        <p className="text-xl md:text-2xl leading-relaxed text-foreground">I'm Neha, a Computer Engineering graduate interested in making data useful—and intelligent systems more practical.</p>
        <div className="space-y-5 text-muted-foreground leading-relaxed"><p>My hands-on projects span machine learning, data analysis, computer vision, forecasting, NLP, and AI applications. I enjoy working through the entire problem: understanding the data, testing an approach, and building something people can explore.</p><p>A background in teaching has shaped how I communicate complex ideas. Outside technical work, I read and keep learning—with the same curiosity I bring to every project.</p></div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-8 border-t border-border">
        {[{ icon: Brain, title: "Analytical thinking" }, { icon: ScanEye, title: "Applied exploration" }, { icon: MessagesSquare, title: "Clear communication" }, { icon: BookOpen, title: "Continuous learning" }].map(({ icon: Icon, title }) => <div key={title} className="flex items-center gap-3 text-sm"><Icon size={18} className="text-accent shrink-0" /><span>{title}</span></div>)}
      </div>
    </SectionReveal>
  </section>
);
export default AboutSection;
