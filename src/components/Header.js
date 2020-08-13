import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Jumbotron } from 'react-bootstrap';
import "../style.css";

function Header() {
  const location = useLocation();

  return (
    <Jumbotron className="header">
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
    <div>
      <h1 className="display-4 text-center main-title">kevinLesak</h1>
      <p className="text-center"><a href="https://github.com/LESAK13" >github</a>
      </p>
      <p className="text-center"><a href="https://www.linkedin.com/in/kevin-lesak-2703401a2/" >linkedin</a>
      </p>
      <p className="text-center">
        lesak13@gmail.com
      </p>
      <p className="text-center">
        908.305.4157
      </p>
    </div>
    </Jumbotron>

  );
}

export default Header;
