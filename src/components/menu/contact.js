import { useState } from "react";
import styled from "styled-components";
import SectionHeader from "./sectionHeader/sectionHeader";
import MenuContainer from "./container/menuContainer";
import { getContactSection } from "../../GraphQl";
import { useQuery } from "react-query";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { data, isLoading } = useQuery("contact", getContactSection);

  const [inputState, setInputState] = useState(null);

  const sendEmail = async(e) => {
    e.preventDefault();

    const templateParams = {
      sender: inputState.name,
      email: inputState.email,
      message: inputState.message
    };
    console.log(inputState);

    try {
      const emailResponse = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
        templateParams, 
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      if(emailResponse.status === 200) {
        setInputState(null);
        console.log(emailResponse.text);
      }

    }catch(error){
      console.log(error);
    }
    
  }


  if (isLoading) {
    return <></>;
  }

  const { title, header, message, inputArea } = data;

  return (
    <MenuContainer target={title}>
      <SectionHeader title={title} />
      <StyledWrapper>
        <div className="contact">
          <p className="small-bio">
            <strong>{header}</strong>
            <br />
            {message}
          </p>
          <form className="contact-form">
            {inputArea.map((item, index) =>
              index !== inputArea.length - 1 ? (
                <input
                  key={index}
                  type="text"
                  value={inputState !== null ? inputState[item.toLowerCase()] : ""}
                  name={item.toLowerCase()}
                  className="contact-input"
                  placeholder={item}
                  onChange={(e) =>
                    setInputState({ ...inputState, [item.toLowerCase()]: e.target.value })
                  }
                />
              ) : (
                <textarea
                  key={index}
                  type="text"
                  name={item.toLowerCase()}
                  className="contact-input message"
                  value={inputState !== null ? inputState[item.toLowerCase()] : ""}
                  placeholder={item}
                  onChange={(e) =>
                    setInputState({ ...inputState, [item.toLowerCase()]: e.target.value })
                  }
                />
              )
            )}
            <button className="send" onClick={sendEmail}>Send</button>
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

    @media (min-width: 1121px) {
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