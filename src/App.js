import React from "react";
import "./App.css";
import SearchSection from "./Components/SearchSection";
import MovieSection from "./Components/MovieSection";

function App() {
  return (
    <div className="app">
      <div className="logo-section">
        <h1>Movie Finder</h1>
      </div>
      <div className="sections">
        <SearchSection />
        <MovieSection />
      </div>
    </div>
  );
}

export default App;
