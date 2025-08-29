import React from "react";
import img2 from "../image/hero.webp";
function Main() {
  return (
    <>
      <div className="container-fluid bg-dark text-light py-5">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-12 col-md-6 mb-4 mb-md-5 ">
            <h1 className="fw-bold display-3">
              Free Landing Page Template for startups
            </h1>
            <p className="text-light py-3">
              Nextly is a free landing page & marketing website template for
              startups and indie projects. Its built with Next.js & TailwindCSS.
              And its completely open-source.
            </p>
            <div className="d-flex align-items-center gap-3 flex-column flex-md-row text-md-start">
            <a
              href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
              className="text-light bg-primary px-5 py-3 ps-5 link-underline-primary rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download for free
            </a>

            <a
              href="https://github.com/web3templates/nextly-template/"
              className="text-light px-5 link-underline-dark bg-dark rounded  "
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github "></i> View on Github
            </a>
            </div>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img
              src={img2}
              alt="content"
              className="img-fluid"
              style={{ maxHeight: "600px", width: "600px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Main;
