import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

import Navbar from "./assets/components/navbar";
import Main from "./assets/components/main";
import Main1 from "./assets/components/main1";
import Main2 from "./assets/components/main2";
import Main3 from "./assets/components/main3";
import Main4 from "./assets/components/main4";
import Main5 from "./assets/components/main5";
import Main6 from "./assets/components/main6";
import Footer from "./assets/components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Main1 />
      <Main2 />
      <Main3 />
      <Main4 />
      <Main5 />
      <Main6 />
      <Footer/>
    </>
  );
}

export default App;
