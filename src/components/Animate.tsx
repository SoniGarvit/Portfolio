import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Variants } from "framer-motion";



const Animate = ({
  children,
  from = "left",
  delay = 0,
}: {
  children: React.ReactNode;
  from?: "left" | "right";
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const variants:Variants = {
    hidden: {
      opacity: 0,
      x: from === "left" ? -80 : 80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67], delay },
    },
  };
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default Animate;
