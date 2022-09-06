import styled from "styled-components";

const NavLink = ({ title, url, icon, index, showSection, activeNavLink }) => {

  return (
    <StyledNavLink onClick={() => showSection(title, index)}>
      <a className={`${activeNavLink(title) ? "active" : ''}`} href={url}>
        <span className={`icon ${icon}`} />
        <br />
        <span className="title">
          {title}
        </span>
      </a>
    </StyledNavLink>
  );
};

const StyledNavLink = styled.li`

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

  a {
    display: block;
    text-decoration: none;
    width: 100%;
    height: 62px;
    position: relative;
    text-align: center;
    color: #5e6363;

    &.active {
      color: #78cc6d;
    }

    @media(min-width:992px){
      :hover {
        color: #78cc6d;
      }
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

    .icon {
      font-size: 24px;
    }

    .title {
      font-size: 12px;

      @media (min-width: 681px) {
        font-size: 14px;
      }
    }
  }
`;

export default NavLink;
