import { useMemo, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { categories, type Project, type ProjectCategory, projects } from "@/data/portfolio";
import SectionReveal from "./SectionReveal";

const ProjectVisual = ({ project, index }: { project: Project; index: number }) => (
  <div className="project-visual" aria-hidden="true">
    <div className="flex justify-between font-mono-label text-muted-foreground"><span>NK / {String(index + 1).padStart(2, "0")}</span><span>{project.category}</span></div>
    <div className="flow-track">
      {project.flow.map((step, stepIndex) => <div className="contents" key={step}><span className="flow-node">{step}</span>{stepIndex < 2 && <span className="flow-line" />}</div>)}
    </div>
  </div>
);

const ProjectsSection = () => {
  const [category, setCategory] = useState<ProjectCategory>("All projects");
  const [selected, setSelected] = useState<Project | null>(null);
  const visible = useMemo(() => category === "All projects" ? projects : projects.filter(project => project.category === category), [category]);
  return (
    <section id="projects" className="section-band">
      <SectionReveal className="section-container">
        <div className="section-heading md:flex md:items-end md:justify-between gap-8"><div><p className="section-label">02 / Selected work</p><h2 className="section-title mb-0">Projects built to answer<br />real questions.</h2></div><p className="text-muted-foreground max-w-sm text-sm mt-5 md:mt-0">A selection of machine learning, analytics, forecasting, NLP, and computer vision work.</p></div>
        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter projects">{categories.map(item => <Button key={item} variant={category === item ? "default" : "outline"} size="sm" onClick={() => setCategory(item)} aria-pressed={category === item}>{item}</Button>)}</div>
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {visible.map((project) => { const index = projects.indexOf(project); return <article key={project.title} className="project-card group">
            <ProjectVisual project={project} index={index} />
            <div className="pt-6"><p className="font-mono-label text-accent">{project.category}</p><h3 className="text-xl md:text-2xl font-semibold mt-3 leading-tight">{project.title}</h3><p className="text-sm text-muted-foreground mt-3 leading-relaxed">{project.description}</p><div className="flex flex-wrap gap-2 mt-5">{project.tags.map(tag => <span className="skill-chip" key={tag}>{tag}</span>)}</div><div className="flex items-center justify-between mt-7 pt-5 border-t border-border"><Button variant="link" className="p-0 text-muted-foreground" onClick={() => setSelected(project)}>View details <ArrowUpRight /></Button><Button asChild variant="ghost" size="icon"><a href={project.url === "https://github.com/nehakhadgi/support-signal-radar" ? "https://github.com/nehakhadgi" : project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`} title="View on GitHub"><Github /></a></Button></div></div>
          </article>; })}
        </div>
        <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}>
          {selected && <DialogContent className="max-w-2xl"><DialogHeader><p className="font-mono-label text-accent mb-3">{selected.category}</p><DialogTitle className="text-2xl md:text-3xl leading-tight pr-8">{selected.title}</DialogTitle><DialogDescription className="text-base leading-relaxed pt-4">{selected.detail}</DialogDescription></DialogHeader><div className="flex flex-wrap gap-2">{selected.tags.map(tag => <span key={tag} className="skill-chip">{tag}</span>)}</div><Button asChild className="mt-3 w-fit"><a href={selected.url === "https://github.com/nehakhadgi/support-signal-radar" ? "https://github.com/nehakhadgi" : selected.url} target="_blank" rel="noopener noreferrer">View on GitHub <ArrowUpRight /></a></Button></DialogContent>}
        </Dialog>
      </SectionReveal>
    </section>
  );
};
export default ProjectsSection;