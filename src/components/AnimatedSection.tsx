
"use client";

import { motion } from "framer-motion";

export function AnimatedSection({ children, direction = "left", delay = 0 }: { children: React.ReactNode, direction?: "left" | "right" | "up", delay?: number }) {
  const variants = {
    hidden: { 
      opacity: 0, 
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 50 : 0
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay 
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}
