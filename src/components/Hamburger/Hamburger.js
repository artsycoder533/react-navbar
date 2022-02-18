import React from 'react';
import { HamburgerButton, TopLine, MiddleLine, BottomLine } from './style';

function Hamburger({open, setOpen}) {
    
  return (
    <HamburgerButton onClick={() => setOpen(!open)}>
      <TopLine open={open} />
      <MiddleLine open={open} />
      <BottomLine open={open} />
    </HamburgerButton>
  );
}

export default Hamburger