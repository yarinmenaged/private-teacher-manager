
import { Link } from "react-router-dom";
import NavBar from '../NavBar/NavBarConnector';
import CalendarContainerConnector from './CalendarContainer/CalendarContainerConnector';
import { Heading } from 'monday-ui-react-core';

function Schedule({ }) {
   
    return (
        <div>
            <NavBar />
            <CalendarContainerConnector></CalendarContainerConnector>
            <Link to="/home" >back</Link>
        </div>
    );
}

export default Schedule