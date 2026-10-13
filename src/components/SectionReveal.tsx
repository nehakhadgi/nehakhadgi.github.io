import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const SectionReveal = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const reducedMotion = useReducedMotion();
  return <motion.div className={className} initial={reducedMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.5 }}>{children}</motion.div>;
};
export default SectionReveal;