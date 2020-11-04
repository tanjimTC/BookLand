import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div id="home">
      <div class="layer">
        <div class="container">
          <div class=" row">
            <div class="col-lg-12">
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
                  class="fas fa-book"
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
