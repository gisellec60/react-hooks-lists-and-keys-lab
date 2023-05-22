import React from "react";
//import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log("this is projects", projects);
  const projList = projects.map((listObj) => {
    return <ProjectList key={listObj.id} name={listObj.name} about={listObj.about} tech={listObj.technologies} />
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projList}
        </div>
    </div>
  );
}

export default ProjectList;
