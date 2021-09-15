import { useContext } from "react";
import styled from "styled-components";

import SectionHeader from "../../lib/Header/Header";
import MenuContainer from "../../lib/Container/Container";

import { NavbarContext } from "../../context/navbar/navbar.provider";
import { getProjects } from "../../data";

const Project = () => {
  const { title, items } = getProjects();

  const {activeMenuItem} = useContext(NavbarContext);

  const openWebsite = (website) => {
    window.open(website, "_blank");
  };
  
  return (
    <MenuContainer target={title} activeMenuItem={activeMenuItem.projects}>
      <StyledWrapper>
        <SectionHeader title={title} />
        <div className="projects">
          {items.map(({ title, website, image, paragraph }, index) => (
            <div
              className="project-item"
              key={index}
              onClick={() => openWebsite(website)}
            >
              <div className="logo-container">
                <img src={process.env.PUBLIC_URL + image} alt="website logo" />
              </div>

              <div className="text">
                <strong className="title">{title}</strong>
                <span>
                  <i
                    class="ext-link-icon fa fa-external-link"
                    aria-hidden="true"
                  ></i>
                </span>
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

    @media (min-width: 500px) {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
    }

    .project-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-bottom: 30px;
      cursor: pointer;

      @media (min-width: 500px) {
        max-width: 47%;
      }

      .logo-container {
        position: relative;
        width: 160px;
        height: 160px;

        img {
          width: 100%;
          height: 100%;
          background: rgb(222 222 222 / 50%);
          border-radius: 50%;
          transition: box-shadow 0.5s ease-out;
        }

        &:hover {
          img {
            box-shadow: rgb(136 214 219 / 40%) 5px 5px,
              rgb(136 214 219 / 30%) 10px 10px, rgb(136 214 219 / 20%) 15px 15px,
              rgb(136 214 219 / 10%) 20px 20px;
          }
        }
      }

      .text {
        padding-top: 30px;
        text-align: center;

        .ext-link-icon {
          margin-left: 8px;
          font-size: 14px;
        }

        p {
          color: #646464;
        }

        &:hover {
          .title {
            color: darkblue;
            transition: color 0.2s ease-in;

          }
          .ext-link-icon {
            color: darkblue;
            transition: color 0.2s ease-in;

          }
        }
      }
    }
  }
`;

export default Project;
