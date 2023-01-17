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
        <FixedWrapper>
          <FixedHeader ref={nameRef}>MATT LEE</FixedHeader>
        </FixedWrapper>
        <Hero />
        <About />
        <Portfolio />
        <Cat headerRef={nameRef} />
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
  width: 100vw;
  & > section {
    scroll-snap-align: start;
  }

  .hide {
    opacity: 0;
  }
`;

const FixedWrapper = styled.div`
  position: fixed;
  display: grid;
  grid-template-rows: 1fr 2fr;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
  padding: 40px;
  box-sizing: border-box;

  h1:first-of-type {
    align-self: flex-end;
  }
  @media ${landscapeTabletSize} {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    h1:first-of-type {
      align-self: center;
      justify-self: center;
    }
  }
`;

const FixedHeader = styled(AppH1)`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  font-size: 96px;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.white};
  opacity: 1;
  transition: opacity 0.35s ease-in-out;
  @media ${landscapeTabletSize} {
    font-size: 128px;
    max-width: 430px;
  }
`;

export default App;
