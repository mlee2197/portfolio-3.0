import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { AppH1, BackToTop } from "./components";
import { ContactIcons } from "./components/ContactIcons";
import { About, Hero, Portfolio } from "./segments";
import { landscapeTabletSize } from "./utils/breakpoints";
import { baseTheme } from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <Wrapper>
        <FixedHeader>MATT LEE</FixedHeader>
        <Hero />
        <About />
        {/* <ContactIcons /> */}
        <BackToTop />
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
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
  @media ${landscapeTabletSize} {
    font-size: 128px;
  }
`;

export default App;
