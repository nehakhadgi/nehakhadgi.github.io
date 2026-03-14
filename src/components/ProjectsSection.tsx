import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Ranjana Script Recognition (YOLO)",
    subtitle: "Major Project · 4th Year",
    description: "Extended previous research to recognize both printed and handwritten Ranjana script characters using YOLO-based object detection. Improved recognition accuracy through advanced dataset engineering and model optimization.",
    tags: ["YOLO", "Computer Vision", "Python", "Deep Learning"],
    gradient: "var(--gradient-accent)",
    number: "01",
  },
  {
    title: "Ranjana Character Recognition",
    subtitle: "Minor Project · 3rd Year",
    description: "Developed a character recognition system for the Ranjana script. Created a synthetic dataset manually for training, focusing on object detection and dataset engineering fundamentals.",
    tags: ["YOLO", "Dataset Engineering", "Python"],
    gradient: "var(--gradient-sage)",
    number: "02",
  },
  {
    title: "Teleindex System",
    subtitle: "Course Project",
    description: "Built an indexing and search functionality system demonstrating efficient data retrieval and management principles.",
    tags: ["Software Engineering", "Search"],
    gradient: "var(--gradient-warm)",
    number: "03",
  },
  {
    title: "Hospital Management System",
    subtitle: "Database Project",
    description: "Database-driven system with CRUD operations showcasing understanding of software workflow, relational databases, and SQL usage.",
    tags: ["SQL", "Database", "CRUD"],
    gradient: "var(--gradient-accent)",
    number: "04",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="projects" ref={ref}>
      <div className="divider-gradient" />
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label">Projects</p>
          <h2 className="section-title">Case Studies & Research</h2>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelected(i)}
                className="card-glass rounded-2xl p-7 cursor-pointer group relative overflow-hidden"
              >
                {/* Number watermark */}
                <span className="absolute top-4 right-6 font-display text-6xl font-black text-border/50 group-hover:text-accent/15 transition-colors duration-500">
                  {p.number}
                </span>

                <div className="relative z-10">
                  <span className="font-mono-label text-muted-foreground">{p.subtitle}</span>
                  <h3 className="font-display text-xl font-bold mt-3 text-foreground flex items-center gap-2">
                    {p.title}
                    <ArrowUpRight size={18} className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500" />
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {p.tags.map((t) => (
                      <span key={t} className="skill-chip text-[10px]">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6"
              onClick={() => setSelected(null)}
            >
              <div className="absolute inset-0 bg-foreground/10 backdrop-blur-md" />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-card rounded-3xl p-10 max-w-lg w-full"
                style={{ boxShadow: 'var(--shadow-elevated)' }}
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-border transition-all"
                >
                  <X size={16} />
                </button>
                <span className="font-mono-label text-accent">{projects[selected].subtitle}</span>
                <h3 className="font-display text-2xl md:text-3xl font-bold mt-3 text-foreground">{projects[selected].title}</h3>
                <p className="text-muted-foreground font-body mt-5 leading-relaxed">{projects[selected].description}</p>
                <div className="flex flex-wrap gap-2 mt-8">
                  {projects[selected].tags.map((t) => (
                    <span key={t} className="skill-chip">{t}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
