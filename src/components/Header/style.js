import styled from "styled-components";
import { FaPaintBrush } from "react-icons/fa";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: lightblue;
  z-index: 2;

  @media screen and (min-width: 992px) {
    flex-wrap: nowrap;
    padding: 0 1rem;
  }
`;

export const ContainerCenter = styled.div`
  display: flex;
  max-width: 1400px;
  width: 90vw;
  margin: 0 auto;
  flex-direction: column;
`;

export const LogoHolder = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;

  @media screen and (min-width: 992px){
    padding: 0;
  }
`;

export const LogoIcon = styled(FaPaintBrush)`
  font-size: 2rem;
`;
