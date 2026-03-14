import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="section-label">Experience</p>
        <h2 className="section-title">Professional Background</h2>

        <div className="mt-8">
          <div className="card-surface rounded-xl p-8 max-w-2xl">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                <Users size={18} className="text-accent" />
              </div>
              <div>
                <span className="font-mono-label text-muted-foreground">Teaching Experience</span>
                <h3 className="font-display text-xl font-bold mt-1 text-foreground">Manjari Secondary School</h3>
                <ul className="mt-4 space-y-2 text-muted-foreground font-body text-sm">
                  <li>• Taught secondary level students in Computer Science, Mathematics, and Science</li>
                  <li>• Developed strong communication and presentation skills through classroom instruction</li>
                  <li>• Built ability to explain complex technical concepts in accessible, simple ways</li>
                  <li>• Gained hands-on experience in classroom leadership and student mentoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
