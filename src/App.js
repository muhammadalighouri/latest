import React, { useState, useEffect, useRef } from "react";
import "./scss/normalize.css";
import "./scss/reset.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Navigation from "./components/Navigation";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import BuyPage from "./pages/BuyPage";

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
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
