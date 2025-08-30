import React from "react";
import img4 from "../image/benefit2.webp";
function Main4() {
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="container-fluid bg-dark text-center flex flex-wrap py-3 row pt-0">
          <div className="col-12 col-md-6 mb-4 mb-md-5 text-light py-4">
            <div className=" text-start">
              <h className="fs-1 fw-bold ">Offer more benefits here</h>
              <p className="fs-5 py-3 m-0">
                You can use this same layout with a flip image to highlight your
                rest of the benefits of your product. It can also contain an
                image or Illustration as above section along with some bullet
                points.
              </p>
            </div>
            <div className="text-light py-2 row text-center">
              <div className="col-auto  d-flex align-items-center">
                <i className="fa-solid fa-mobile-screen bg-primary py-2 px-4 fs-3 d-flex justify-content-center rounded"></i>
              </div>
              <div className="col text-start ">
                <h1 className="fs-3">Mobile Responsive Template</h1>
                <p>Nextly is designed as a mobile first responsive template.</p>
              </div>
            </div>
            <div className="text-light py-2 row text-center">
              <div className="col-auto  d-flex align-items-center">
                <i className="fa-solid fa-bars bg-primary py-2 px-4 fs-3 d-flex justify-content-center rounded"></i>
              </div>
              <div className="col text-start ">
                <h1 className="fs-3">Powered by Next.js & TailwindCSS</h1>
                <p>
                  This template is powered by latest technologies and tools.
                </p>
              </div>
            </div>
            <div className="text-light py-2 row text-center">
              <div className="col-auto  d-flex align-items-center">
                <i className="fa-regular fa-lightbulb bg-primary py-2 px-4 fs-3 d-flex justify-content-center rounded"></i>
              </div>
              <div className="col text-start ">
                <h1 className="fs-3">Dark & Light Mode</h1>
                <p>Nextly comes with a zero-config light & dark mode.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 py-5">
            <img
              src={img4}
              className="img-fluid"
              style={{ maxHeight: "800px", width: "600px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main4;
