import styled from "styled-components";
import { getAboutData } from "../data";

const About = () => {
  const { title, intro, bio } = getAboutData();

  return (
    <StyledWrapper>
      <h3 className="title">{title}</h3>
      <p className="small-bio">
        <strong>{intro.title}</strong>
        <br />
        <span>{intro.paragraph}</span>
      </p>

      <div className="info-list">
        <ul>
          {bio.map(({ attribute, value }) => (
            <li key={attribute}>
              <span className="attribute">{attribute}:</span>
              <span className="me">{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  padding: 30px 30px 0;

  .title {
    position: relative;
    padding-bottom: 30px;
    text-transform: capitalize;

    &:after {
      content: "";
      position: absolute;
      left: -30px;
      right: 0;
      bottom: 0;
      height: 1px;
      background: radial-gradient(
        ellipse at left,
        #ddd 0%,
        rgba(255, 255, 255, 0) 70%
      );
    }
  }

  .small-bio {
    padding-top: 30px;
    color: #646464;
  }

  .info-list {
    max-width: 500px;
    margin: 0 auto;
    padding-top: 30px;

    ul {
      li {
        position: relative;
        display: flex;
        justify-content: space-between;
        padding: 11px 0;

        &:after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 1px;
          background: radial-gradient(
            ellipse at center,
            #ddd 0%,
            rgba(255, 255, 255, 0) 70%
          );
        }

        .attribute {
          background: #78cc6d;
          font-size: 14px;
          font-weight: 400;
          color: #fff;
          padding: 1px 6px;
          border-radius: 2px;
        }

        .me {
          color: #646464;
          font-size: 14px;
        }
      }
    }
  }
`;

export default About;
