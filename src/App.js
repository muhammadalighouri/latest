import React, { useState, useEffect, useRef } from "react";
import "./scss/normalize.css";
import "./scss/reset.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Navigation from "./components/Navigation";
import Mint from "./pages/Mint";

var Spinner = require("react-spinkit");
function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#fff");
  const containerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <main>

        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Mint" element={<Mint />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
