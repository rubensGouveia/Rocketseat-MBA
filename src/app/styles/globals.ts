"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #0b1120;
    color: #fff;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
