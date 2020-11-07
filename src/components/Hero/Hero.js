import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div id="home">
      <div className="layer">
        <div className="container">
          <div className=" row">
            <div className="col-lg-12">
              <div id="content">
                <h1 className="h1">BookLand</h1>
                <h3 className="h3">
                  “Wear the old coat and buy the new book.”
                </h3>
                <center>
                  <hr />
                </center>
                <Link
                  to="/books"
                  className="fas fa-book"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <span style={{ marginLeft: "10px", textDecoration: "none" }}>
                    Get Started
                  </span>
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
