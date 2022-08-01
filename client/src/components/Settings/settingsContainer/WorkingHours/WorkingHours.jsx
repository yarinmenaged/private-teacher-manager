import React, { useState } from "react";
import { DailyWorkingHours } from "./DailyWorkingHours/DailyWorkingHours";
import ConstantsCalendarContainer from "../../../Schedule/CalendarContainer/Constants";
import style from "./WorkingHours.module.css";

function WorkingHours() {
  const handleSaveChanges = (event) => {
    event.preventDefault();
    const length = document.getElementById("lesson-length").value;
    // the func below needs to be written
    //setLessonLength(length);
  };

  return (
    <div className={style.container}>
      <p> Select your preffered leson's length</p>
      <select name="lesson-length" id="lesson-length">
        {[15, 20, 25, 30, 35, 40, 45, 50, 55, 60].map((time) => {
          return <option value={time}>{time}</option>;
        })}
      </select>
      <p>Select the hours in which you are free to teach</p>
      <ul className={style.hoursContainer}>
        {ConstantsCalendarContainer.DAYS_IN_WEEK.map((day) => {
          return <DailyWorkingHours day={day} key={`${day}-working-days`} />;
        })}
      </ul>
      <button onClick={handleSaveChanges}>Save Changes</button>
    </div>
  );
}

export default WorkingHours;
