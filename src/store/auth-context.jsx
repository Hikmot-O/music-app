import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  getToken: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const geToken = (token) => {
    setToken(token);
  };
  return (
    <AuthContext.Provider value={{ token, getToken: geToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
