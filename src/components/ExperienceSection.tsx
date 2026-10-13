import { BriefcaseBusiness } from "lucide-react";
const ExperienceSection = () => (
  <div id="experience">
    <h3 className="flex items-center gap-3 font-mono-label text-accent mb-7"><BriefcaseBusiness size={18} /> Experience</h3>
    <div className="border-t border-border pt-6"><div className="flex flex-wrap justify-between gap-3"><h4 className="text-lg font-semibold">Secondary-Level Teacher</h4><span className="font-mono-label text-muted-foreground pt-1">2020–2022</span></div><p className="text-muted-foreground mt-2 text-sm">Manjari Secondary School</p><p className="text-sm text-accent mt-3">Mathematics · Science · Computer</p>
      <ul className="list-disc pl-4 space-y-4 mt-6 text-sm text-muted-foreground leading-relaxed"><li>Explained academic concepts through structured lessons, practical examples, and student support.</li><li>Adapted teaching methods to different learning needs and monitored student understanding.</li><li>Strengthened analytical thinking, communication, problem-solving, and presentation skills.</li></ul>
    </div>
  </div>
);
export default ExperienceSection;
