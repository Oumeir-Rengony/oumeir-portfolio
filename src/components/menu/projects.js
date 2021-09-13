import styled from "styled-components";
import { getProjects } from "../../data";
import SectionHeader from "./sectionHeader/sectionHeader";
import MenuContainer from "./container/menuContainer";

const Project = () => {
  const {title, items} = getProjects();

  return (
    <MenuContainer >
      <StyledWrapper>
        <SectionHeader title={title} />
        <div className="projects">
          {items.map(({ title, image, paragraph }, index) => (
            <div className="project-item" key={index}>
              <div className="logo-container">
                <img src={process.env.PUBLIC_URL + image} alt="website logo" />
              </div>
              <div className="text">
                <strong className="title">{title}</strong>
                <p>{paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </StyledWrapper>
    </MenuContainer>
  );
};

const StyledWrapper = styled.section`

  .projects {
    padding-top: 30px;

    .project-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-bottom: 30px;

      :nth-last-child(1){
        padding-bottom: 0px;
      }

      .logo-container {
        width: 160px;
        height: 160px;

        &:hover {
          animation-name: rotate;
          animation-duration: 1s;
          animation-iteration-count: 1;
          animation-timing-function: ease-in-out;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: rgb(222 222 222 / 50%);
          border-radius: 50%;
        }
      }

      .text {
        padding-top: 30px;
        text-align: center;

        p {
          color: #646464;
        }
      }
    }
  }
`;

export default Project;
