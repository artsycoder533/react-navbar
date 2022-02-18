import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Hamburger from "../Hamburger/Hamburger";
import { Container, LogoIcon, LogoHolder } from "./style";

function Header() {
  const [open, setOpen] = useState(false);
    const linksContainer = useRef(null);
    
    useEffect(() => {
    
    }, [open]);
  return (
    <Container>
      <LogoHolder>
        <LogoIcon />
        <Hamburger open={open} setOpen={setOpen} />
      </LogoHolder>
          <Navbar ref={linksContainer} open={open} />
    </Container>
  );
}

export default Header;
