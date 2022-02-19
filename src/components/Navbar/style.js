import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Container = styled.div`
  height: ${({ open }) => (open ? "100vh" : "0")};
  overflow: hidden;
  transition: all 0.3s linear;
  width: 100%;

  @media screen and (min-width: 992px){
    height: 100%;
  }
`;

export const NavLinks = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0.75rem;
  transition: all 0.3s linear;

  @media screen and (min-width: 992px){
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
    padding: 0;
  }
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
