import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useAuth0 } from "@auth0/auth0-react";
const ProfileButton = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Link to="/profile" style={{ textDecoration: "none" }}>
        <Button color="primary" variant="contained">
          Profile
        </Button>
      </Link>
    )
  );
};

export default ProfileButton;
