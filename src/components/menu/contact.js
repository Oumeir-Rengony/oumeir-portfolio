import { useContext, useState } from "react";
import styled from "styled-components";
import { getContact } from "../../data";
import SectionHeader from "./sectionHeader/sectionHeader";
import MenuContainer from "./container/menuContainer";
import { NavbarContext } from "../../context/navbar/navbar.provider";

const Contact = () => {
  const { title, intro, input } = getContact();

  const [inputState, setInputState] = useState(null);

  const {activeMenuItem} = useContext(NavbarContext);

  return (
    <MenuContainer target={title} activeMenuItem={activeMenuItem.contact}>
      <SectionHeader title={title} />
      <StyledWrapper>
        <div className="contact">
          <p className="small-bio">
            <strong>{intro.title}</strong>
            <br />
            {intro.paragraph}
          </p>
          <form className="contact-form">
            {input.map((item, index) =>
              index !== input.length - 1 ? (
                <input
                  key={index}
                  type="text"
                  value={inputState !== null ? inputState[item] : ""}
                  name={item}
                  className="contact-input"
                  placeholder={item}
                  onChange={(e) =>
                    setInputState({ ...inputState, [item]: e.target.value })
                  }
                />
              ) : (
                <textarea
                  key={index}
                  type="text"
                  name={item}
                  className="contact-input message"
                  value={inputState !== null ? inputState[item] : ""}
                  placeholder={item}
                  onChange={(e) =>
                    setInputState({ ...inputState, [item]: e.target.value })
                  }
                />
              )
            )}
            <button className="send">Send</button>
          </form>
        </div>
      </StyledWrapper>
    </MenuContainer>
  );
};

const StyledWrapper = styled.section`
  .contact {
    padding-bottom: 30px;

    @media (min-width: 681px) {
      padding-bottom: 0;
    }

    @media (min-width:1121px){
      padding: 30px 22px;
    }

    .small-bio {
      padding-top: 30px;
      color: #646464;
    }

    .contact-form {
      padding-top: 15px;
      text-align: center;

      @media (min-width: 1121px) {
        padding-top: 10px;
      }

      .contact-input {
        width: 100%;
        padding: 0 15px;
        font-family: "Poppins";
        font-size: 16px;
        height: 50px;
        border: 2px solid #eee;
        outline: 0;
        border-radius: 12px;
        margin-bottom: 15px;

        @media (min-width: 1121px) {
          margin-bottom: 10px;
        }
      }

      .message {
        height: 160px;
        resize: none;
        padding-top: 10px;

        @media (min-width: 1440px) {
          height: 140px;
        }
      }

      .send {
        max-width: 140px;
        cursor: pointer;
        padding: 10px 25px;
        font-size: 16px;
        border: none;
        background-color: #8444df;
        color: white;
        letter-spacing: 1px;
        border-radius: 40px;
        transition: background-color 0.3s ease-out;

        &:hover {
          background-color: #ff5aee;
        }
      }
    }
  }
`;

export default Contact;
