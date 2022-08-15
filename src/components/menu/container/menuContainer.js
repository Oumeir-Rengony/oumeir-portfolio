import { useContext } from "react";
import styled from "styled-components";
import { NavbarContext } from "../../../context/navbar/navbar.provider";


const MenuContainer = ({ target, children }) => {

  const { activeMenuItem } = useContext(NavbarContext);

  const classes = activeMenuItem[target.toLowerCase()] ? "show" : "hide";

  return (
    <StyledWrapper id={target.toLowerCase()} className={classes}>
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

    &.show {
      transform: translateX(0%); 
    }

    &.hide {
      position: absolute;
      left:0;
      opacity:0.8;
      transform: translateX(-100%);
      z-index:1;
    }

  }

  @media (min-width: 1440px) {
    padding: 30px 30px;
  }
`;

export default MenuContainer;