import {
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />


      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
  {Skill_data.slice(0, 6).map((image, index) => (
    <SkillDataProvider
      key={index}
      src={image.Image}
      width={image.width}
      height={image.height}
      index={index}
      alt={image.alt}
    />
  ))}
</div>

<div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
  {Skill_data.slice(6, Skill_data.length).map((image, index) => (
    <SkillDataProvider
      key={index + 6}
      src={image.Image}
      width={image.width}
      height={image.height}
      index={index + 6}
      alt={image.alt}
    />
  ))}
</div>


      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover"></div>
      </div>
    </section>
  );
};

export default Skills;
