import styled from "styled-components";
import SectionHeader from "./sectionHeader/sectionHeader";
import MenuContainer from "./container/menuContainer";
import { getAboutSection } from "../../GraphQl";
import { useQuery } from "react-query";

const About = () => {
  const { data, isLoading } = useQuery("about", getAboutSection);

  const calculateAge = (dob) => {
    var year = Number(dob.substr(0, 4));
    var month = Number(dob.substr(4, 2)) - 1;
    var day = Number(dob.substr(6, 2));
    var today = new Date();
    var age = today.getFullYear() - year;
    if (
      today.getMonth() < month ||
      (today.getMonth() === month && today.getDate() < day)
    ) {
      age--;
    }
    return age;
  };

  if (isLoading) {
    return <></>;
  }

  const { title, introHeader, introText, bios } = data;

  return (
    <MenuContainer target={title}>
      <StyledWrapper>
        <SectionHeader title={title} />
        <p className="small-bio">
          <strong>{introHeader}</strong>
          <br />
          <span>{introText}</span>
        </p>

        <div className="info-list">
          <ul>
            {bios.map(({ attribute, value }) => (
              <li key={attribute}>
                <span className="attribute">{attribute}:</span>
                <span className="me">
                  {
                    attribute.toLowerCase() === "age"
                      ? calculateAge(value)
                      : value
                  }
                </span>
              </li>
            ))}
          </ul>
        </div>
      </StyledWrapper>
    </MenuContainer>
  );
};

const StyledWrapper = styled.section`
  .small-bio {
    padding-top: 30px;
    color: #646464;

    @media (min-width: 1373px) {
      padding: 30px 18px 0;
    }
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