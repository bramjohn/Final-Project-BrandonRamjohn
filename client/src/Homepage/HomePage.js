import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../Context/UsersContext";
import Profile from "../ProfilePage/Profile";
import { Link } from "react-router-dom";
const HomePage = () => {
  const { usersData, status } = useContext(UsersContext);

  return (
    <>
      <Wrapper>
        <input type="text" placeholder="Find Work Now!" />
        <button value="submit">Submit</button>
      </Wrapper>
      <Title>Recent Posts</Title>
      {usersData.map((data) => {
        return (
          <>
            <PostWrapper>
              <Link to={`/post-details/${data._id}`}>
                <Img src={data.post.media.url} />
                {data.post.title}
                {data.post.description}
                {data.post.title}
              </Link>
            </PostWrapper>
          </>
        );
      })}
    </>
  );
};
const Title = styled.div``;
const Wrapper = styled.form``;
const PostWrapper = styled.div`
  display: flex;
`;
const Img = styled.img`
  display: flex;
  max-width: 250px;
  max-height: 250px;
  border-radius: 50px;
  padding: 10px;
`;

export default HomePage;
