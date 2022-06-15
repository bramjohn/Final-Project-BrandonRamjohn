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
        <Div>
          <SignIn />
          <Post />
          <ProfileButton />
        </Div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: black;
  padding: 20px;
`;

const Div = styled.div`
  display: flex;
  gap: 30px;
  margin-right: 10px;
`;
export default NavBar;
