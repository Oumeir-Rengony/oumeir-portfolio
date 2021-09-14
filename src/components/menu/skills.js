import styled from "styled-components";
import { getSkills } from "../../data";
import SectionHeader from "./sectionHeader/sectionHeader";
import MenuContainer from "./container/menuContainer";

const Skills = () => {
  const { title, items } = getSkills();
  return (
    <MenuContainer>
      <StyledWrapper>
        <SectionHeader title={title} alt="logo" />
        <div className="skills">
          {items.map(({ title, image }, index) => (
            <div className="logo-container" key={index}>
              <BackgroundImg src={image} />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </StyledWrapper>
    </MenuContainer>
  );
};

const BackgroundImg = styled.div`
  width: 60px;
  height: 60px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media (min-width: 425px) {
    width: 64px;
    height: 64px;
  }

  @media (min-width: 540px) {
    width: 70px;
    height: 70px;
  }
`;

const StyledWrapper = styled.section`
  .skills {
    padding-top: 30px;
    text-align: center;

    @media (min-width: 564px) {
      text-align: start;
    }

    @media (min-width: 600px) {
      text-align: center;
    }

    @media (min-width: 660px) {
      text-align: start;
    }

    @media (min-width: 1224px) {
      padding: 30px 30px;
    }

    .logo-container {
      display: inline-block;
      margin: 6px 12px;
      text-align: center;

      @media (min-width: 375px) {
        margin: 6px 18px;
      }

      @media (min-width: 425px) {
        margin: 8px 28px;
      }

      @media (min-width: 600px) {
        margin: 8px 40px;
      }

      @media (min-width: 1121px) {
        margin: 12px 24px;
      }

      p {
        font-size: 13px;
        color: #646464;
      }
    }
  }
`;

export default Skills;
