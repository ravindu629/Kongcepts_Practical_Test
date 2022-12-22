import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="foter">
      <div>
        <h3>
          <b>myticket&#174;</b>
        </h3>
        <p className="copyright">© Copyright {year}</p>
      </div>
    </footer>
  );
}

export default Footer;
