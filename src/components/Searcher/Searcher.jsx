import { useState } from "react";
import PropTypes from "prop-types";
import "./Searcher.css";

const Searcher = ({ onSubmit }) => {
  const [searchLocation, setSearchLocation] = useState("");
  const [errorSearch, setErrorSearch] = useState("");
  function handleChange(e) {
    const newValue = e.target.value;
    if (newValue === "") {
      setErrorSearch("");
    } else if (isNaN(Number(newValue))) {
      setErrorSearch("ID must be a number");
    } else if (Number(newValue) < 1) {
      setErrorSearch("ID cannot be negative");
    } else if (Number(newValue) > 126) {
      setErrorSearch("ID cannot be higher than 126");
    } else {
      setErrorSearch("");
    }
    setSearchLocation(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (errorSearch) return;
    onSubmit(searchLocation);
  }
  return (
    <div className="searchbar_cont">
      <form onSubmit={handleSubmit} className="searchbar_form">
        <input
          type="text"
          value={searchLocation}
          onChange={handleChange}
          className="search_input"
        />
      </form>
      <p>{errorSearch}</p>
      <button type="submit" onClick={handleSubmit} className="search_btn">
        Search
      </button>
    </div>
  );
};
Searcher.propTypes = {
  onSubmit: PropTypes,
};
export default Searcher;
