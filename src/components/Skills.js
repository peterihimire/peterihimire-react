import React from "react";
import Title from "./Title";
import Zoom from "react-reveal/Zoom";
import { useContext } from "react";
import { ProjectContext } from "../context";

const Skill = () => {
  const context = useContext(ProjectContext);
  const { skills } = context;
  return (
    <section id="skill-section" className="skills">
      <div className="skills-center">
        <Title
          title1="my"
          title2="skills"
          subtitle="Here are the skills I possess..."
        />
        <div className="skillz">
          {skills.map((item, index) => {
            return (
              // console.log(item)
              <Zoom key={index}>
                <article className="skill" key={index}>
                  <div className={item.iconColor}>{item.icon}</div>
                  <h4>{item.title}</h4>
                  <div className={item.lineColor} />
                </article>
              </Zoom>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skill;
