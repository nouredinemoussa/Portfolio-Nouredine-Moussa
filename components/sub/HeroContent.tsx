"use client";

import React from "react";
import Image from "next/image";
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
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >

      <div className="h-full w-full md:w-1/2 flex flex-col gap-5 justify-center m-auto text-center md:text-start">

        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex justify-center md:justify-start items-center"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[11px] md:text-[13px]">
            Développeur Front-End Portfolio
          </h1>
        </motion.div>

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

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm md:text-lg text-white my-5 max-w-full md:max-w-[600px]"
        >
          Je suis Nouredine Moussa, un développeur front-end passionné, spécialisé dans la création de sites web modernes, interactifs et performants. Après avoir découvert le développement web par curiosité, j’ai suivi la formation Intégrateur Web d’OpenClassrooms. Ce site vous présente les compétences que j’y ai acquises
        </motion.p>

      </div>


      <motion.div
  variants={slideInFromRight(0.5)}
  className="relative w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0"
>
  <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
    <Image
      src="/nouredine_portfolio.webp"
      alt="Portrait du développeur"
      fill
      sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 20vw"
      className="rounded-full object-cover"
    />
  </div>
</motion.div>

    </motion.div>
  );
};

export default HeroContent;
