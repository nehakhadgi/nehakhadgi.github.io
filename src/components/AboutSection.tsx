import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Brain, MessageCircle, Target } from "lucide-react";

const traits = [
  { icon: Brain, label: "Curious Learner" },
  { icon: Target, label: "Problem Solver" },
  { icon: MessageCircle, label: "Strong Communicator" },
  { icon: BookOpen, label: "Avid Reader" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="section-label">About</p>
        <h2 className="section-title">Building a career at the<br />intersection of AI & impact.</h2>

        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <div className="space-y-4 text-muted-foreground font-body">
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
          </div>

          <div className="grid grid-cols-2 gap-4">
            {traits.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                className="card-surface rounded-xl p-5 flex flex-col gap-3"
              >
                <t.icon size={20} className="text-accent" />
                <span className="font-mono-label text-foreground">{t.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
