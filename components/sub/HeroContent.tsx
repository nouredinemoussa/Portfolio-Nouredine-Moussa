"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start">
        {/* Section d'introduction */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex justify-center md:justify-start items-center"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[11px] md:text-[13px]">
            Développeur Front-End Portfolio
          </h1>
        </motion.div>

        {/* Titre principal */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl md:text-6xl font-bold text-white max-w-full md:max-w-[600px] w-auto h-auto"
        >
          <span>
            Construire des expériences
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}uniques{" "}
            </span>
            pour le web
          </span>
        </motion.div>

        {/* Description personnelle */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm md:text-lg text-gray-400 my-5 max-w-full md:max-w-[600px]"
        >
          Je suis un développeur front-end passionné, spécialisé dans la
          création de sites web modernes, interactifs et performants. Explorez
          mes projets pour découvrir mes compétences et réalisations.
        </motion.p>

        {/* Bouton d'appel à l'action */}
        <motion.a
          variants={slideInFromLeft(1)}
          href="#about" // Ajoutez une ancre si nécessaire
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-full md:max-w-[200px]"
        >
          En savoir plus !
        </motion.a>
      </div>
    </motion.div>
  );
};

export default HeroContent;
