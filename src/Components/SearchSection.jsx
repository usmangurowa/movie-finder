import React from "react";

const SearchSection = () => {
  return (
    <div className="search-section">
      <div className="search-input">
        <input type="text" className="search" />{" "}
        <button className="search">Search</button>
      </div>
      <ul className="recent-searches">
        <span>Recent Searches</span>
        <li>Thor</li>
      </ul>
    </div>
  );
};
export default SearchSection;
