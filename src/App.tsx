import React, { Suspense, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { ScrollSnapWrapper } from "./components";
import { ContactIcons } from "./components/ContactIcons";
import { Hero } from "./segments";
import { baseTheme } from "./utils/theme";
import { ProgressNav } from "./components";
import TiledBackground from "./components/TiledBackground";

const Portfolio = React.lazy(() => import("./segments/Portfolio"));
const Cat = React.lazy(() => import("./segments/Cat"));
const About = React.lazy(() => import("./segments/About"));
const BackToTop = React.lazy(() => import("./components/BackToTopButton"));

function App() {
  const wrapperRef = useRef(null);

  return (
    <ThemeProvider theme={baseTheme}>
      <ScrollSnapWrapper id="wrapper" ref={wrapperRef}>
        <TiledBackground />
        <Hero />
        <Suspense fallback={<div>...loading</div>}>
          <About />
          <Portfolio />
          <Cat />
          <BackToTop wrapperRef={wrapperRef} />
        </Suspense>
        <ContactIcons />
        <ProgressNav wrapperRef={wrapperRef} />
      </ScrollSnapWrapper>
    </ThemeProvider>
  );
}

export default App;
