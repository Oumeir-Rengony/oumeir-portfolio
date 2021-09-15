import styled from "styled-components";

const TypingEffect = ({ designation }) => {
  return (
    <StyledWrapper>
      <ul className="dynamic-txts">
        {designation.map((text) => (
          <li key={text}>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: block;
  .dynamic-txts {
    overflow: hidden;
    li {
      list-style: none;
      position: relative;
      top: 0;
      animation: slide 12s steps(4) infinite;

      @keyframes slide {
        100% {
          top: -400px;
        }
      }

      span {
        position: relative;
        line-height: 100px;

        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: #bd21fe;
          border-left: 3px solid;
          animation: typing 3s steps(10) infinite;
        }

        @keyframes typing {
          40%,
          60% {
            left: calc(100% + 6px);
          }
          100% {
            left: 0;
          }
        }
      }
    }
  }
`;

export default TypingEffect;
