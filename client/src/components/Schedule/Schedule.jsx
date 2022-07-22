import style from './Schedule.module.css';
import { Link } from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import CalendarContainer from './CalendarContainer/CalendarContainer';

function Schedule() {

    return (
        <div>
            <NavBar />
            <CalendarContainer></CalendarContainer>
            <Link to="/home" >back</Link>
        </div>
    );
}

export default Schedule