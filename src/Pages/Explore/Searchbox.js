import React from "react";
import "./searchBox.css";
import { useHistory } from "react-router";
const Searchbox = () => {
  const history = useHistory();
  const search = (e) => {
    const inputedText = e.target.searchtext.value;
    history.push(`/searchresult/${inputedText}`);
  };
  return (
    <div className="container mt-3">
      <div className="search-box">
        <form className="w-100" onSubmit={search}>
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
