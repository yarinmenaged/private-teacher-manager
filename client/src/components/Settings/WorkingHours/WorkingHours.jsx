import React from "react";
import { DailyWorkingHours } from "./DailyWorkingHours/DailyWorkingHours";
import ConstantsCalendarContainer from "../../Schedule/CalendarContainer/Constants";
import style from "./WorkingHours.module.css";

function WorkingHours() {
  const handleSaveChanges = (event) => {
    event.preventDefault();
  };

  return (
    <div>
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
