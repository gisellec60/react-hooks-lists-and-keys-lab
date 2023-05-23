import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const projCards = links.map((linkObj) => {
        return <a href={`#${linkObj}`} key={linkObj}>{linkObj}</a>
  })
  return (
   <nav>
      {projCards}
  </nav>
  )
}

export default NavBar;
