import styled from "styled-components";
import { FaPaintBrush } from "react-icons/fa";

export const Container = styled.header`
/* height: 60px; */
display: flex;
justify-content: center;
align-items: center;
/* padding: 1rem; */
flex-wrap: wrap;
`;

export const LogoHolder = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
`;

export const LogoIcon = styled(FaPaintBrush)`
  font-size: 2rem;
`;




