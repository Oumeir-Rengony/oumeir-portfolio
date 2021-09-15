import styled from "styled-components";

const SectionHeader = ({ title }) => <Header>{title}</Header>;

const Header = styled.h3`
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
`;

export default SectionHeader;
