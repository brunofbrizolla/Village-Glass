
"use client";

import { motion } from "framer-motion";

export function AnimatedSection({ children, direction = "left", delay = 0 }: { children: React.ReactNode, direction?: "left" | "right" | "up", delay?: number }) {
  const variants = {
    hidden: { 
      opacity: 0, 
      x: direction === "left" ? -60 : direction === "right" ? 60 : 0,
      y: direction === "up" ? 40 : 0
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1], // Custom smooth quintic easing
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
