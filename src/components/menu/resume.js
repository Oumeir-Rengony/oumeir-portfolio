import styled from "styled-components";
import { getResume } from "../../data";
import SectionHeader from "./sectionHeader/sectionHeader";
import MenuContainer from "./container/menuContainer";

const Resume = () => {
  const { title, items } = getResume();

  return (
    <MenuContainer>
      <SectionHeader title={title} />
      <StyledWrapper>
        <div className="resume-container">
          {items.map(({ icon, title, timeline }, index) => (
            <div className="resume" key={index}>
              <div className="resume-header">
                <i className={icon} aria-hidden="true"></i>
                <h2 className="header-title">{title}</h2>
              </div>
              <div className="timeline">
                {timeline.map(({ name, year, position }, index) => (
                  <article className="timeline__item" key={index}>
                    <h5 className="timeline__title">{name}</h5>
                    <span className="timeline__period">{year}</span>
                    <p className="timeline__description">{position}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </StyledWrapper>
    </MenuContainer>
  );
};

const StyledWrapper = styled.section`
  .resume-container {
    @media (min-width: 482px) {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-evenly;
    }

    .resume {
      padding-top: 30px;

      @media (min-width: 482px) {
        display: inline-block;
      }

      .resume-header {
        display: flex;

        .fa {
          color: #78cc6d;
        }

        .header-title {
          font-size: 20px;
          font-weight: 500;
          margin-left: 12px;
          color: #445264b0;
        }
      }

      .timeline {
        padding-top: 30px;
        padding-left: 30px;

        .timeline__item {
          border-left: 1px solid rgba(48, 76, 253, 0.5) !important;
          padding-bottom: 9px;
          padding-left: 22px;
          position: relative;

          &::before {
            content: "";
            background-color: #304cfd;
            box-shadow: 0 0 0 0.1875rem rgba(48, 76, 253, 0.25);
            border-radius: 50%;
            position: absolute;
            top: 0;
            left: -5.5px;
            height: 10px;
            width: 10px;
          }

          &:last-child {
            border: 0;
          }

          .timeline__title {
            position: relative;
            top: -2px;
            font-size: 14px;
          }

          .timeline__period {
            color: #8697a8;
            font-size: 14px;
          }

          .timeline__description {
            font-size: 14px;
          }
        }
      }
    }
  }
`;

export default Resume;
