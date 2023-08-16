import React, { useEffect, useState } from "react";
import Arrow from "./components/Arrow";
import Footer from "./components/Footer";
import Main from "./pages/homepage/Main";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);
  return (
    <div className="bg-darkHorizon">
      <Main />
      <div className="bottom-0 w-full rounded-t-xl">
        <Footer />
      </div>
      <div className="fixed bottom-10 right-5">
        <Arrow />
      </div>
    </div>
  );
}

export default App;
