import style from './Settings.module.css';
import { Link } from "react-router-dom";
import NavBar from '../NavBar/NavBarConnector';

function Settings() {

    return (
        <div>
            <NavBar />
            <p>settings</p>
            <Link to="/home" >back</Link>
        </div>
    );
}

export default Settings