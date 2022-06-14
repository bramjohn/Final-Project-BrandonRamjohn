import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";

const PostDetails = () => {
  const { id } = useParams();
  const [postDetails, setPostDetails] = useState(null);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/post-details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPostDetails(data.data);
        console.log(data, "This is data");
      })

      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleClickDelete = () => {
    fetch(`/api/delete-post/${postDetails._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          navigate("../homepage", { replace: true });
          window.location.reload();
        }
      })

      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      {postDetails && (
        <>
          <Wrapper>
            <DivPostInfo>
              <div>
                <ImgPro src={postDetails.post.avatarUrl} />
                <ImgPro src={postDetails.avatarUrl} />
                <span>
                  @{postDetails.post.name}
                  {postDetails.name}
                </span>
              </div>
              <Ptitle>{postDetails.post.title}</Ptitle>
              <Pdetails>{postDetails.post.description}</Pdetails>
              <Pdetails>E-Transfer or Cash upon completion of work!</Pdetails>
              <Pdate>{postDetails.post.date}</Pdate>
              <Pprice>Paying: {postDetails.post.price} $</Pprice>
              <ButtonsDiv>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() =>
                    navigate("../homepage", {
                      replace: true,
                    }).window.location.reload()
                  }
                >
                  Back
                </Button>

                {user.sub === postDetails.post.author_id && (
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "red",
                      color: "white",
                    }}
                    onClick={(e) => handleClickDelete()}
                  >
                    Delete
                  </Button>
                )}
              </ButtonsDiv>
            </DivPostInfo>
          </Wrapper>
          <DivImgBottom>
            <Img src={postDetails.post.media.url} />
          </DivImgBottom>
        </>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Img = styled.img`
  max-width: 450px;
  margin-top: 50px;
  margin-left: 50px;
`;

const ImgPro = styled.img`
  max-width: 100px;
  border-radius: 100px;
`;

const DivPostInfo = styled.div`
  justify-content: center;
  margin-top: 15px;
`;

const Ptitle = styled.p`
  font-size: 30px;
  margin: 10px;
`;

const Pdetails = styled.p`
  font-size: 20px;
  max-width: 450px;
  margin-left: 10px;
  margin-top: 10px;
`;

const Pdate = styled.p`
  margin-left: 10px;
`;

const Pprice = styled.p`
  margin-left: 10px;
  color: green;
  margin-top: 20px;
  margin-bottom: 25px;
  font-size: xx-large;
`;

const DivImgBottom = styled.div`
  display: flex;
  justify-content: center;
`;
const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default PostDetails;
