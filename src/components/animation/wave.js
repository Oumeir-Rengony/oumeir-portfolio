import styled from "styled-components";

const WaveAnimation = ({ reverse }) => {
  return (
    <Ocean reverse={reverse}>
      <div className="wave one"></div>
      <div className="wave two"></div>
      <div className="wave three"></div>
    </Ocean>
  );
};

const Ocean = styled.div`
  position: absolute;
  height: 100px;
  width: 100%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;

  @media (max-height: 645px) {
    display:none;
  }

  @media (min-width: 681px) {
    border-radius: 10px;
  }

  @media (min-width: 1121px) {
    display: none;
  }

  .wave {
    position: absolute;
    top: 75%;
    left: -117%;
    width: 310.5vw;
    height: 315vw;
    background-color: #fff;
    opacity: 0.6;
    border-radius: 40%;

    @media (min-width: 600px) {
      width: 300vw;
      height: 325vw;
    }

    @media (min-width: 681px) {
      left: -125%;
      width: 290vw;
      height: 325vw;
    }

    @media (min-width: 700px) {
      top: 85%;
      left: -150%;
    }

    @media (min-width: 800px) {
      top: 90%;
      left: -180%;
    }

    @media (min-width: 900px) {
      width: 280vw;
      height: 310vw;
      left: -185%;
    }

    @media (min-width: 1050px) {
      left: -200%;
    }

    /* @media (min-width: 1121px) {
      top: 170%;
      left: -330%;
      width: 320vw;
      height: 325vw;
    }

    @media (min-width: 1200px) {
      top: 170%;
      left: -350%;
      width: 320vw;
      height: 325vw;
    } */

    &.one {
      animation: wave 15s linear -1s infinite;
    }

    &.two {
      animation: wave 18s linear -1s infinite;
    }

    &.three {
      animation: wave 21s linear -1s infinite;
      
    }

    @keyframes wave {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export default WaveAnimation;
