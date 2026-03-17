import { motion } from "framer-motion";
import { ArrowDown, Send, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[10%] w-[400px] h-[400px] rounded-full opacity-20 blur-[100px]"
        style={{ background: "var(--gradient-accent)" }} />
      
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[5%] w-[300px] h-[300px] rounded-full opacity-15 blur-[80px]"
        style={{ background: "var(--gradient-sage)" }} />
      

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
        opacity: 0.3
      }} />

      <div className="section-container relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8">
            
            <Sparkles size={14} className="text-accent" />
            <span className="font-mono-label text-muted-foreground">Computer Engineer    </span>
          </motion.div>

          <h1 className="text-display text-foreground mb-8">
            <span className="block">Neha</span>
            <span className="block gradient-text">Khadgi</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 font-body leading-relaxed">
            Engineering Intelligence. Solving for the Real World — leveraging Machine Learning & Computer Vision to build systems that matter.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary group">
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              View Projects
            </a>
            <a href="#contact" className="btn-outline group">
              <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
              Contact Me
            </a>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-10 mt-16 pt-8 border-t border-border">
            
            {[
            { value: "4+", label: "Projects" },
            { value: "YOLO", label: "Specialization" },
            { value: "8th", label: "Semester" }].
            map((stat) =>
            <div key={stat.label}>
                <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="font-mono-label text-muted-foreground mt-1">{stat.label}</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;