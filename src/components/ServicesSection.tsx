import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Eye, Code, GraduationCap, Database } from "lucide-react";

const services = [
  { icon: Cpu, title: "ML Project Assistance", desc: "Guidance and implementation support for machine learning projects and research.", gradient: "var(--gradient-accent)" },
  { icon: Eye, title: "Computer Vision Models", desc: "YOLO-based object detection and image recognition system development.", gradient: "var(--gradient-sage)" },
  { icon: Code, title: "Python Programming", desc: "Data analysis, scripting, and automation tasks using Python.", gradient: "var(--gradient-warm)" },
  { icon: GraduationCap, title: "Academic Tutoring", desc: "Secondary level Computer Science, Mathematics, and Science tutoring.", gradient: "var(--gradient-accent)" },
  { icon: Database, title: "Database Development", desc: "Design and implementation of basic relational database management systems.", gradient: "var(--gradient-sage)" },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref}>
      <div className="divider-gradient" />
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label">Services</p>
          <h2 className="section-title">What I Can Help With</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
                className="card-glass rounded-2xl p-7 group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: s.gradient }}
                >
                  <s.icon size={20} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-foreground text-lg group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-muted-foreground font-body text-sm mt-3 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
