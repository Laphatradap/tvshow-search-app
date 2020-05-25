import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="topnav">
      <NavLink className="link" to="/">
        TVSHOWLAND
      </NavLink>
    </div>
  );
};

export default NavBar;
