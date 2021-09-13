import styled from "styled-components";

const MenuContainer = ({children}) => {
  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  padding: 30px 30px 0;

`;

export default MenuContainer;
