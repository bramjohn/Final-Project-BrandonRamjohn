import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";

import { UsersContextProvider } from "./Context/UsersContext";

const { REACT_APP_AUTH0_DOMAIN: domain, REACT_APP_AUTH0_CLIENT_ID: clientId } =
  process.env;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain='dev-2pdq6la4.us.auth0.com'
    clientId='69VMiPgXHSW7PCIQPwqHveGiqOdgnHQ3'
    redirectUri={window.location.origin}
  >
    <UsersContextProvider>
      <App />
    </UsersContextProvider>
  </Auth0Provider>
);
