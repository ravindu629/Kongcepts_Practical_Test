import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Users.css";

export default function UserLogin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/users/validate", user)
      .then((res) => {
        if (res.status === 200) {
          alert("User validated");
          navigate("/home");
        }
      })
      .catch((err) => {
        alert("Login details are invalid, Please try again!!!");
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setUser((preValue) => {
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
          <div className="formHeader">User Login</div>
          <form onSubmit={sendData}>
            <div className="form-group row formElement">
              <label for="" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id=""
                  name="email"
                  placeholder="Enter your email address"
                  onChange={handleChange}
                  value={user.email}
                  required
                />
              </div>
            </div>

            <div className="form-group row formElement">
              <label for="" className="col-sm-2 col-form-label">
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id=""
                  name="password"
                  placeholder="Enter password"
                  onChange={handleChange}
                  value={user.password}
                  required
                />
              </div>
            </div>

            <br />
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-dark btn-lg formBtn">
                  Login
                </button>
              </div>
              <br />
              <div className="formMessage">
                If you don't have an account{" "}
                <a href="/addUser">Register here</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
