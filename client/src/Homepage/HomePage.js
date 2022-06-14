import styled from "styled-components";
import { useContext } from "react";

import { UsersContext } from "../Context/UsersContext";
import { Link } from "react-router-dom";

import Filter from "./Filter";

const HomePage = () => {
  const { usersData, status, setFilter } = useContext(UsersContext);

  return (
    <>
      <Filter setFilter={setFilter} />
      <Title>Recent Posts</Title>
      <DivWrapper>
        {usersData.map((data) => {
          return (
            <>
              <PostWrapper>
                <Link2
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/post-details/${data._id}`}
                >
                  <Img src={data.post.media.url} />
                  <Div>
                    <H1>{data.name}</H1>
                    <H1>{data.post.name}</H1>

                    <H2>{data.post.title}</H2>
                    <P>Paying: {data.post.price}$</P>
                  </Div>
                </Link2>
              </PostWrapper>
            </>
          );
        })}
      </DivWrapper>
    </>
  );
};
const Title = styled.span`
  font-size: xx-large;
`;
const Link2 = styled(Link)`
  display: flex;
`;
const Div = styled.div`
  width: 400px;
`;

const DivWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PostWrapper = styled.div`
  display: flex;
  border: solid grey 3px;
  margin: 10px;
  max-width: 700px;
`;
const Img = styled.img`
  width: 250px;
  height: 250px;
  padding: 10px;
`;

const H1 = styled.p`
  font-style: oblique;
  font-size: x-large;
`;
const H2 = styled.p`
  color: black;
  font-size: large;
  font-weight: 600;
  margin-top: 25px;
`;
const P = styled.p`
  color: green;
  margin-top: 50px;
`;

export default HomePage;
