import React from "react";
import { Routes, Route } from "react-router-dom";
import PictureOfTheDay from "./Components/Header/PictureOfTheDay";
import SingleMovieByID from "./Components/Movies/SingleMovieByID";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <PictureOfTheDay/> } />
        <Route path="/movie/:id" element={ <SingleMovieByID/> } />
      </Routes>
    </div>
  );
}

export default App;
