import React from "react";
import img3 from "../image/benefit.webp";
function Main3() {
  return (
    <>
     <div className="container-fluid bg-dark text-center py-5 flex-wrap">
        <div className="text-center flex-wrap row py-5 ">
          <div className="col-lg-6 col-12">
            <img src={img3} className="img-fluid" />
          </div>
          <div className="col-lg-6 col-12">
            <h1 className="fw-bold fs-1  text-light text-start py-3">
              Highlight your benefits
            </h1>
            <div className="text-light text-start w-75 fs-5">
              <p>
                You can use this space to highlight your first benefit or a
                feature of your product. It can also contain an image or
                Illustration like in the example along with some bullet points.
              </p>
            </div>
            <div className="text-light py-2 row text-center">
              <div className="col-auto  d-flex align-items-center">
                <i className="fa-solid fa-face-smile bg-primary py-2 px-4 fs-3 d-flex justify-content-center rounded"></i>
              </div>
              <div className="col text-start ">
                <h1 className="fs-3">Understand your customers</h1>
                <p>Then explain the first point breifly in one or two lines.</p>
              </div>
            </div>
              <div className="text-light py-2 row text-center">
              <div className="col-auto  d-flex align-items-center">
                <i className="fa-solid  fa-signal bg-primary py-2 px-4 fs-3 d-flex justify-content-center rounded"></i>
              </div>
              <div className="col text-start">
                <h1 className="fs-3">Improve acquisition</h1>
                <p>Here you can add the next benefit point.</p>
              </div>
               <div className="text-light py-2 row text-center">
              <div className="col-auto  d-flex align-items-center">
                <i className="fa-solid fa-arrow-pointer bg-primary py-2 px-4 fs-3 d-flex justify-content-center rounded"></i>
              </div>
              <div className="col text-start ">
                <h1 className="fs-3">Drive customer retention</h1>
                <p>This will be your last bullet point in this section.</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );    
}
export default Main3;