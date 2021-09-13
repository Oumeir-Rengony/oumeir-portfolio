import styled from "styled-components";
import About from "./components/menu/about";
import Home from "./components/menu/home";
import Projects from "./components/menu/projects";
import Resume from "./components/menu/resume";
import Skills from "./components/menu/skills";

function App() {
  return (
    <StyledWrapper>
      <div className="portfolio">
        <Home />
        <div className="portfolio-section">
          <About />
          <Resume />
          <Skills />
          <Projects />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.main`
  position: relative;
  width: 100%;
  margin: auto;

  .portfolio {
    position: relative;
    scroll-behavior: smooth;

    .portfolio-section {
      height: 100%;
      position: relative;
      top: 100vh;
      background: #fff;
      border-radius: 20px 20px 0 0;
      border-top: 2px solid #96aeca;
      box-shadow: 2px 2px 10px #7977779e;
    }
  }
`;

export default App;
