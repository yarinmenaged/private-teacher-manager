import style from './Schedule.module.css';
import { Link } from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import CalendarContainerConnector from './CalendarContainer/CalendarContainerConnector';

function Schedule() {

    return (
        <div>
            <NavBar />
            <CalendarContainerConnector></CalendarContainerConnector>
            <Link to="/home" >back</Link>
        </div>
    );
}

export default Schedule