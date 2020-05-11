import React from "react";
import Title from "./Title";
import TechFilter from "./TechFilter";
import { withProjectConsumer } from "../context";
import ProjectsList from "../components/ProjectsList";
import Loading from "../components/Loading";

const Projects = ({ context }) => {
  const { loading, sortedProjects, projects } = context;
  console.log(loading);
  return (
    <section id="project-section" className="projects">
      <div className="project-center">
        <Title
          title1="my"
          title2="projects"
          subtitle="Sort projects by technology..."
        />
        <TechFilter projects={projects} />
        {loading ? <Loading /> : <ProjectsList projects={sortedProjects} />}
      </div>
    </section>
  );
};

export default withProjectConsumer(Projects);

