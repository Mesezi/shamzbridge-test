'use client';

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  from: 'top' | 'bottom' | 'left' | 'right';
  className?: string; // Optional className prop
}

const Reveal: React.FC<RevealProps> = ({ children, delay, from, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.set('hidden');
    }
  }, [isInView, controls]);

  // Determine the initial animation based on the 'from' direction
  const getInitialVariant = () => {
    switch (from) {
      case 'top':
        return { opacity: 0, y: -150 }; // Fade in from the top
      case 'bottom':
        return { opacity: 0, y: 150 };  // Fade in from the bottom
      case 'left':
        return { opacity: 0, x: -150 }; // Fade in from the left
      case 'right':
        return { opacity: 0, x: 150 };  // Fade in from the right
      default:
        return { opacity: 0, y: 150 };  // Default to bottom if no direction is passed
    }
  };

  return (
    <div ref={ref} className={`overflow-hidden h-full w-full`}> {/* Add the passed className */}
      <motion.div
        variants={{
          hidden: getInitialVariant(),
          visible: { opacity: 1, x: 0, y: 0 }, // Reset x and y when visible
        }}
        initial="hidden"
        animate={controls}
        transition={delay ? { duration: 1, delay } : { duration: 1 }}
        className={`${className ?? ''}`}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
