import SearchTeacher from "../SearchTeacher/SearchTeacherConnector";
import { Link } from "react-router-dom";
import NavBar from '../NavBar/NavBarConnector';
import CalendarContainerConnector from './CalendarContainer/CalendarContainerConnector';
import { useEffect } from "react";
import USER_TYPE from "../NavBar/Constants";

function Schedule({ chosenTeacher, SetCalendarToUserAction, userInfo }) {

    useEffect(() => {
        chosenTeacher 
        ? SetCalendarToUserAction(chosenTeacher.id)
        : SetCalendarToUserAction(userInfo.id);
    }, [chosenTeacher]);

    return (
        <div>
            <NavBar />
            {
                userInfo.Type === USER_TYPE.Student
                ? <SearchTeacher />
                : <div />
            }
            <CalendarContainerConnector></CalendarContainerConnector>
            <Link to="/home" >back</Link>
        </div>
    );
}

export default Schedule