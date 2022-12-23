import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Events.css";
import Button from "@mui/material/Button";
import EventDetails from "./EventDetails";

function AllEvents() {
  const [events, setEvents] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    function getEvents() {
      axios
        .get("http://localhost:5000/api/events")
        .then((res) => {
          setEvents(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getEvents();
  }, []);

  const changeBtnSyle = {
    borderRadius: 35,
    borderColor: "orange",
    color: "orange",
    fontWeight: "bold",
  };

  return (
    <div className="events">
      <div className="content-events">
        <div className="firstSection">
          <div className="firstTitle">UPCOMING EVENTS</div>
          <div className="firstEventBtn">
            <Button
              variant="outlined"
              size="large"
              style={changeBtnSyle}
              onClick={() => {
                navigate("/addEvent");
              }}
            >
              ADD A NEW EVENT
            </Button>
          </div>
          <div className="firstContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec
            nunc finibus, tempor dolor fermentum, tempus risus. Ut eu urna
            efficitur libero eleifend tristique. Fusce sed pellentesque tellus.
            Vivamus et sem facilisis, auctor eros eget, venenatis nunc.
          </div>
        </div>

        <EventDetails eventsDetails={events} />
      </div>
    </div>
  );
}

export default AllEvents;
