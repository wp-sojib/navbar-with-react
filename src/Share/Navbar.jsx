import React from "react";
import { Link } from "react-router";
import "./Navbar.css";
const Navbar = () => {
  return (
    
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/About">About</Link>
      <Link to="/Blog">Blog</Link>
    </div>
  );
};

export default Navbar;
