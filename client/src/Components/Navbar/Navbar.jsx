// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/GROUPEDMITSUMM.png";
import brochurePath from "../../assets/MIT-WPU.pdf";

const Navbar = () => {
  const handleDownload = () => {
    window.open(brochurePath, "_blank");
  };
  return (
    <div>
      <div className="navbar-body">
        <Link to="/">
          <img className="navbar-img" src={logo} alt="Logo" />
        </Link>

        <div className="navbar-contents">
          <div>
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </div>
          <div className="dropdown">
            <span className="nav-link">ABOUT ▼</span>
            <div className="dropdown-content">
              <Link to="/about" className="dropdown-link">
                ABOUT
              </Link>
              <Link to="/executive-message" className="dropdown-link">
                Executive President's Message
              </Link>
              <Link to="/minister-message" className="dropdown-link">
                Sport's Minister Message
              </Link>
              
              {/* <Link to="/organising-team" className="dropdown-link">
                Organising Team
              </Link> */}
              {/* <Link to="/event-head" className="dropdown-link">
                Event Head
              </Link>
  */}
            </div>
          </div>
          <div>
            <Link to="/guest" className="nav-link">
              GUESTS
            </Link>
          </div>
          <div>
            <Link to="/" className="nav-link" onClick={handleDownload}>
              BROCHURE
            </Link>
          </div>

          <div className="dropdown">
            <span className="nav-link">PARTICIPANTS ▼</span>
            <div className="dropdown-content">
              <Link to="/registration-fees" className="dropdown-link">
                Registration Fees
              </Link>
              <Link to="/instructions" className="dropdown-link">
                Instructions
              </Link>
              <Link to="/accommodation" className="dropdown-link">
                Accommodation
              </Link>
            </div>
          </div>
          {/*
          <div>
            <Link to="/sports" className="nav-link">
              Sports
            </Link>
          </div>
                    */}

          <div>
            <Link to="/register" className="nav-link register-button">
              REGISTRATION NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
