import React from "react";
import "./Contacts.css";

import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import Header from "./Header";
import AllEvents from "../events/AllEvents";

export default function Contacts() {
  return (
    <div>
      <div className="contacts">
        <div className="content-contacts">
          <div className="contact">
            <CallIcon />
            &nbsp; 070-4424075
          </div>
          <div className="contact">
            <EmailIcon />
            &nbsp; ravinduwdmr@gmail.com
          </div>
          <div className="login">
            <a href="/" className="signIn">
              SIGN IN
            </a>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <a href="/addUser" className="signUp">
              SIGN UP
            </a>
          </div>
        </div>
      </div>
      <Header />
      <AllEvents />
    </div>
  );
}
