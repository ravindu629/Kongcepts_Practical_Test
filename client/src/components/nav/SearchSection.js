import React from "react";
import "./SearchSection.css";
import Button from "@mui/material/Button";

import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function SearchSection() {
  const changeBtnSyle = {
    borderRadius: 35,
    borderColor: "white",
    color: "white",
    fontWeight: "bold",
    marginLeft: "20px",
  };
  return (
    <div className="searchSection">
      <h1>Make Your Dream Come True</h1>
      <h3>Meet your favorite artists, sport teams and parties</h3>
      <br />
      <form>
        <input
          type="text"
          placeholder="Search Artists, Teams, or Venue"
          name="search"
          className="searchInput"
        />
        &nbsp;&nbsp;
        <button type="submit" className="searchBtn">
          <SearchIcon />
        </button>
        <br />
        <br />
        <LocationOnIcon />
        &nbsp;&nbsp;<b>San Francisco, CA</b>
        <Button variant="outlined" size="large" style={changeBtnSyle}>
          Change Location
        </Button>
      </form>
    </div>
  );
}
