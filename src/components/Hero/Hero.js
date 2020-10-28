import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="row  d-flex justify-content-center align-items-center header-container">
          <div className="col-md-6 mt-4">
            <div
              style={{
                width: "70%",
                margin: "auto",
              }}
            >
              <h1 className="intro__title">Keep Reading...</h1> <br />
              <i className="intro__subtitle">
                “Wear the old coat and buy the new book.”
              </i>{" "}
              <br /> <br />
              <Link
                style={{ textDecoration: "none" }}
                to="/Books"
                className="button"
              >
                See More {"->"}
              </Link>
            </div>
          </div>
          <div className="col-md-6 logo-image">
            <img
              className="intro__illustration img-fluid "
              src="https://dl.dropboxusercontent.com/s/c55cyayn7lou912/undraw_Books_l33t.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
