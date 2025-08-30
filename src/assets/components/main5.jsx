import React, { useState } from "react";
function Main5() {
  const [play, setPlay] = useState(false);
  return (
    <>
      <div className="container-fluid bg-dark d-flex justify-content-center align-items-center py-5">
        <div className="video-wrapper w-75">
          {play ? (
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/TlB_eWDSMt4?autoplay=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div
              className="placeholder ratio ratio-16x9"
              onClick={() => setPlay(true)}
              style={{
                background:
                  "linear-gradient(90deg, rgba(214,214,214,1) 0%, rgba(19,177,205,1) 47%, rgba(232,34,90,1) 79%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                cursor: "pointer",
                borderRadius: "10px",
              }}
            >
                <div className=" d-flex justify-content-center  align-items-center">
              <i className="fa-solid fa-play "></i></div>
            </div>
          )}
        </div>
      </div>

      <div className="container-fluid bg-dark">
        <div className="text-center">
          <h2 className="fs-6 text-primary">Testimonials</h2>

          <h4 className="fw-bolt fs-1 text-light">
            Here's what our customers said
          </h4>

          <p
            className="text-light fs-5 mx-auto m-0 "
            style={{ maxWidth: "700px" }}
          >
            Testimonials is a great way to increase the brand trust and
            awareness. Use this section to highlight your popular customers.
          </p>
        </div>
      </div>
    </>
  );
}
export default Main5;
