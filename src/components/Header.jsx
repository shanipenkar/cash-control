import React from "react";
import { NavLink } from "react-router-dom";
import "../shared/styles.css";

const Header = () => {
  return (
    <div className="w-auto border-b border-sm border-light border-opacity-25">
    <nav className="py-3 flex items-center justify-evenly">
        <NavLink to="/" exact className="nav-link text-secondary" activeClassName="active-link">Home</NavLink>
        <NavLink to="/cashflow" className="nav-link text-secondary" activeClassName="active-link">Cash Flow</NavLink>
        <NavLink to="/about" className="nav-link text-secondary" activeClassName="active-link">About</NavLink>
    </nav>
    </div>
  );
};

export default Header;
