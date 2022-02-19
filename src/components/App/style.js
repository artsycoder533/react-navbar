import styled, { createGlobalStyle } from "styled-components";

export const UniversalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
`;