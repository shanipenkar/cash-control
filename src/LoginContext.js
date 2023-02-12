import React, { createContext, useState } from 'react';
export const LoginContext = createContext();

export const LoginContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedUser, setLoggedUser] = useState({id: "", username: "", password: ""});
  
    return (
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, loggedUser, setLoggedUser }}>
        {props.children}
      </LoginContext.Provider>
    );
  };
  
