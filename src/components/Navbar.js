import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
      <div className="container-fluid">
        {/* <img src="C:\Users\thisw\OneDrive\Desktop\Web Dev\CwH projects\TextUtil Project\textutils\public\favicon-32x32.png" alt="logo"></img> */}
        <a className="navbar-brand" href="#textform">
          <strong>{props.title}</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#textform">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#about">
                {props.aboutTxt}
              </a>
            </li>
          </ul>
            <div className={`form-check form-switch text-${props.mode === 'light'? 'dark': 'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                aria-checked="false"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Dark Mode
              </label>
            </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutTxt: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "set title",
  aboutTxt: "Set about",
};
