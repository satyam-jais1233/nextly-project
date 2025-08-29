import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

import Navbar from "./assets/components/navbar";
import Main from "./assets/components/main";
import Main1 from "./assets/components/main1";
import Main2 from "./assets/components/main2";
import img3 from "./assets/image/benefit.webp";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Main1 />
      <Main2 />
      <div className="container-fluid bg-dark text-center py-5 flex-wrap">
        <div className="text-center flex-wrap row py-5 ">
          <div className="col-lg-6 col-12">
            <img src={img3} className="img-fluid" />
          </div>
          <div className="col-lg-6 col-12">
            <h1 className="fw-bold fs-1  text-light text-start py-3">Highlight your benefits</h1>
            <div className="text-light text-start w-75 fs-5">
            <p >
              You can use this space to highlight your first benefit or a
              feature of your product. It can also contain an image or
              Illustration like in the example along with some bullet points.
            </p>
            </div>
            <div className="text-light">
               <i class="fa-solid fa-face-smile"></i>
                

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
