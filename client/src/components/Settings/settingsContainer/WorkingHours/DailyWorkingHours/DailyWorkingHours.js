import React, { useState } from "react";
import style from "./DailyWorkingHours.module.css";

function DailyWorkingHours({ day }) {
  const handleChange = (
    startTime,
    formattedStartTime,
    endTime,
    formattedEndTime,
    startMinute,
    endMinute
  ) => {
    if (startTime > endTime) {
      window.alert("Start Time is later than endTime");
    } else {
      const workingHoursString = ``;
    }
  };

  return (
    <li className={style.dayLi}>
      {day}
      <input type="time" id={`${day}-start-time`}></input>-
      <input type="time" id={`${day}-end-time`}></input>
    </li>
  );
}

export { DailyWorkingHours };
