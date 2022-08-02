import React, { useState } from "react";
import { DailyWorkingHours } from "./DailyWorkingHours/DailyWorkingHours";
import ConstantsCalendarContainer from "../../../Schedule/CalendarContainer/Constants";
import style from "./WorkingHours.module.css";
import { useRef } from "react";
import DailyWorkingHoursConnector from "./DailyWorkingHours/DailyWorkingHoursConnector";

function WorkingHours({ setSettingsForTeacherAction, settings }) {
  const lesson_length_ref = useRef(null);

  const handleSaveChanges = (event) => {
    event.preventDefault();
    const length = lesson_length_ref.current.value;
    setSettingsForTeacherAction(settings);
  };

  return (
    <div className={style.container}>
      <p> Select your preferred lesson's length</p>
      <select name="lesson-length" id="lesson-length" ref={lesson_length_ref}>
        {[15, 20, 25, 30, 35, 40, 45, 50, 55, 60].map((time) => {
          return <option value={time}>{time}</option>;
        })}
      </select>
      <p>Select the hours in which you are free to teach</p>
      <ul className={style.hoursContainer}>
        {ConstantsCalendarContainer.DAYS_IN_WEEK.map((day) => {
          return <DailyWorkingHoursConnector day={day} key={`${day}-working-days`} />;
        })}
      </ul>
      <button onClick={handleSaveChanges}>Save Changes</button>
    </div>
  );
}

export default WorkingHours;
