import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@material-ui/core/Button";
const LoginButton = () => {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Button
        onClick={() => loginWithRedirect()}
        color="primary"
        variant="contained"
      >
        {user ? `Hey ${user.given_name}` : "log in"}
      </Button>
    )
  );
};

export default LoginButton;
