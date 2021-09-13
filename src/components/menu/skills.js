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
`;

const StyledWrapper = styled.section`
  .skills {
    padding-top: 30px;
    text-align: center;

    .logo-container {
      display: inline-block;
      margin: 6px 12px;
      text-align: center;

      p {
        font-size: 13px;
        color: #646464;
      }
    }
  }
`;

export default Skills;
