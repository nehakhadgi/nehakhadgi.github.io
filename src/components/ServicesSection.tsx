import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Eye, Code, GraduationCap, Database } from "lucide-react";

const services = [
  { icon: Cpu, title: "ML Project Assistance", desc: "Guidance and implementation support for machine learning projects and research." },
  { icon: Eye, title: "Computer Vision Models", desc: "YOLO-based object detection and image recognition system development." },
  { icon: Code, title: "Python Programming", desc: "Data analysis, scripting, and automation tasks using Python." },
  { icon: GraduationCap, title: "Academic Tutoring", desc: "Secondary level Computer Science, Mathematics, and Science tutoring." },
  { icon: Database, title: "Database Development", desc: "Design and implementation of basic relational database management systems." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="section-label">Services</p>
        <h2 className="section-title">What I Can Help With</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.06 * i, ease: [0.16, 1, 0.3, 1] }}
              className="card-surface rounded-xl p-6"
            >
              <s.icon size={22} className="text-accent mb-4" />
              <h3 className="font-display font-bold text-foreground">{s.title}</h3>
              <p className="text-muted-foreground font-body text-sm mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
