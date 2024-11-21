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
    console.error('Invalid props in ProjectCard:', { src, title, description, link });
  }

  return (
    // Lien enveloppant la carte
    <a href={link} target="_blank" rel="noopener noreferrer" className="w-96">
      <div className="card card-compact bg-base-100 shadow-xl rounded-xl transform transition-all duration-300 hover:scale-105 border border-[#2A0E61]">
        {/* Section image */}
        <figure className="relative w-full h-56">
          <Image
            src={src}
            alt={title}
            layout="fill"
            objectFit="contain"
            className="rounded-t-xl" // Cette classe arrondit le haut de l'image
          />
        </figure>

        {/* Section corps de la carte */}
        <div className="card-body p-4">
          {/* Titre en blanc */}
          <h2 className="card-title text-xl font-semibold text-white">{title}</h2>
          {/* Description en blanc */}
          <p className="text-sm text-white mt-2">{description}</p>

          {/* Actions de la carte (ici un bouton pour le projet) */}
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
