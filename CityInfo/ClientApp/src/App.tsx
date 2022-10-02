import React from "react";
import NavBar from "./components/UI/NavBar";
import { Routes, Route } from "react-router-dom";
import CityInfo from "./components/CityInfo/CityInfo";
import SearchHistory from "./components/SearchHistory/SearchHistory";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<CityInfo />} />
        <Route path="/history" element={<SearchHistory />} />
      </Routes>
    </div>
  );
}

export default App;
