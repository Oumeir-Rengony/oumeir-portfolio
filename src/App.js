import { useContext } from "react";
import styled from "styled-components";

import {
  Home,
  About,
  Resume,
  Projects,
  Skills,
  Contact,
} from "./components/Menu";

import Navbar from "./components/Navbar";

import { NavbarContext } from "./context/navbar/navbar.provider";

function App() {
  const { portfolioDivRef } = useContext(NavbarContext);

  return (
    <StyledWrapper>
      <Navbar />
      <div className="portfolio" ref={portfolioDivRef}>
        <Home />
        <div className="portfolio-section">
          <About />
          <Resume />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.main`
  position: relative;
  width: 100%;
  margin: auto;

  @media (min-width: 681px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .portfolio {
    position: relative;
    z-index: 1;
    scroll-behavior: smooth;

    @media (min-width: 681px) {
      width: 83%;
      height: calc(100vh - 15px);
      margin: 15px 15px 0 15px;
      overflow-x: hidden;
      overflow-y: scroll;
    }

    @media (min-width: 700px) {
      width: 585px;
    }

    @media (min-width: 1121px) {
      width: 80%;
      height: calc(100vh - 40px);
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 20px 15px 20px 15px;
      overflow-y: hidden;
    }

    @media (min-width: 1255px) {
      height: calc(100vh - 60px);
      margin: 30px 15px 30px 15px;
    }

    @media (min-width: 1440px) {
      width: 1230px;
    }

    .portfolio-section {
      height: 100%;
      position: relative;
      top: 100vh;
      background: #fff;
      border-radius: 20px 20px 0 0;
      border-top: 2px solid #96aeca;
      box-shadow: 2px 2px 10px #7977779e;

      @media (min-width: 681px) {
        top: 0;
        border-top: 0;
        box-shadow: unset;
        border-radius: 0;
        background: unset;
      }

      @media (min-width: 1121px) {
        width: calc(100% - 480px);
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
`;

export default App;
