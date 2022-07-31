import React from "react";
import style from "./Event.module.css";

function Event({ event }) {
  // A function that registers a student to a certain appointment
  const onRegister = () => {
    console.log("Registered to an appointment");
  };

  return (
    <li className="event-item">
      8:00 - 8:45
      <button onClick={onRegister}></button>
    </li>
  );
}

module.exports = Event();
