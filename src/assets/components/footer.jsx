import React from "react";
import img1 from "../image/logo.svg";
function Footer() {
  return (
    <>
      <footer className="footer bg-dark">
        <div className="container-fluid py-3 border border-end-0  border-start-0 w-90 ">
          <div className="row">
            <div className="col-12 col-md-3">
              <a className="navbar-brand d-flex align-items-center" href="#">
                <img src={img1} alt="Logo" width="35" height="35" />
                <span className="fs-2 p-3 text-light">Nextly</span>
              </a>
              <div className=" text-light text-start py-3 ">
                <p>
                  Nextly is a free landing page & marketing website template for
                  startups and indie projects. Its built with Next.js &
                  TailwindCSS. And its completely open-source.
                </p>
              </div>
              <div className="d-flex align-items-center gap-2 py-3 px-3 bg-black rounded w-75 col-12">
                <i class="fa-notdog fa-solid fa-triangle-exclamation text-light "> </i>
                 <a href="https://vercel.com/?utm_source=web3templates&utm_campaign=oss"
                 target="blank"
                 className="link-underline-dark">
                  <h1 className="fs-5 text-light m-0 "> Powered by Vercel</h1>
                  </a>
              </div>
            </div>
            <div className=" col-12 col-md-3 fs-5 px-5 py-4">
              <div className="d-flex flex-column gap-2 ">
                <a className=" text-light link-underline-dark">Product</a>
                <a className=" text-light link-underline-dark">Features</a>
                <a className="text-light link-underline-dark">Pricing</a>
                <a className=" text-light link-underline-dark">Company</a>
                <a className=" text-light link-underline-dark">Blog</a>
              </div>
            </div>
            <div className=" col-12 col-md-3 fs-5 px-5 py-4">
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
              <div className="d-flex justify-content-between py-3 ">
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-twitter "></i>
                </a>
                <a
                  href="https://www.facebook.com"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-facebook "></i>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-instagram "></i>
                </a>
                <a
                  href="https://in.linkedin.com"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="text-center text-light py-2">
              <p>
                Copyright © 2024. Made with ♥ by Web3Templates. Illustrations
                from Glazestock
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
