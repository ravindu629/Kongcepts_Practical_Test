import React from "react";
import "./SubscribeSection.css";
import Button from "@mui/material/Button";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export default function SubscribeSection() {
  const changeBtnSyle = {
    borderRadius: 35,
    borderColor: "white",
    color: "darkRed",
    fontWeight: "bold",
    marginLeft: "20px",
    backgroundColor: "white",
  };
  return (
    <div className="liveSection">
      <div className="content-subscribe">
        <h1>LIVE THERE</h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          vitae mi sit amet elit porta fermentum.{" "}
        </h3>
        <div className="playIcon">
          <PlayCircleIcon />
        </div>
        <br />
      </div>

      <div className="subscribeSection">
        <div className="content-subscribe">
          <h1>Stay Up to Date With Your Favourite Events!</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vitae mi sit amet elit porta fermentum.
          </h3>
          <br />
          <form>
            <input
              type="text"
              placeholder="Your Email Address"
              name="search"
              className="searchInput"
            />
            &nbsp;&nbsp;
            <Button variant="contained" size="large" style={changeBtnSyle}>
              Subscribe
            </Button>
            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}
