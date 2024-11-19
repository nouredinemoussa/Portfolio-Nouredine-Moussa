"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";  // Optimisation avec Next.js Image

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}

const SkillDataProvider = ({ src, width, height, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Animation uniquement lorsque 50% de l'élément est visible
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3; // Délai d'animation global

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt="skill image"
        priority={index < 5} // Prioriser les premières images pour de meilleures performances
        layout="intrinsic"  // Utilisation de la taille naturelle de l'image
      />
    </motion.div>
  );
};

export default SkillDataProvider;
