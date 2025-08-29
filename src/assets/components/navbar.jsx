import React from "react";
import img1 from "../image/logo.svg"; 

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark flex-wrap">
      <div className="container-fluid py-3 ">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={img1} alt="Logo" width="35" height="35" />
          <span className="fs-2 p-3 text-light">Nextly</span>
        </a>
        <div className="navbar-nav mx-auto ">
          <a className="nav-link my-nav-link text-light " href="#">
            Product
          </a>
          <a className="nav-link my-nav-link text-light " href="#">
            Features
          </a>
          <a className="nav-link my-nav-link text-light" href="#">
            Pricing
          </a>
          <a className="nav-link my-nav-link text-light" href="#">
            Company
          </a>
          <a className="nav-link my-nav-link text-light" href="#">
            Blog
          </a>
        </div>
        <button type="button" className="btn btn-primary px-3 m-3">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
