import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {/* Section GitHub, LinkedIn, Email */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Contact</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo className="text-[20px]" />
              <a
                href="https://github.com/nouredinemoussa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] ml-[6px]"
              >
                GitHub
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxLinkedinLogo className="text-[20px]" />
              <a
                href="https://www.linkedin.com/in/nouredine-moussa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] ml-[6px]"
              >
                LinkedIn
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaEnvelope className="text-[20px]" />
              <a
                href="mailto:nouredine.moussa1@gmail.com"
                className="text-[15px] ml-[6px]"
              >
                Email
              </a>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Nouredine Moussa. Tous droits réservés
        </div>
      </div>
    </div>
  );
};

export default Footer;
