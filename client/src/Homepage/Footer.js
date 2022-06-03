import styled from "styled-components";

import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <Wrapper>
      <Div>
        <FiFacebook size={50} />
        <FiTwitter size={50} />
        <FiInstagram size={50} />
      </Div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  bottom: 0;
  width: 100%;
  position: fixed;
  max-height: 500px;
  color: white;
  padding: 15px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export default Footer;
