import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const NavLinks = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0.75rem;
  display: ${({ open }) => open ? "block" : "none"};
`;

export const NavLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: black;
  padding: 1rem 0;
  font-size: 1.2rem;

  &:hover {
      padding-left: 1rem;
      transition: all 0.3s ease-in-out;
  }
`;
