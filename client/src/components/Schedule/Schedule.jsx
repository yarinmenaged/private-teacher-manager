import SearchTeacher from "../SearchTeacher/SearchTeacherConnector";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBarConnector";
import CalendarContainerConnector from "./CalendarContainer/CalendarContainerConnector";
import WeekSelectorConnector from "./CalendarContainer/WeekSelector/WeekSelectorConnector";
import { useEffect } from "react";
import USER_TYPE from "../NavBar/Constants";
import { Flex, Icon } from "monday-ui-react-core";
import style from "./Schedule.module.css";
import { Calendar } from "monday-ui-react-core/dist/allIcons";
import WeeklyIncomeConnector from "./WeeklyIncome/WeeklyIncomeConnector";
//import WeeklyIncome from "./WeeklyIncome/WeeklyIncome";

function Schedule({
  chosenTeacher,
  SetCalendarToUserAction,
  userInfo,
  GetSelectedTeacherSettingsAction,
}) {
  useEffect(() => {
    if (chosenTeacher) SetCalendarToUserAction(chosenTeacher.id);
  }, [chosenTeacher, SetCalendarToUserAction]);

  useEffect(() => {
    if (chosenTeacher) {
      SetCalendarToUserAction(chosenTeacher.id);
      GetSelectedTeacherSettingsAction(chosenTeacher.id);
    }
  }, [
    chosenTeacher,
    SetCalendarToUserAction,
    GetSelectedTeacherSettingsAction,
  ]);

  return (
    <div>
      <NavBar />

      <div className={style.calendar_controls}>
        <div className={style.title}>
          <Icon iconSize={25} icon={Calendar} />
          <h2>
            {chosenTeacher
              ? `Schedule of ${chosenTeacher.Name}`
              : "My Schedule"}
          </h2>
        </div>
        <WeekSelectorConnector></WeekSelectorConnector>
        {userInfo.Type === USER_TYPE.Teacher ? (
          <WeeklyIncomeConnector />
        ) : (
          <></>
        )}
        {userInfo.Type === USER_TYPE.Student && (
          <SearchTeacher mySchedule={true} />
        )}
      </div>
      <CalendarContainerConnector></CalendarContainerConnector>
      <Link to="/home">back</Link>
    </div>
  );
}

export default Schedule;
