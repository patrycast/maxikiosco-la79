import { createGlobalStyle } from "styled-components";

export const theme = {
  bg: "#000",
  fg: "#fff",
  muted: "#b5b5b5",
  line: "#2a2a2a",
  card: "#0e0e0e",
  dashed: "#555",
  bp: "760px",
  orange: "#f47b20",
};

export default createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; scroll-padding-top: 70px; background: ${theme.bg}; }
  body {
    margin: 0;
    background: ${theme.bg};
    color: ${theme.fg};
    font-family: "Helvetica Neue", Arial, sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
  }
  a { color: inherit; }
  @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
`;
