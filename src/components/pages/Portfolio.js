import React from "react";
import Project from "../Project";
import projects from "../../projects.json";
import { Container } from 'react-bootstrap';
import "../../style.css";

function Portfolio() {
  return (
    <Container>
    <div>
      <h1>Portfolio</h1>
      <h3>Welcome to my portfolio!</h3>
      {projects.map(project => (
          <Project
            id={project.id}
            key={project.id}
            name={project.name}
            summary={project.summary}
            link={project.link}
          />
        ))}
    </div>
    </Container>
  );
}

export default Portfolio;
