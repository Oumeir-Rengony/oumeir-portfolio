import { useRef} from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getHomeSection } from "../../GraphQl";
import Typing from "../animation/typing";
import WaveAnimation from "../animation/wave";
import Carousel from "../carousel/carousel";

const Home = () => {

  const { data, isLoading } = useQuery("home", getHomeSection);
  
  const homeBannerRef = useRef(null);
  
  if(isLoading){
    return <></>;
  }
  
  const {title, firstname, lastname, designation, profilePicture, profile} = data;

  return (
    <StyledWrapper id={title.toLowerCase()} homeBannerWidth={!homeBannerRef.current ? 0 : homeBannerRef.current.clientWidth}>
      <div className="profile" ref={homeBannerRef}>
        <Carousel images={profile}/>
      </div>
      <div className="user-info">
        <div className="user-name">
          <p className="fname">{firstname}</p>
          <p className="lname">{lastname}</p>
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

    .triangle {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0;
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
