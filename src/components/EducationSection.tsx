import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor in Computer Engineering",
    institution: "Khwopa College of Engineering (TU – IOE)",
    detail: "Final Year · 8th Semester",
    year: "2021 – Present",
  },
  {
    degree: "Higher Secondary Education (+2)",
    institution: "Sagarmatha Multiple College",
    detail: "CGPA: 3.53",
    year: "2019 – 2021",
  },
  {
    degree: "Secondary Education (SEE)",
    institution: "Manjari Secondary School",
    detail: "GPA: 3.80",
    year: "2019",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="section-label">Education</p>
        <h2 className="section-title">Academic Foundation</h2>

        <div className="mt-8 space-y-0 relative">
          {/* Timeline line */}
          <div className="absolute left-[15px] top-2 bottom-2 w-[1px] bg-border" />

          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-12 pb-10 last:pb-0"
            >
              <div className="absolute left-[8px] top-1 w-[15px] h-[15px] rounded-full bg-background border-2 border-accent flex items-center justify-center">
                <div className="w-[5px] h-[5px] rounded-full bg-accent" />
              </div>
              <span className="font-mono-label text-muted-foreground">{edu.year}</span>
              <h3 className="font-display text-xl font-bold mt-1 text-foreground">{edu.degree}</h3>
              <p className="text-muted-foreground font-body mt-1">{edu.institution}</p>
              <p className="text-muted-foreground font-body text-sm mt-0.5">{edu.detail}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
