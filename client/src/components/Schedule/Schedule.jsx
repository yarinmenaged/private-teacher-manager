import SearchTeacher from "../SearchTeacher/SearchTeacherConnector";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBarConnector";
import CalendarContainerConnector from "./CalendarContainer/CalendarContainerConnector";
import { useEffect } from "react";
import USER_TYPE from "../NavBar/Constants";
import { Flex, Icon } from 'monday-ui-react-core';
import { Calendar } from "monday-ui-react-core/dist/allIcons";

function Schedule({ chosenTeacher, SetCalendarToUserAction, userInfo, GetSelectedTeacherSettingsAction }) {
  useEffect(() => {
    if(chosenTeacher)
        SetCalendarToUserAction(chosenTeacher.id);
  }, [chosenTeacher, SetCalendarToUserAction]);

    useEffect(() => {
        if(chosenTeacher){
            SetCalendarToUserAction(chosenTeacher.id);
            GetSelectedTeacherSettingsAction(chosenTeacher.id);
        }
    }, [chosenTeacher, SetCalendarToUserAction, GetSelectedTeacherSettingsAction]);


    return (
        <div>
            <NavBar />
            {
                userInfo.Type === USER_TYPE.Student &&
                <SearchTeacher mySchedule={true} />
            }
            <Flex justify={Flex.justify.CENTER} >
                <Icon iconSize={25} icon={Calendar} />
                <h2>
                    {
                        chosenTeacher
                            ? `Schedule of ${chosenTeacher.Name}`
                            : "My Schedule"
                    }
                </h2>
            </Flex>
            <CalendarContainerConnector></CalendarContainerConnector>
            <Link to="/home" >back</Link>
        </div>
    );
}

export default Schedule;
