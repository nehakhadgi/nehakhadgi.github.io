import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const technical = ["Python", "C", "C++", "SQL", "Machine Learning", "Computer Vision", "YOLO", "Data Science"];
const soft = ["Communication", "Teaching & Mentoring", "Problem Solving", "Team Collaboration", "Time Management", "Adaptability"];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="section-label">Skills</p>
        <h2 className="section-title">Technical Proficiency</h2>

        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <div>
            <h3 className="font-mono-label text-muted-foreground mb-4">Technical</h3>
            <div className="flex flex-wrap gap-2">
              {technical.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.06 * i, ease: [0.16, 1, 0.3, 1] }}
                  className="skill-chip"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono-label text-muted-foreground mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {soft.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.06 * (i + technical.length), ease: [0.16, 1, 0.3, 1] }}
                  className="skill-chip"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
