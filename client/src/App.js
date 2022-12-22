import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Contacts from "./components/nav/Contacts";
import AddNewEvent from "./components/events/AddNewEvent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Contacts />} />

          <Route path="/addEvent" exact element={<AddNewEvent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
