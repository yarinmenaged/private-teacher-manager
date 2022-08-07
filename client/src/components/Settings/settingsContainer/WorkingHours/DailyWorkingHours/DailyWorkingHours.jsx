import React, { useCallback, useRef, useEffect } from "react";
import ConstantsCalendarContainer from "../../../../Schedule/CalendarContainer/Constants";
import style from "./DailyWorkingHours.module.css";
import { Heading } from 'monday-ui-react-core';
import { FaTimes } from 'react-icons/fa';

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

  const rest_click = useCallback(() => {
    setDailyWorkingHoursAction(day, "00:00", "00:00");
  }, [setDailyWorkingHoursAction, day]);

  return (
    <li className={style.dayLi}>
      <Heading type={Heading.types.h5} value={day} className={style.title} />
      <input type="time" className={style.time} onChange={handle_change_day_pref} ref={start_ref}></input>
      <input type="time" className={style.time} onChange={handle_change_day_pref} ref={end_ref}></input>
      <div className={style.rest_button} onClick={rest_click}>
        <FaTimes></FaTimes>
      </div>
    </li>
  );
}

export { DailyWorkingHours };
