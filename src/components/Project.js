import React from "react";
import { FaChrome, FaGithub } from "react-icons/fa";

const Project = ({ project }) => {
  const { image, title, detail, technologies, online, github } = project;
  console.log(project);

  return (
    <article className="project-card">
      <img src={image} alt="project pix" className="project-image" />
      <div className="project-body">
        <div className="project-text">
          <h3>{title}</h3>
          <p>{detail}</p>
          <h5>technologies:</h5>
          <ul className="project-techs">
            {technologies.map(tech => {
              return <li key={tech}>{tech}</li>;
            })}
          </ul>
        </div>
        <div className="project-btns">
          <a
            href={online}
            target="_blank"
            rel="noopener noreferrer"
            className="chrome-btn"
          >
            <FaChrome /> project
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            <FaGithub /> github
          </a>
        </div>
      </div>
    </article>
  );
};
export default Project;
