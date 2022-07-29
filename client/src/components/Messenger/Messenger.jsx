import style from './Messenger.module.css';
import { Link } from "react-router-dom";
import NavBar from '../NavBar/NavBarConnector';

function Messenger() {
    return (
        <div>
            <NavBar />
            <p>Messenger</p>
            <Link to="/home" >back</Link>
        </div>
    );
}

export default Messenger