import React, { useCallback, useEffect, useState } from "react";
import ConstantsCalendarContainer from "../../../Schedule/CalendarContainer/Constants";
import style from "./WorkingHours.module.css";
import DailyWorkingHoursConnector from "./DailyWorkingHours/DailyWorkingHoursConnector";
import _ from "lodash";
import { Heading, Dropdown, Button } from 'monday-ui-react-core';

function WorkingHours({ setSettingsForTeacherAction, settings, GetSettingsAction, setLessonLengthAction }) {
  const [lesson_option, setLessonOption] = useState([]);
  useEffect(() => {
    GetSettingsAction();
  }, [GetSettingsAction]);

  useEffect(() => {
    setLessonOption([..._.range(15, 75, 15).map((time) => {
      return { label: `${time} min`, value: `${time}` };
    })]);
  }, []);

  const handleSaveChanges = useCallback((event) => {
    event.preventDefault();
    setSettingsForTeacherAction(settings);
  }, [setSettingsForTeacherAction, settings]);

  const handle_change_lesson_length = useCallback((event) => {
    setLessonLengthAction(event.value);
  }, [setLessonLengthAction]);

  return (
    <div className={style.container}>
      <div className={style.select_lesson_length_container}>
        <Heading type={Heading.types.h2} value="Select your preferred lesson's length" />
        <Dropdown
          className={style.select_box}
          options={lesson_option}
          onChange={handle_change_lesson_length}
          placeholder="Select Lesson Length"
          defaultValue={settings.lessonLength ? [{ label: `${settings.lessonLength} min`, value: `${settings.lessonLength}` }] : []}
        />
      </div>
      <Heading type={Heading.types.h2} value="Select the hours in which you are unavailable to teach" />
      <ul className={style.hoursContainer}>
        {ConstantsCalendarContainer.DAYS_IN_WEEK.map((day) => {
          return <DailyWorkingHoursConnector day={day} key={`${day}-working-days`} />;
        })}
      </ul>
      <Button onClick={handleSaveChanges}>Save Changes</Button>
    </div>
  );
}

export default WorkingHours;
