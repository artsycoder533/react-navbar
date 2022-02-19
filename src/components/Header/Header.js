import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hamburger from "../Hamburger/Hamburger";
import { Container, LogoIcon, LogoHolder, ContainerCenter } from "./style";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <ContainerCenter>
        <LogoHolder>
          <LogoIcon />
          <Hamburger open={open} setOpen={setOpen} />
        </LogoHolder>
        <Navbar open={open} />
      </ContainerCenter>
    </Container>
  );
}

export default Header;
