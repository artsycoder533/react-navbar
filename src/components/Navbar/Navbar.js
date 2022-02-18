import React, { useState } from "react";
import { NavLinks, NavLink } from "./style";
import { links } from "./linkData";


function Navbar({open}) {
  
  return (
    <NavLinks open={open}>
        {links.map((link) => {
          const { url, text } = link;
          return (
            <li key={text}>
              <NavLink to={url}>{text}</NavLink>
            </li>
          );
        })}
      </NavLinks>
  );
}

export default Navbar;
