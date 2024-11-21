"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      className="flex justify-between items-center py-6 px-10 bg-transparent z-[50] w-full fixed top-0 left-0 right-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
  
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xl font-bold text-white"
      >
        <Link href="/">Portfolio</Link>
      </motion.div>

      <div className="md:hidden text-white text-2xl" onClick={toggleMenu}>
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </div>

      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-center gap-10 bg-gray-900 md:bg-transparent absolute md:static top-16 left-0 w-full md:w-auto p-5 md:p-0 shadow-lg md:shadow-none`}
      >
  
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-6 text-white"
        >
          <Link
            href="#about"
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            À propos
          </Link>
          <Link
            href="#projects"
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Projets
          </Link>
          <Link
            href="#contact-form"
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex gap-6 mt-5 md:mt-0"
        >
          <Link
            href="https://github.com/nouredinemoussa"
            target="_blank"
            className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 transition-all flex items-center justify-center"
          >
            <RxGithubLogo size={30} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/nouredine-moussa-b49057290"
            target="_blank"
            className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 transition-all flex items-center justify-center"
          >
            <RxLinkedinLogo size={30} />
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
