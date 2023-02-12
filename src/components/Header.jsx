import React from "react";
import { NavLink } from "react-router-dom";
import "../shared/styles.css";

const Header = () => {
  return (
    <div className="border-b border-sm border-text border-opacity-25">
    <nav className="py-3 flex items-center justify-evenly">
        <NavLink to="/" exact className="nav-link text-textColor2" activeClassName="active-link text-white">Home</NavLink>
        {/* <NavLink to="/cashflow" className="nav-link text-textColor2" activeClassName="active-link text-white">Cash Flow</NavLink> */}
        <NavLink to="/register" className="nav-link text-textColor2" activeClassName="active-link text-white">Login / Register</NavLink>
        <NavLink to="/about" className="nav-link text-textColor2" activeClassName="active-link text-white">About</NavLink>
    </nav>
    </div>
  );
};

export default Header;
