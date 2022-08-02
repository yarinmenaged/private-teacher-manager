import React, { useCallback, useRef, useEffect } from "react";
import ConstantsCalendarContainer from "../../../../Schedule/CalendarContainer/Constants";
import style from "./DailyWorkingHours.module.css";

function DailyWorkingHours({ day, setDailyWorkingHoursAction, working_hours }) {
  const start_ref = useRef(null);
  const end_ref = useRef(null);

  useEffect(() => {
    const day_index = ConstantsCalendarContainer.DAYS_IN_WEEK.indexOf(day);
    if(start_ref.current && end_ref.current) {
      start_ref.current.value = working_hours[day_index].start;
      end_ref.current.value = working_hours[day_index].end;
    }
  }, [day, working_hours]);

  const handle_change_day_pref = useCallback(() => {
    setDailyWorkingHoursAction(day, start_ref.current.value, end_ref.current.value);
  }, [setDailyWorkingHoursAction, day]);

  return (
    <li className={style.dayLi}>
      {day}
      <input type="time" id={`${day}-start-time`} onChange={handle_change_day_pref} ref={start_ref}></input>-
      <input type="time" id={`${day}-end-time`} onChange={handle_change_day_pref} ref={end_ref}></input>
    </li>
  );
}

export { DailyWorkingHours };
