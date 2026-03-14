import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Brain, MessageCircle, Target, ArrowUpRight } from "lucide-react";

const traits = [
  { icon: Brain, label: "Curious Learner", color: "var(--gradient-accent)" },
  { icon: Target, label: "Problem Solver", color: "var(--gradient-warm)" },
  { icon: MessageCircle, label: "Strong Communicator", color: "var(--gradient-sage)" },
  { icon: BookOpen, label: "Avid Reader", color: "var(--gradient-accent)" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref}>
      <div className="divider-gradient" />
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label">About</p>
          <h2 className="section-title">
            Building a career at the
            <br />
            <span className="gradient-text">intersection of AI & impact.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16 mt-12">
            <div className="space-y-5 text-muted-foreground font-body text-[15px] leading-relaxed">
              <p>
                I'm a final-semester Computer Engineering undergraduate at Khwopa College of Engineering, 
                affiliated with Tribhuvan University (IOE), based in Kathmandu, Nepal.
              </p>
              <p>
                My academic journey has been driven by a deep curiosity for Machine Learning, Artificial Intelligence, 
                and Data Science. I believe in continuous learning — both through technical exploration 
                and the books I read in my free time.
              </p>
              <p>
                With hands-on experience in computer vision projects and a background in teaching, 
                I bring both technical rigor and clear communication to every challenge I take on.
              </p>
              <a href="#contact" className="inline-flex items-center gap-1 text-accent font-semibold mt-2 hover:gap-2 transition-all">
                Let's connect <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {traits.map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                  className="card-glass rounded-2xl p-6 flex flex-col gap-4 group cursor-default"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: t.color }}
                  >
                    <t.icon size={18} className="text-white" />
                  </div>
                  <span className="font-mono-label text-foreground group-hover:text-accent transition-colors">{t.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
