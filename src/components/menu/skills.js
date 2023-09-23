import styled from "styled-components";
import SectionHeader from "./sectionHeader/sectionHeader";
import MenuContainer from "./container/menuContainer";
import { getSkillSection } from "../../GraphQl";
import { useQuery } from "react-query";

const Skills = () => {
  const { data, isLoading } = useQuery("skill", getSkillSection);

  if (isLoading) {
    return <></>;
  }

  const { title, skillItems } = data;

  return (
    <MenuContainer target={title}>
      <StyledWrapper>
        <SectionHeader title={title} alt="logo" />
        <div className="skills">
          {skillItems.map(({ title, image }, index) => (
            <div className="logo-container" key={index}>
              <BackgroundImg src={image.url} />
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
  margin: 0 auto;

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
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr)); 
    gap: 20px 10px;
    padding-top: 30px;

    @media(min-width: 1280px){
      gap: 20px 0px;
    }

    .logo-container {
      margin: 0 auto;
      text-align: center;
      font-size: 14px;
    }
  }

`;

export default Skills;
