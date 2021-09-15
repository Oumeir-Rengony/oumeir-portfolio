import { useContext } from "react";
import styled from "styled-components";

import { NavbarContext } from "../../context/navbar/navbar.provider";
import { getUpdatedActiveMenuItemState } from "../../context/navbar/navbar.utils";

const NavLink = ({ title, url, icon, index }) => {
  const {
    activeMenuItem,
    portfolioDivRef,
    setActiveMenuItem,
    setNavbarActive,
  } = useContext(NavbarContext);


  //display active menu item
  const showSection = (e) => {
    setNavbarActive((prev) => !prev);
    setActiveMenuItem((prev) => getUpdatedActiveMenuItemState(prev, title));

    //if home is clicked
    if (index === 0) {
      window.scrollTo(0, 0);
      portfolioDivRef.current.scrollTo(0, 0);
    }
    
    return;
  };

  return (
    <StyledNavLink href={url} onClick={showSection}>
      <li>
        <span className={`icon ${icon} ${activeMenuItem[title] && "active"}`} />
        <br />
        <span className={`title ${activeMenuItem[title] && "active"}`}>
          {title}
        </span>
      </li>
    </StyledNavLink>
  );
};

const StyledNavLink = styled.a`
  text-decoration: none;

  &:first-child {
    @media (min-width: 1121px) {
      display: none;
    }
  }

  &:last-child {
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: radial-gradient(
        ellipse at right,
        #ddd 0%,
        rgba(255, 255, 255, 0) 70%
      );

      @media (min-width: 681px) {
        display: none;
      }
    }
  }

  li {
    width: 100%;
    height: 62px;
    position: relative;
    text-align: center;
    color: #5e6363;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: auto;
      width: 100%;
      height: 1px;
      background: radial-gradient(
        ellipse at right,
        #ddd 0%,
        rgba(255, 255, 255, 0) 70%
      );
    }

    &:hover {
      color: #78cc6d;
    }

    .icon {
      font-size: 24px;
    }

    .title {
      font-size: 12px;

      @media (min-width: 681px) {
        font-size: 14px;
      }
    }

    .active {
      color: #78cc6d;
    }
  }
`;

export default NavLink;
