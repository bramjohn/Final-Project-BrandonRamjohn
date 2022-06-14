import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isAuthenticated) {
    console.log(user);
  }

  return (
    isAuthenticated && (
      <Div>
        <Img src={user.picture} />
        <Div2>
          <Span>Name: @{user.name}</Span>
          <Span>E-mail: {user.email}</Span>
        </Div2>
      </Div>
    )
  );
};

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 45%;
  margin-top: 10%;
`;
const Div2 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 200px;
  border-radius: 100px;
`;

const Span = styled.span`
  font-size: large;
  font-weight: 500;
`;

export default Profile;
