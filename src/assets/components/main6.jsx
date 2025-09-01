import React from "react";
import img8 from "../image/user1.webp";
import img9 from "../image/user2.webp";
import img10 from "../image/user3.webp";
function Main6() {
  return (
    <>
      <div className="container-fluid bg-dark ">
        <div className="d-flex justify-content-center align-items-center p-5">
          <div className="row g-5 ">
            <div className="col-12 col-md-4">
              <div className="p-5  rounded text-light shadow fs-4">
                <p>
                  Share a real testimonial that hits some of your benefits from
                  one of your popular customer.
                </p>
                <div className="d-flex justify-content-start">
                  <img
                    src={img8}
                    className="img-fluid rounded-circle"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="px-3">
                    <h1 className="fs-5 ">Sarah Steiner</h1>
                    <p className="text-secondary fs-6">VP Sales at Google </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="p-5  rounded text-light shadow fs-4">
                <p>
                  Make sure you only pick the right sentence to keep it short
                  and simple.
                </p>
                <div className="d-flex justify-content-start ">
                  <img
                    src={img9}
                    className="img-fluid rounded-circle"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="px-3">
                    <h1 className="fs-5">Dylan Ambrose</h1>
                    <p className="text-secondary fs-6">
                      Lead marketer at Netflix{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="p-5  rounded text-light shadow  fs-4">
                <p>
                  This is an awesome landing page template I've seen. I would
                  use this for anything.
                </p>
                <div className="d-flex justify-content-start">
                  <img
                    src={img10}
                    className="img-fluid rounded-circle"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="px-3">
                    <h1 className="fs-5">Gabrielle Winn</h1>
                    <p className="text-secondary fs-6">
                      Co-founder of Acme Inc
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark py-5">
        <div className="text-center">
          <h2 className="fs-6 text-primary">FAQ</h2>

          <h4 className="fw-bolt fs-1 text-light">
            Frequently Asked Questions
          </h4>

          <p
            className="text-light fs-5 mx-auto m-0 "
            style={{ maxWidth: "700px" }}
          >
            Answer your customers possible questions here, it will increase the
            conversion rate as well as support or chat requests.
          </p>
        </div>
      </div>

      {/* new line accordion */}

      <div className="container-fluid py-5 d-flex justify-content-center bg-dark">
        <div className="accordion w-50" id="accordionExample">
          <div className="accordion-item p-3 bg-dark border-0">
            <h2 className="accordion-header">
              <button
                className="accordion-button bg-dark text-light shadow"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Is this template completely free to use?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body text-light bg-secondary">
                Yes, this template is completely free to use.
              </div>
            </div>
          </div>

          <div className="accordion-item  p-2 bg-dark border-0">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-dark text-light shadow"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Can I use it in a commercial project?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body text-light bg-secondary">
                Yes, you can use it in commercial projects.
              </div>
            </div>
          </div>

          <div className="accordion-item p-2 bg-dark border-0">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-dark text-light shadow"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What is your refund policy?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body text-light bg-secondary">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5 bg-dark ">
        <div className="container w-65 bg-primary rounded py-4  flex-column">
          <div className="  d-flex justify-content-between align-items-center flex-column  flex-md-row p-3">
            <div className="text-light mb-3 mb-md-0">
              <h1>Ready to try-out this template?</h1>
              <p>Don't let your visitors see a poor landing.</p>
            </div>
            <div className="d-flex align-items-center  bg-white rounded px-4"  style={{ height: "60px" }}>
                <a href="https://github.com/web3templates"
                target="blank"
                className="link-underline-light "
                > 
              <h1 className="fs-5 text-primary m-0 ">Download for free</h1>
              </a>
            </div>
          </div>
        </div>
      </div>   
    </>
  );
}
export default Main6;
