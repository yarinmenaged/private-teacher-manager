import React, { useCallback, useEffect } from "react";
import ConstantsCalendarContainer from "../../../Schedule/CalendarContainer/Constants";
import style from "./WorkingHours.module.css";
import DailyWorkingHoursConnector from "./DailyWorkingHours/DailyWorkingHoursConnector";
import _ from "lodash";

function WorkingHours({ setSettingsForTeacherAction, settings, GetSettingsAction, setLessonLengthAction }) {

  useEffect(() => {
    GetSettingsAction();
  }, [GetSettingsAction])

  const handleSaveChanges = useCallback((event) => {
    event.preventDefault();
    setSettingsForTeacherAction(settings);
  },[setSettingsForTeacherAction, settings]);

  const handle_change_lesson_length = useCallback((event) => {
    event.preventDefault();
    setLessonLengthAction(event.currentTarget.value);
  },[setLessonLengthAction]);

  return (
    <div className={style.container}>
      <p> Select your preferred lesson's length</p>
      <select name="lesson-length" id="lesson-length" defaultValue={settings.lessonLength} onChange={handle_change_lesson_length}>
        {_.range(15, 75, 15).map((time) => {
            return <option value={time} key={`lesson-length-${time}`}>{time}</option>;
        })}
      </select>
      <p>Select the hours in which you are unavailable to teach</p>
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
