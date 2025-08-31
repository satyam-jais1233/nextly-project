import React from "react";
import img1 from "../image/logo.svg";
function Footer() {
  return (
    <>
     <footer className="footer bg-dark">
        <div className="container-fluid py-5 border border-end-0  border-start-0">
          <div className="row">
            <div className="col-12 col-md-3">
              <a className="navbar-brand d-flex align-items-center" href="#">
                <img src={img1} alt="Logo" width="35" height="35" />
                <span className="fs-2 p-3 text-light">Nextly</span>
              </a>
              <div className=" text-light text-start ">
                <p>
                  Nextly is a free landing page & marketing website template for
                  startups and indie projects. Its built with Next.js &
                  TailwindCSS. And its completely open-source.
                </p>
              </div>
            </div>
            <div className=" col-12 col-md-3 fs-5 px-5 ">
              <div className="d-flex flex-column gap-2 ">
                <a className=" text-light link-underline-dark">Product</a>
                <a className=" text-light link-underline-dark">Features</a>
                <a className="text-light link-underline-dark">Pricing</a>
                <a className=" text-light link-underline-dark">Company</a>
                <a className=" text-light link-underline-dark">Blog</a>
              </div>
            </div>
            <div className=" col-12 col-md-3 fs-5 px-5">
              <div className="d-flex flex-column gap-2 ">
                <a className=" text-light link-underline-dark">Terms</a>
                <a className=" text-light link-underline-dark">Privacy</a>
                <a className=" text-light link-underline-dark">Legal</a>
              </div>
            </div>
            <div className=" col-12 col-md-3 fs-5 px-5 py-3">
              <div className="d-flex flex-column gap-2 ">
                <a className=" text-light link-underline-dark">Follow us</a>
                 </div>
                <div className="d-flex justify-content-between py-3">
                <i class="fa-brands fa-twitter bg-white"></i>
                <i class="fa-brands fa-facebook bg-white"></i>
                <i class="fa-brands fa-instagram  bg-white"></i>
                <i class="fa-brands fa-linkedin bg-white"></i>
                </div>
             
            </div>

             <div className="text-center text-light py-5"><p>Copyright © 2024. Made with ♥ by Web3Templates. Illustrations from Glazestock</p></div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;