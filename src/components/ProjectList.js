import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
   const projList = projects.map((listObj) => {
    return <ProjectItem key={listObj.id} name={listObj.name} about={listObj.about} technologies={listObj.technologies} />
  })
 
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projList}
        {/* <ProjectItem technologies={projects[0].technologies}/>  */}
      </div>
    </div> 
  );
}

export default ProjectList;
