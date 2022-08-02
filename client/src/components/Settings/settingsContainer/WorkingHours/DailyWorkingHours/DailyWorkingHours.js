import React, { useCallback, useRef, useState } from "react";
import style from "./DailyWorkingHours.module.css";

function DailyWorkingHours({ day, setDailyWorkingHoursAction }) {
  const [show_end, setShowEnd] = useState(false);
  const start_ref = useRef(null);
  const end_ref = useRef(null);
  const handle_change_day_pref = useCallback(() => {
    setDailyWorkingHoursAction(day, start_ref?.current.value, end_ref?.current.value);
  }, [setDailyWorkingHoursAction]);

  return (
    <li className={style.dayLi}>
      {day}
      <input type="time" id={`${day}-start-time`} onChange={() => setShowEnd(true)} ref={start_ref}></input>-
      { show_end && <input type="time" id={`${day}-end-time`} onChange={handle_change_day_pref} ref={end_ref}></input> }
    </li>
  );
}

export { DailyWorkingHours };
