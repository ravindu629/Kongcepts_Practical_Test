import React from "react";
import "./Events.css";

export default function EventDetails(props) {
  const events = props.eventsDetails;

  return (
    <div>
      {events.map((event, index) => {
        return (
          <div className="eventsGrid">
            <img className="eventImg" src={event.imageUrl} />
            <div className="eventData" key={event._id}>
              <div className="eventInfo">
                <h3>
                  <i>{event.title.substring(0, 60) + "..."}</i>
                </h3>
                <h4>
                  <i> By {event.owner}</i>
                </h4>
                <p>{event.postedTime}</p>
                <p>{event.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
