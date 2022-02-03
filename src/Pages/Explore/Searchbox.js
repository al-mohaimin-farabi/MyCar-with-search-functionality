import React from "react";
import "./searchBox.css";
const Searchbox = ({ getSearchedText }) => {
  return (
    <div className="container mt-3">
      <div className="search-box">
        <form className="w-100" onSubmit={getSearchedText}>
          <input
            name="searchtext"
            type="text"
            className="search-input"
            placeholder="Search.."
          />
          <button type="submit" className="search-button">
            <span className="bi bi-search"></span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Searchbox;
