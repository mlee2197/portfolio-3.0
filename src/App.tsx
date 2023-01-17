import { useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { AppH1, BackToTop } from "./components";
import { ContactIcons } from "./components/ContactIcons";
import { About, Cat, Hero, Portfolio } from "./segments";
import { landscapeTabletSize } from "./utils/breakpoints";
import { baseTheme } from "./utils/theme";

function App() {
  const nameRef = useRef(null);
  return (
    <ThemeProvider theme={baseTheme}>
      <Wrapper>
        <FixedHeader ref={nameRef}>MATT LEE</FixedHeader>
        <Hero />
        <About />
        <Portfolio />
        <Cat headerRef={nameRef}/>
        <ContactIcons />
        <BackToTop />
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  max-height: 100vh;
  & > section {
    scroll-snap-align: start;
  }

  .hide {
    opacity: 0;
  }
`;

const FixedHeader = styled(AppH1)`
  position: fixed;
  top: 15vh; //Section component (Containers.ts) padding-top
  left: 40px;
  margin: 0;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  font-size: 96px;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.white};
  opacity: 1;
  transition: opacity 0.35s ease-in-out;
  @media ${landscapeTabletSize} {
    top: 50vh;
    left: 200px;
    translate: 0 -50%;
    font-size: 128px;
    max-width: 430px;
  }
`;

export default App;
