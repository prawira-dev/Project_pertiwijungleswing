"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type SectionRevealProps = PropsWithChildren<{
  delay?: number;
  className?: string;
}>;

export function SectionReveal({
  children,
  delay = 0,
  className
}: SectionRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
