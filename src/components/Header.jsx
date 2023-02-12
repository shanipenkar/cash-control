import React, { useContext } from "react";
import { LoginContext } from "../LoginContext";
import { NavLink } from "react-router-dom";
import "../shared/styles.css";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn, loggedUser, setLoggedUser} = useContext(LoginContext);
  return (
    <div className="border-b border-sm border-text border-opacity-25">
      <nav className="py-3 flex items-center justify-evenly">
        <NavLink
          to="/"
          exact
          className="nav-link text-textColor2"
          activeClassName="active-link text-white"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="nav-link text-textColor2"
          activeClassName="active-link text-white"
        >
          About
        </NavLink>
        {isLoggedIn && (
          <>
          <NavLink
            to="/cashflow"
            className="nav-link text-textColor2"
            activeClassName="active-link text-white"
          >
            Cash Flow
          </NavLink>
          <NavLink
            to="/"
            className="nav-link text-textColor2 text-center"
            activeClassName="active-link"
            onClick={() => {
              setIsLoggedIn(false);
              setLoggedUser({username: "", password: ""})
            }}
          >
          <p className="text-black">Loggged as: {loggedUser.username}</p>
            Logout
          </NavLink>
          </>
        )}
        {!isLoggedIn && (
          <NavLink
            to="/auth"
            className="nav-link text-textColor2"
            activeClassName="active-link text-white"
          >
            Login / Register
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
