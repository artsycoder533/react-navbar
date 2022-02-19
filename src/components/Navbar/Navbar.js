import React from "react";
import { NavLinks, NavLink, Container } from "./style";
import { links } from "./linkData";


function Navbar({ open }) {

  return (
    <Container open={open} >
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
    </Container>
  );
}

export default Navbar;
