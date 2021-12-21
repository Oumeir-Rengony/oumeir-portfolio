import styled from "styled-components";


const MenuContainer = ({ target, activeMenuItem, children }) => {
  return (
    <StyledWrapper id={target.toLowerCase()} activeMenuItem={activeMenuItem}>
      {children}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  padding: 30px 30px 0;

  @media (min-width: 681px) {
    padding: 30px 30px;
    margin-bottom: 15px;
    background: #fff;
    border-radius: 10px;
  }

  @media (min-width: 1121px) {
    width: 100%;
    height: 95%;
    border-radius: 0px;
    padding: 20px 30px;
    margin-bottom: 0;
    overflow: auto;
    transition: transform 0.7s ease-out, opacity 0.5s ease-out;

    ${(props) =>
      !props.activeMenuItem
        ? `
      position: absolute;
      left:0;
      opacity:0.8;
      transform: translateX(-100%);
      z-index:1;
    `
        : `
        transform: translateX(0%);
    `}
  }

  @media (min-width: 1440px) {
    padding: 30px 30px;
  }
`;

export default MenuContainer;