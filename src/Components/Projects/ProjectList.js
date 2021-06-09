import React from "react";
import Project from "./Project";

const ProjectList = ({ projects }) => {
  const projectArray = projects.map((element, i) => {
    return (
      <Project
        key={i}
        id={projects[i].id}
        name={projects[i].name}
        description={projects[i].description}
      />
    );
  });
  return (
    <div className="fn ph3 ph4-m ph5-l mt5 project">
      <div className=" mt5 tc f1">Projects</div>
      {projectArray}
    </div>
  );
};

export default ProjectList;
