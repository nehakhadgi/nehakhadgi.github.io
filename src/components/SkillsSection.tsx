import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Heart } from "lucide-react";

const technical = ["Python", "C", "C++", "SQL", "Machine Learning", "Computer Vision", "YOLO", "Data Science"];
const soft = ["Communication", "Teaching & Mentoring", "Problem Solving", "Team Collaboration", "Time Management", "Adaptability"];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref}>
      <div className="divider-gradient" />
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label">Skills</p>
          <h2 className="section-title">Technical Proficiency</h2>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="card-glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-accent)" }}>
                  <Code size={16} className="text-white" />
                </div>
                <h3 className="font-mono-label text-foreground">Technical</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
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

            <div className="card-glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-sage)" }}>
                  <Heart size={16} className="text-white" />
                </div>
                <h3 className="font-mono-label text-foreground">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
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
      </div>
    </section>
  );
};

export default SkillsSection;
