import React from "react";
import { Logo } from "../Imports";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  bg-dark"  data-bs-theme="dark">
      <div className="container text-light">
        <a className="navbar-brand" href="#">
        <img src={Logo} alt="logo" width="150" />
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
              <a className="nav-link active" aria-current="page" href="#" >
                Rooms & Suites
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                News
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Gallery
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacts
              </a>
            </li>

          </ul>

          <div className="d-flex">
          <a class="btn btn-outline-success"  href="#">BOOK NOW</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
