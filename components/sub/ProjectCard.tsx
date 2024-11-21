import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  if (!src || !title || !description || !link) {
    console.error("Invalid props in ProjectCard:", { src, title, description, link });
  }

  return (

    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg justify-self-center"
    >
      <div className="card card-compact bg-base-100 shadow-xl rounded-xl transform transition-all duration-300 hover:scale-105 border border-[#2A0E61]">
   
        <figure className="relative w-full h-56">
          <Image
            src={src}
            alt={title}
            layout="fill"
            objectFit="contain"
            className="rounded-t-xl"
          />
        </figure>


        <div className="card-body p-4">

          <h2 className="card-title text-xl font-semibold text-white">{title}</h2>

          <p className="text-sm text-white mt-2">{description}</p>


          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary bg-[#2A0E61] hover:bg-[#4B1F92] text-white">
              Voir le projet
            </button>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
