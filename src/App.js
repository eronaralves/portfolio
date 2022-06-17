import React from "react";
import { createGlobalStyle } from "styled-components";

// Pages
import Home from "./pages/Home";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  html, body, #root {
    width: 100%;
    height: 100vh;
    background-color: #020409;
    color: #fff;
    font-family: "Epilogue";
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}
