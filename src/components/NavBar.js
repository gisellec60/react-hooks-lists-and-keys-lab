import React from "react";

function NavBar() {
  const links = [{id:1, name:"home"}, {id:2, name:"about"}, {id:3, name:"projects"}];

  const projCards = links.map((linkObj) => {
    return <a href="#home" key={linkObj.id}>{linkObj.name}</a>
  })
  return (
   <nav>
      {projCards}
  </nav>
  )
}

export default NavBar;
