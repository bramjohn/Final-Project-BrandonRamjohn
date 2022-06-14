import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import logo from "./logo.png";
import styled from "styled-components";

const Logo = () => {
  return (
    <>
      <Link to="/">
        <Img src={logo} />
      </Link>
    </>
  );
};
const Img = styled.img`
  position: absolute;
  width: 200px;
  height: 50px;
  left: 5px;
`;

export default Logo;
