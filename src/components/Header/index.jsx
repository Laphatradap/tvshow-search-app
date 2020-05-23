import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <Link to={"/"}>
        <span>Home</span>
      </Link>
    </div>
  );
};

export default Header;