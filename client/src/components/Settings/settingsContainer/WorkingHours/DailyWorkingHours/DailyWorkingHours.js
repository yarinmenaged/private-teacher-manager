import React from "react";
import style from "./DailyWorkingHours.module.css";

function DailyWorkingHours({ day }) {
  let minutes = [
    "00",
    "05",
    "10",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "45",
    "50",
    "55",
  ];

  return (
    <li className={style.dayLi}>
      {day}
      <select name="start-time" id={`${day}-start-time-hour`}>
        {[...Array(24).keys()].map((startTime) => {
          const formattedStartTime =
            startTime < 10 ? `0${startTime}` : `${startTime}`;
          return (
            <option
              value={formattedStartTime}
              key={`${day}-${formattedStartTime}`}
            >
              {formattedStartTime}
            </option>
          );
        })}
      </select>
      :
      <select name="start-time" id={`${day}-start-time-minute`}>
        {minutes.map((startMinute) => {
          return (
            <option value={startMinute} key={`${day}-${startMinute}`}>
              {startMinute}
            </option>
          );
        })}
        ;
      </select>
      -
      <select name="end-time" id={`${day}-end-time-hour`}>
        {[...Array(24).keys()].map((endTime) => {
          const formattedEndTime = endTime < 10 ? `0${endTime}` : `${endTime}`;
          return (
            <option value={formattedEndTime} key={`${day}-${formattedEndTime}`}>
              {formattedEndTime}
            </option>
          );
        })}
      </select>
      :
      <select name="end-time" id={`${day}-end-time-minute`}>
        {minutes.map((endMinute) => {
          return (
            <option value={endMinute} key={`${day}-${endMinute}`}>
              {endMinute}
            </option>
          );
        })}
        ;
      </select>
    </li>
  );
}

export { DailyWorkingHours };
