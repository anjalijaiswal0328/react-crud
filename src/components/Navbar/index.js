import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">ReactApp</span>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/users" className="nav-link">
              Users Details
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/users/create" className="nav-link">
              Login Page
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
