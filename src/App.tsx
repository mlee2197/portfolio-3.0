import { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { baseTheme } from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <div className="App">

      </div>
    </ThemeProvider>
  );
}

export default App;
