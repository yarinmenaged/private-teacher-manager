import style from './Schedule.module.css';
import { Link } from "react-router-dom";
import NavBar from '../NavBar/NavBarConnector';

function Schedule() {

    return (
        <div>
            <NavBar />
            <p>schedule</p>
            <Link to="/home" >back</Link>
        </div>
    );
}

export default Schedule