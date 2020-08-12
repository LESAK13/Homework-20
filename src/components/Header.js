import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Jumbotron, } from 'react-bootstrap';

function Header() {
  const location = useLocation();

  return (
    <Jumbotron>
      <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
    </ul>
      <h1>kevinLesak</h1>
    </Jumbotron>

  );
}

export default Header;
