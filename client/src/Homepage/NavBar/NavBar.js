import styled from "styled-components";
import Logo from "./Logo";
import SignIn from "./SignIn";
import Post from "./Post";
import ProfileButton from "../../common-components/ProfileButton";

const NavBar = () => {
  return (
    <>
      <Wrapper>
        <Logo />

        <SignIn />

        <Post />
        <ProfileButton />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: black;
  padding: 20px;
`;

export default NavBar;
