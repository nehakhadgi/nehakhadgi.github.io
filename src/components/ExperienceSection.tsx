import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, CheckCircle2 } from "lucide-react";

const highlights = [
  "Taught secondary level students in Computer Science, Mathematics, and Science",
  "Developed strong communication and presentation skills through classroom instruction",
  "Built ability to explain complex technical concepts in accessible, simple ways",
  "Gained hands-on experience in classroom leadership and student mentoring",
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref}>
      <div className="divider-gradient" />
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label">Experience</p>
          <h2 className="section-title">Professional Background</h2>

          <div className="mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-glass rounded-2xl p-8 md:p-10 max-w-2xl"
            >
              <div className="flex items-start gap-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--gradient-sage)" }}
                >
                  <Users size={20} className="text-white" />
                </div>
                <div>
                  <span className="font-mono-label text-accent">Teaching Experience</span>
                  <h3 className="font-display text-xl md:text-2xl font-bold mt-2 text-foreground">Manjari Secondary School</h3>
                  <ul className="mt-6 space-y-4">
                    {highlights.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + 0.1 * i }}
                        className="flex items-start gap-3 text-muted-foreground font-body text-sm"
                      >
                        <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
