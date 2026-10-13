import { skillGroups } from "@/data/portfolio";
import SectionReveal from "./SectionReveal";
const SkillsSection = () => (
  <section id="skills" className="section-band">
    <SectionReveal className="section-container">
      <div className="section-heading"><p className="section-label">03 / Technical skills</p><h2 className="section-title">The tools behind the work.</h2></div>
      <div>{skillGroups.map((group, i) => <div key={group.title} className="grid md:grid-cols-[280px_1fr] gap-5 py-7 border-t border-border"><h3 className="text-lg font-medium flex gap-5"><span className="font-mono-label text-muted-foreground mt-1">0{i + 1}</span>{group.title}</h3><div className="flex flex-wrap gap-2">{group.items.map(skill => <span key={skill} className="skill-chip">{skill}</span>)}</div></div>)}</div>
    </SectionReveal>
  </section>
);
export default SkillsSection;
