import { createContext, useState, useEffect } from "react";

export const UsersContext = createContext(null);

export const UsersContextProvider = ({ children }) => {
  //***********STATE VARIABLES****************//
  //***********GENERAL DATA****************//
  const [usersData, setUsersData] = useState([]);
  const [status, setStatus] = useState("loading");
  const [filter, setFilter] = useState("reset");
  const [imgUrl, setImgUrl] = useState();

  useEffect(() => {
    fetch(`/posts?filter=${filter}`)
      .then((res) => res.json())
      .then((data) => {
        setUsersData(data.data.reverse());
        setStatus("idle");
      })

      .catch((error) => {
        console.error("Error:", error);
      });
  }, [filter]);

  return (
    <UsersContext.Provider
      value={{
        usersData,
        status,
        setFilter,
        imgUrl,
        setImgUrl,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
