import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed right-0 top-0 w-[2px] h-screen origin-top z-50"
      style={{
        scaleY: scrollYProgress,
        background: "hsl(var(--accent))",
      }}
    />
  );
};

export default ScrollProgress;
