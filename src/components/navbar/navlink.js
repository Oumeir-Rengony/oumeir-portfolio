import { useCallback } from "react";
import styled from "styled-components";

const NavLink = ({
  title,
  url,
  icon,
  index,
  setNavbarActive,
  activeMenuItem,
  setActiveMenuItem,
}) => {
  const getActiveTabState = useCallback(
    (obj) => {
      let state = {};
      for (const key in obj) {
        if (key === title) state = { ...state, [key]: true };
        else state = { ...state, [key]: false };
      }

      return state;
    },
    [title]
  );

  const showSection = (e) => {
    setNavbarActive((prev) => !prev);
    setActiveMenuItem((prev) => getActiveTabState(prev));

    if (index === 0) {
      window.scrollTo(0, 0);
    }

    return;
  };

  return (
    <StyledNavLink href={url} onClick={showSection}>
      <li>
        <span className={`icon ${icon} ${activeMenuItem[title] && "active"}`}></span>
      </li>
    </StyledNavLink>
  );
};

const StyledNavLink = styled.a`
  &:first-child {
    @media (min-width: 1121px) {
      display: none;
    }
  }

  li {
    width: 100%;
    height: 62px;
    position: relative;
    text-align: center;
    padding: 13px 3px;

    .icon {
      font-size: 24px;
      color: #5e6363;
    }

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

    .active {
      color: #78cc6d;
    }
  }
`;

export default NavLink;
