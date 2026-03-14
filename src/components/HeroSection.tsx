import { motion } from "framer-motion";
import { ArrowDown, Send } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
        opacity: 0.4
      }} />

      <div className="section-container relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl">
          
          <p className="section-label mb-6">Computer Engineering · AI & ML</p>
          <h1 className="text-display text-foreground mb-6">
            Neha<br />Khadgi
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mb-8 font-body">
            Engineering Intelligence. Solving for the Real World — leveraging Machine Learning & Computer Vision to build systems that matter.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              <ArrowDown size={16} />
              View Projects
            </a>
            <a href="#contact" className="btn-outline">
              <Send size={16} />
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;