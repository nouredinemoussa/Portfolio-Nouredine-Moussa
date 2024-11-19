import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const projectData = [
    {
      src: "/screen_kasa.webp",
      title: "Kasa",
      description: "Description de Kasa",
    },
    // Ajoutez d'autres projets ici...
  ];

  console.log('Project Data:', projectData);
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Projets
      </h1>
      
      {/* Grille responsive avec flex-wrap et ajustement dynamique de la largeur */}
      <div className="flex flex-wrap justify-center gap-10 px-4 w-full max-w-screen-xl mx-auto">
        {/* Première carte */}
        <ProjectCard
          src="/screen_kasa.webp"
          title="Kasa"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        {/* Deuxième carte */}
        <ProjectCard
          src="/screen_booki.webp"
          title="Booki"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        {/* Troisième carte */}
        <ProjectCard
          src="/screen_carducci.webp"
          title="Portofolio de photographe"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        {/* Quatrième carte */}
        <ProjectCard
          src="/screen_724.webp"
          title="724events"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        {/* Cinquième carte */}
        <ProjectCard
          src="/screen_ohmyfood.webp"
          title="OhMyFood"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        {/* Sixième carte */}
        <ProjectCard
          src="/screen-printit.webp"
          title="PrintIt"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
};

export default Projects;
