import { createContext, useState, useEffect } from "react";

export const UsersContext = createContext(null);

export const UsersContextProvider = ({ children }) => {
  //***********STATE VARIABLES****************//
  //***********GENERAL DATA****************//
  const [usersData, setUsersData] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch(`/ads`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "This is data");
        setUsersData(data.data);
        setStatus("idle");
        console.log(usersData);
      })

      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <UsersContext.Provider
      value={{
        usersData,
        status,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
