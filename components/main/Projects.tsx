import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Projets
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 px-4 w-full max-w-screen-xl mx-auto">

        <ProjectCard
          src="/screen_kasa.webp"
          title="Kasa"
          description="Conception du front-end d’une application avec React et React Router."
          link="https://kasanouredinemoussa.vercel.app/"
        />
        <ProjectCard
          src="/screen_booki.webp"
          title="Booki"
          description="Création d'une page d’accueil responsive pour une agence de voyage."
          link="https://nouredinemoussa.github.io/Booki/"
        />
        <ProjectCard
          src="/screen_carducci.webp"
          title="Portofolio de Nina Carducci"
          description="Améliorations des performances et du référencement d’un site avec Lighthouse."
          link="https://portfolio-nina-carducci-nouredinemoussa.vercel.app/"
        />
        <ProjectCard
          src="/screen_724.webp"
          title="724events"
          description="Correction de bugs et validation d’un site one-page avec React Dev Tools."
          link="https://724eventsnouredinemoussa.vercel.app/"
        />
        <ProjectCard
          src="/screen_ohmyfood.webp"
          title="OhMyFood"
          description="Site mobile-first avec Sass et animations CSS."
          link="https://ohmyfoodnouredinemoussa.vercel.app/"
        />
        <ProjectCard
          src="/screen-printit.webp"
          title="PrintIt"
          description="Dynamisation d'un site statique avec JavaScript."
          link="https://printit-nouredinemoussa.vercel.app/"
        />
        <ProjectCard
          src="/screen_argentbank.webp"
          title="ArgentBank"
          description="Développement d'une application bancaire avec React et Redux."
          link="https://github.com/nouredinemoussa/ArgentBank-Frontend"
        />
        <ProjectCard
          src="/screen_sophie.webp"
          title="Portfolio Sophie Bluel"
          description="Développement d’un portfolio dynamique avec JavaScript."
          link="https://github.com/nouredinemoussa/Portfolio-architecte-sophie-bluel"
        />
      </div>
    </div>
  );
};

export default Projects;
