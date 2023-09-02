import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";

export const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image}></img>
      <p>
        <b>Skills</b>
        <span>JavaScript, Managing a Raspberry Pi, Git</span>
        <b>Description</b>
      </p>
    </div>
  );
};
