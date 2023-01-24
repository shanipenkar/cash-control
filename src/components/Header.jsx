import React from "react";
import { NavLink } from "react-router-dom";
import "../styles.css";

const Header = () => {
  return (
    <nav className="py-3  flex items-center justify-between">
        <NavLink to="/" exact activeClassName="text-white font-bold" className="text-[#DDDDDD] hover:text-white mr-4">Home</NavLink>
        <NavLink to="/cashflow" activeClassName="text-white font-bold" className="text-[#DDDDDD] hover:text-white mr-4">Cash Flow</NavLink>
        <NavLink to="/about" activeClassName="text-white font-bold" className="text-[#DDDDDD] hover:text-white">About</NavLink>
    </nav>
  );
};

export default Header;
