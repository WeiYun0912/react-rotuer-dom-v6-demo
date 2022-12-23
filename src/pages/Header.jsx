import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <span>
        <Link to="/">Home</Link>
      </span>{" "}
      |{" "}
      <span>
        <Link to="/products">Products</Link>
      </span>
    </nav>
  );
};

export default Header;
