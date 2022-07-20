import style from './NavBar.module.css';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className={style.navBar}>
            <Link to="/schedule" className={style.button}>Schedule</Link>
            <Link to="/messenger" className={style.button}>Messenger</Link>
            <Link to="#" className={style.button}>Details</Link>
            <Link to="#" className={style.button}>Settings</Link>
            <Link to="/" className={style.button}>Log Out</Link>
        </div>
    );
}

export default NavBar;