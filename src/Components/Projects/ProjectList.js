import React from 'react';
import Project from  './Project';


const ProjectList = ({projects}) =>{
    const projectArray = projects.map((element, i)=>{
      return (
      <Project 
        key={i} 
        id={projects[i].id} 
        name={projects[i].name} 
        picture={projects[i].picture} 
        description={projects[i].description}
      />)
    })
    return(
      <div>
        <div className="fn ph3 ph4-m ph5-l">
        <h1 className="mb3 mt0 2h-title tc light-gray f1">Projects</h1>
          {projectArray}
        </div>
      </div>
    )
}

export default ProjectList;