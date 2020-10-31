import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const NavBar = () => {
  const hide = () => {
    let aria = document
      .getElementById("collapsed")
      .getAttribute("aria-expanded");
    if (aria === "true") {
      let element = document.getElementById("navbarNav");
      element.classList.remove("show");
      let x = document.getElementById("collapsed");
      x.classList.add("collapsed");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand " to="/">
          BookLand
        </Link>
        <button
          id="collapsed"
          className="navbar-toggler navbar-toggler-right collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span class="navbar-toggler-icon"></span> */}
          <span> </span>
          <span> </span>
          <span> </span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/" onClick={() => hide()}>
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/books" onClick={() => hide()}>
                Books
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addbooks" onClick={() => hide()}>
                Add Boks
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/savedbook" onClick={() => hide()}>
                Saved Books
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={() => hide()}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
