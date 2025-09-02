import React from "react";
import img1 from "../image/logo.svg";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid py-3">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={img1} alt="Logo" width="35" height="35" />
          <span className="fs-2 p-3 text-light">Nextly</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarNav">
          <div className="navbar-nav mx-auto gap-3">
            <a className="nav-link text-light" href="#">
              Product
            </a>
            <a className="nav-link text-light" href="#">
              Features
            </a>
            <a className="nav-link text-light" href="#">
              Pricing
            </a>
            <a className="nav-link text-light" href="#">
              Company
            </a>
            <a className="nav-link text-light" href="#">
              Blog
            </a>
          </div>

          <button type="button" className="btn btn-primary px-3 m-3 ">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
