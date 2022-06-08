import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";

import { UsersContextProvider } from "./Context/UsersContext";

const { REACT_APP_AUTH0_DOMAIN: domain, REACT_APP_AUTH0_CLIENT_ID: clientId } =
  process.env;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <UsersContextProvider>
        <App />
      </UsersContextProvider>
    </Auth0Provider>
  </React.StrictMode>
);
