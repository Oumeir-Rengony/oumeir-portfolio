import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getHomeData } from "../data";


const Home = () => {
  const { name, banner, designation } = getHomeData();

  const [profileWidth, setProfileWidth] = useState(0);

  const profileRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setProfileWidth(profileRef.current.clientWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StyledWrapper profileWidth={profileWidth}>
      <div className="profile" ref={profileRef}>
        <img src={banner} alt="profile" />
        <div className="triangle" />
      </div>
      <div className="user-info">
        <div className="user-name">
          <p className="fname">{name.firstname}</p>
          <p className="lname">{name.lastname}</p>
        </div>
        <div className="designation">
          <span className="designation-text">{designation}</span>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: #96aeca;

  .profile {
    position: relative;
    width: 100%;
    height: 63%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .triangle {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0;
      border-left: ${(props) => `${props.profileWidth / 2}px`} solid #9452fe;
      border-right: ${(props) => `${props.profileWidth / 2}px`} solid #9452fe;
      border-top: ${(props) => `${props.profileWidth / 6}px`} solid transparent;
      border-bottom: 0;
    }
  }

  .user-info {
    position: relative;
    height: 37%;
    text-align: center;
    padding-top: 25px;
    overflow:hidden;
    background: linear-gradient(
      rgba(147, 82, 254, 1) 0%,
      rgba(182, 41, 254, 1) 50%,
      rgba(197, 24, 254, 1) 100%
    );
    color: #fff;


    .user-name {
      font-weight: 400;
      font-size: 26px;
    }

    .designation {
      padding-top: 25px;
      color: #78cc6d;
      font-size: 18px;
      font-weight: 500;
    }
  }
`;

export default Home;
