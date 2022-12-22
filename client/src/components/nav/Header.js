import React from "react";
import "./Header.css";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchSection from "./SearchSection";

export default function Header() {
  const cartIconStyle = {
    borderRadius: 35,
    borderColor: "white",
    color: "white",
    fontWeight: "bold",
    fontSize: "110%",
  };

  return (
    <div className="header">
      <div className="content-header">
        <h3 className="headerTitle">
          <b>myticket&#174;</b>
        </h3>

        <div className="headerSections">
          <p className="headerSection">SCHEDULE</p>
          <p className="headerSection">CONCERTS</p>
          <p className="headerSection">SPORTS</p>
          <p className="headerSection">PARTIES</p>
          <p className="headerSection">THEATER</p>
          <p className="headerSection">GALERY</p>
          <p className="headerSection">BLOG</p>

          <Button
            variant="outlined"
            style={cartIconStyle}
            size="large"
            endIcon={<ShoppingCartIcon />}
          >
            0 &nbsp;{" "}
          </Button>
        </div>
        <hr style={{ height: "7px", color: "black", marginTop: "20px" }} />
        <SearchSection />
      </div>
    </div>
  );
}
