import React from "react";
import Homepage from "./Homepage";
import { Routes, Route } from "react-router-dom";
import Movies from "../movies/Movies";
import Series from "../series/Series";
import Musics from "../musics/Musics";

const Main = () => {
  return (
    <div className="bg-blue-300 mt-14 z-0 pb-5">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/musics" element={<Musics />} />
      </Routes>
    </div>
  );
};

export default Main;
