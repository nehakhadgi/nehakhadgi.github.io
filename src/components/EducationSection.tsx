import { GraduationCap, BadgeCheck } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { coursework } from "@/data/portfolio";
import ExperienceSection from "./ExperienceSection";
const education = [
  { degree: "B.E. Computer Engineering", institution: "Khwopa College of Engineering", affiliation: "Institute of Engineering, Tribhuvan University", year: "2026", result: "71.53% · First Division" },
  { degree: "+2 Science", institution: "Sagarmatha Multiple College", affiliation: "", year: "2020", result: "GPA 3.54" },
  { degree: "Secondary Education", institution: "Manjari Secondary School", affiliation: "", year: "2016", result: "GPA 3.80" },
];
const EducationSection = () => (
  <section id="education" className="section-band">
    <SectionReveal className="section-container">
      <div className="section-heading"><p className="section-label">04 / Background</p><h2 className="section-title">Education & experience.</h2></div>
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
        <div><h3 className="flex items-center gap-3 font-mono-label text-accent mb-7"><GraduationCap size={18} /> Education</h3>
          {education.map(edu => <div key={edu.degree} className="py-6 border-t border-border"><div className="flex justify-between gap-5"><h4 className="text-lg font-semibold leading-snug">{edu.degree}</h4><span className="font-mono-label text-muted-foreground pt-1 shrink-0">{edu.year}</span></div><p className="text-muted-foreground mt-2 text-sm">{edu.institution}</p>{edu.affiliation && <p className="text-muted-foreground text-sm mt-1">{edu.affiliation}</p>}<p className="text-sm text-accent mt-3">{edu.result}</p></div>)}
        </div>
        <div><ExperienceSection /><div className="border-t border-border pt-7 mt-9"><div className="flex items-start gap-3"><BadgeCheck className="text-accent-sage shrink-0" size={22} /><div><h3 className="font-semibold">Nepal Engineering Council</h3><p className="text-sm text-muted-foreground mt-1">Professional Engineering License</p></div></div></div><div className="border-t border-border pt-7 mt-9"><h3 className="font-semibold mb-4">Relevant coursework</h3><div className="flex flex-wrap gap-2">{coursework.map(c => <span key={c} className="skill-chip">{c}</span>)}</div></div></div>
      </div>
    </SectionReveal>
  </section>
);
export default EducationSection;
