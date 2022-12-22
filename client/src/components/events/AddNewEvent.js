import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Events.css";

export default function AddNewEvent() {
  const [event, setEvent] = useState({
    postedTime: "",
    description: "",
    owner: "",
    title: "",
    imageUrl: "",
  });

  let navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/events", event)
      .then(() => {
        alert("Event added");
        navigate("/addEvent");
      })
      .catch((err) => {
        alert(err);
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setEvent((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <div className="formContent">
        <div className="formBackground">
          <div className="formHeader">Add New Event Details</div>
          <form onSubmit={sendData}>
            <div className="form-group row formElement">
              <label for="" className="col-sm-2 col-form-label">
                Posted Time
              </label>
              <div className="col-sm-10">
                <input
                  type="datetime-local"
                  className="form-control"
                  id=""
                  name="postedTime"
                  onChange={handleChange}
                  value={event.postedTime}
                  required
                />
              </div>
            </div>

            <div className="form-group row formElement">
              <label for="" className="col-sm-2 col-form-label">
                Description
              </label>
              <div className="col-sm-10">
                <textarea
                  type="textArea"
                  className="form-control"
                  rows="6"
                  id=""
                  name="description"
                  placeholder="Enter event description"
                  onChange={handleChange}
                  value={event.description}
                  required
                />
              </div>
            </div>

            <div className="form-group row formElement">
              <label for="" className="col-sm-2 col-form-label">
                Title
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  name="title"
                  placeholder="Enter event title"
                  onChange={handleChange}
                  value={event.title}
                  required
                />
              </div>
            </div>

            <div className="form-group row formElement">
              <label for="" className="col-sm-2 col-form-label">
                Owner Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  name="owner"
                  placeholder="Enter owner name"
                  onChange={handleChange}
                  value={event.owner}
                  required
                />
              </div>
            </div>

            <div className="form-group row formElement">
              <label for="" className="col-sm-2 col-form-label">
                Image URL
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  name="imageUrl"
                  placeholder="Enter Image URL"
                  onChange={handleChange}
                  value={event.imageUrl}
                  required
                />
              </div>
            </div>

            <br />
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-dark btn-lg formBtn">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
