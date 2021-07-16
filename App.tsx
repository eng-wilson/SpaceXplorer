import React from "react";
import { ThemeProvider } from "styled-components";

import LaunchOverview from "./src/screens/LaunchOverview";

import theme from "./src/global/styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LaunchOverview />
    </ThemeProvider>
  );
}
