import { UsersContext } from "../Context/UsersContext";
import UploadImage from "./UploadImage";
import { useState, useContext } from "react";
import styled from "styled-components";
import { v4 } from "uuid";
import { v4 as uuidv4 } from "uuid";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useEffect } from "react";

const uuid = require("uuid");
const CreatePost = () => {
  const { imgUrl, setFilter } = useContext(UsersContext);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [email, setEmail] = useState();
  const [price, setPrice] = useState();
  const { user } = useAuth0();
  const navigate = useNavigate();

  const handleSubmit = () => {
    fetch("/api/create-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: uuid.v4(),
        post: {
          author_id: user.sub,
          name: user.name,
          avatarUrl: user.picture,
          title: title,
          description: description,
          date: "",
          price: price,
          email: email,
          media: {
            type: "img",
            url: imgUrl,
          },
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 201) {
          console.log(data, "This is the data");
          navigate(`/homepage`, { replace: true });
          window.location.reload();
        }
      });
  };

  const handleEmail = (email) => {
    setEmail(email);
  };

  return (
    <>
      <Wrapper>
        <Div
          type="submit"
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <Input
            type="text"
            attribute="autoFocus"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></Input>
          <Input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Input>
          <Input
            type="email"
            placeholder="E-mail@example.com"
            value={email}
            onChange={(e) => handleEmail(e.target.value)}
          ></Input>
          <Input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></Input>
          <Div2>
            <Button1
              disabled={imgUrl ? false : true}
              type="submit"
              color="primary"
              variant="contained"
            >
              Confirm
            </Button1>
          </Div2>
        </Div>
        <UploadImage />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5%;
`;

const Div = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  width: 600px;
  height: 600px;
  padding: 15px;
  margin-bottom: 15px;
`;

const Div2 = styled.div`
  display: flex;
  margin-left: 15px;
  margin-top: 15px;
`;

const Button1 = styled(Button)`
  max-width: 35px;
`;
const Input = styled.input`
  width: 85%;
  height: 56px;
  border-radius: 4px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.3);
  transition: 0.3s all;
  margin: 15px;
  font-size: large;

  &:hover {
    background-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  }

  &&:focus {
    color: forestgreen;
  }
`;

export default CreatePost;
