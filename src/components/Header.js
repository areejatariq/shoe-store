import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> {" | "}
        <Link to="Products">Product</Link>
      </nav>
    </div>
  );
}

export default Header;
