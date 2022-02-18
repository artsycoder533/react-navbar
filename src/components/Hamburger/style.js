import styled from "styled-components";

export const HamburgerButton = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  background: none;
  width: 30px;
  height: 30px;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export const Line = styled.span`
  width: 30px;
  height: 3px;
  background-color: black;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s linear;
`;

export const TopLine = styled(Line)`
  content: "";
  position: absolute;
  transform: ${({ open }) => (open ? "rotate(-45deg)" : "translateY(-10px)")};
`;

export const MiddleLine = styled(Line)`
  opacity: ${({ open }) => (open ? "0" : "1")};
  background-color: red;
`;

export const BottomLine = styled(Line)`
  content: "";
  position: absolute;
  transform: ${({ open }) => (open ? "rotate(45deg)" : "translateY(10px)")};
`;

