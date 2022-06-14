import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useAuth0 } from "@auth0/auth0-react";

const Post = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <>
        <Link to="/create-post" style={{ textDecoration: "none" }}>
          <Button color="primary" variant="contained">
            Post
          </Button>
        </Link>
      </>
    )
  );
};
export default Post;
