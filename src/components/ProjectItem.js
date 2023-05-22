 import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log("before .map", technologies)
  const tech = technologies.map ((techItem) => {
      console.log("this is tech after .map: ",techItem)
      return <span>{techItem}</span>
  }) 

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {tech}
        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
// function ProjectItem({ name, about, technologies }) {
//   //   return (
//   //     <div className="project-item">
//   //       <h3>{name}</h3>
//   //       <p>{about}</p>
//   //       <div className="technologies">
//   //         {/* render a <span> for each technology in the technologies array */}
//   //       </div>
//   //     </div>
//   //   );
//   // }