import React, { Suspense, useRef } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { AppH1 } from "./components";
import { ContactIcons } from "./components/ContactIcons";
import { Hero } from "./segments";
import { landscapeTabletSize } from "./utils/breakpoints";
import { baseTheme } from "./utils/theme";
import { ProgressNav } from "./components";

const Portfolio = React.lazy(() => import("./segments/Portfolio"));
const Cat = React.lazy(() => import("./segments/Cat"));
const About = React.lazy(() => import("./segments/About"));
const BackToTop = React.lazy(() => import("./components/BackToTopButton"));

function App() {
  const nameRef = useRef(null);
  const wrapperRef = useRef(null);

  return (
    <ThemeProvider theme={baseTheme}>
      <Wrapper ref={wrapperRef}>
        <FixedWrapper>
          <FixedHeader ref={nameRef}>MATT LEE</FixedHeader>
        </FixedWrapper>
        <Hero />
        <Suspense fallback={<div>...loading</div>}>
          <About />
          <Portfolio />
          <Cat headerRef={nameRef} />
          <BackToTop wrapperRef={wrapperRef} />
        </Suspense>
        <ContactIcons />
        <ProgressNav wrapperRef={wrapperRef} />
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

const HeaderAnimation = keyframes`
  0% {
    left: 200%;
    letter-spacing: 300px;
  }
  80% {
    left: 0%;
  }
  100% {
    left: 0%;
    letter-spacing: 0px;

  }
`;

const FixedHeader = styled(AppH1)`
  position: relative;
  max-width: 450px;
  /* left: 200%; */
  letter-spacing: 20px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-transform: uppercase;

  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.white};
  opacity: 1;
  transition: opacity 0.35s ease-in-out;

  animation: ${HeaderAnimation} 2s ease-in-out forwards;

  @media ${landscapeTabletSize} {
    font-size: 128px;
    max-width: 430px;
  }
`;

export default App;
