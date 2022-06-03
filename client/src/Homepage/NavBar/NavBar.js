import styled from "styled-components";
import Logo from "./Logo";
import SignIn from "./SignIn";
import Post from "./Post";
const NavBar = () => {
  return (
    <>
      <Wrapper>
        <Logo />

        <SignIn />
        <Post />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default NavBar;
