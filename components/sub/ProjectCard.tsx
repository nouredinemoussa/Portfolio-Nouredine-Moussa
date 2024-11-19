import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  if (!src || !title || !description) {
    console.error('Invalid props in ProjectCard:', { src, title, description });
  }

  return (
    <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mt-6 rounded-xl overflow-hidden shadow-lg border border-[#2A0E61]">
      <div className="relative h-56">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
};


export default ProjectCard;
