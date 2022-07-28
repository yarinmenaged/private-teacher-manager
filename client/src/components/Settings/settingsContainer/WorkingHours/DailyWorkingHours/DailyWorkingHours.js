import React from "react";

function DailyWorkingHours({ day }) {
  return (
    <li>
      {day}
      <select name="start-time" id={`${day}-start-time`}>
        {[...Array(24).keys()].map((startTime) => {
          const formattedStartTime =
            startTime < 10 ? `0${startTime}:00` : `${startTime}:00`;
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

      <select name="end-time" id={`${day}-end-time`}>
        {[...Array(24).keys()].map((endTime) => {
          const formattedEndTime =
            endTime < 10 ? `0${endTime}:00` : `${endTime}:00`;
          return (
            <option value={formattedEndTime} key={`${day}-${formattedEndTime}`}>
              {formattedEndTime}
            </option>
          );
        })}
      </select>
    </li>
  );
}

export { DailyWorkingHours };
