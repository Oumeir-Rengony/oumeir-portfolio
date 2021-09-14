import { useContext} from "react";
import styled from "styled-components";
import { ScreenContext } from "../../context/screen/screen.provider";
import { getHomeData } from "../../data";
import Typing from "../animation/typing";
import WaveAnimation from "../animation/wave";

const Home = () => {
  const { name, banner, designation } = getHomeData();

  const {homeBannerRef, homeBannerWidth} = useContext(ScreenContext);

  return (
    <StyledWrapper homeBannerWidth={homeBannerWidth}>
      <div className="profile" ref={homeBannerRef}>
        <img id="hero-banner" src={banner} alt="profile" />
        <div className="triangle" />
      </div>
      <div className="user-info">
        <div className="user-name">
          <p className="fname">{name.firstname}</p>
          <p className="lname">{name.lastname}</p>
        </div>
        <div className="designation">
          <Typing designation={designation} />
        </div>
      </div>

      <WaveAnimation />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: #96aeca;

  @media (min-width: 681px) {
    height: 98%;
    position: relative;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  @media (min-width: 1121px) {
    width: 480px;
    border-radius: 6px;
    margin-bottom: 0;
    z-index: 2;
    box-shadow: rgb(0 0 0 / 40%) 2px 2px 3px;
  }

  .profile {
    position: relative;
    width: 100%;
    height: 63%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      @media (min-width: 681px) {
        border-radius: 10px;
      }
      @media (min-width: 1121px) {
        border-radius: 6px;
      }
    }

    .triangle {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0;
      border-left: ${(props) => `${props.homeBannerWidth / 2}px`} solid #9452fe;
      border-right: ${(props) => `${props.homeBannerWidth / 2}px`} solid #9452fe;
      border-top: ${(props) => `${props.homeBannerWidth / 6}px`} solid transparent;
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

    @media (min-width: 681px) {
      border-radius: 0 0 10px 10px;
    }

    @media (min-width: 1121px) {
      border-radius: 0 0 6px 6px;
    }

    .user-name {
      font-weight: 400;
      font-size: 26px;
    }

    .designation {
      padding-top: 16px;
      color: #78cc6d;
      font-size: 18px;
      font-weight: 500;
      height:100px;
      overflow:hidden;

      @media (min-width: 1121px) {
        padding-top: 17px;
      }
    }
  }
`;

export default Home;
