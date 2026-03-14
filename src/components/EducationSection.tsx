import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Bachelor in Computer Engineering",
    institution: "Khwopa College of Engineering (TU – IOE)",
    detail: "Final Year · 8th Semester",
    year: "2021 – Present",
    icon: GraduationCap,
    gradient: "var(--gradient-accent)",
    active: true,
  },
  {
    degree: "Higher Secondary Education (+2)",
    institution: "Sagarmatha Multiple College",
    detail: "CGPA: 3.53",
    year: "2019 – 2021",
    icon: Award,
    gradient: "var(--gradient-sage)",
    active: false,
  },
  {
    degree: "Secondary Education (SEE)",
    institution: "Manjari Secondary School",
    detail: "GPA: 3.80",
    year: "2018",
    icon: BookOpen,
    gradient: "var(--gradient-warm)",
    active: false,
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref}>
      <div className="divider-gradient" />
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label">Education</p>
          <h2 className="section-title">Academic Foundation</h2>

          <div className="mt-12 grid gap-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
                className={`card-glass rounded-2xl p-6 md:p-8 flex items-start gap-5 group ${
                  edu.active ? "ring-1 ring-accent/30" : ""
                }`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: edu.gradient }}
                >
                  <edu.icon size={20} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="font-display text-lg md:text-xl font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <span className="font-mono-label text-muted-foreground whitespace-nowrap">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-body mt-1">{edu.institution}</p>
                  <div className="mt-3 inline-flex items-center gap-2">
                    <span className="text-sm font-mono-label px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                      {edu.detail}
                    </span>
                    {edu.active && (
                      <span className="text-sm font-mono-label px-3 py-1 rounded-full bg-accent/10 text-accent">
                        Current
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
