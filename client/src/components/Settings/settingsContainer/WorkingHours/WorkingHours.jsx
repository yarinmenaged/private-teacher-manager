import React from "react";
import { DailyWorkingHours } from "./DailyWorkingHours/DailyWorkingHours";
import ConstantsCalendarContainer from "../../../Schedule/CalendarContainer/Constants";
import style from "./WorkingHours.module.css";

function WorkingHours() {
  const handleSaveChanges = (event) => {
    event.preventDefault();
  };

  return (
    <div className={style.container}>
      <p> Select your preffered leson's length</p>
      <select name="lesson-length" id="lesson-length">
        {[5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60].map((time) => {
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
