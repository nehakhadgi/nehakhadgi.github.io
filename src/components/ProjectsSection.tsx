import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Ranjana Script Recognition (YOLO)",
    subtitle: "Major Project · 4th Year",
    description: "Extended previous research to recognize both printed and handwritten Ranjana script characters using YOLO-based object detection. Improved recognition accuracy through advanced dataset engineering and model optimization.",
    tags: ["YOLO", "Computer Vision", "Python", "Deep Learning"],
    accent: "accent",
  },
  {
    title: "Ranjana Character Recognition",
    subtitle: "Minor Project · 3rd Year",
    description: "Developed a character recognition system for the Ranjana script. Created a synthetic dataset manually for training, focusing on object detection and dataset engineering fundamentals.",
    tags: ["YOLO", "Dataset Engineering", "Python"],
    accent: "sage",
  },
  {
    title: "Teleindex System",
    subtitle: "Course Project",
    description: "Built an indexing and search functionality system demonstrating efficient data retrieval and management principles.",
    tags: ["Software Engineering", "Search"],
    accent: "accent",
  },
  {
    title: "Hospital Management System",
    subtitle: "Database Project",
    description: "Database-driven system with CRUD operations showcasing understanding of software workflow, relational databases, and SQL usage.",
    tags: ["SQL", "Database", "CRUD"],
    accent: "sage",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="projects" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="section-label">Projects</p>
        <h2 className="section-title">Case Studies & Research</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.06 * i, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelected(i)}
              className="card-surface rounded-xl p-6 cursor-pointer group"
            >
              <span className="font-mono-label text-muted-foreground">{p.subtitle}</span>
              <h3 className="font-display text-xl font-bold mt-2 text-foreground group-hover:translate-x-2 transition-transform duration-500" style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}>
                {p.title}
              </h3>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.tags.map((t) => (
                  <span key={t} className="skill-chip text-[10px]">{t}</span>
                ))}
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
            <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-card rounded-2xl p-8 max-w-lg w-full"
              style={{ boxShadow: 'var(--shadow-hover)' }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>
              <span className="font-mono-label text-muted-foreground">{projects[selected].subtitle}</span>
              <h3 className="font-display text-2xl font-bold mt-2 text-foreground">{projects[selected].title}</h3>
              <p className="text-muted-foreground font-body mt-4 leading-relaxed">{projects[selected].description}</p>
              <div className="flex flex-wrap gap-1.5 mt-6">
                {projects[selected].tags.map((t) => (
                  <span key={t} className="skill-chip">{t}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
