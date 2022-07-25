import style from './NavBar.module.css';
import { Link, useNavigate } from "react-router-dom";

function NavBar({ Type, logOutAction }) {

    const navigate = useNavigate();

    const logOut = (event) => {
        event.preventDefault();
        if (window.confirm("Are you sure you want to log out?")) {
            logOutAction();
            navigate('/login');
        }
    }

    return (
        <div className={style.navBar}>
            <Link to="/schedule" className={style.button}>Schedule</Link>
            <Link to="/messenger" className={style.button}>Messenger</Link>
            {
                Type === "Teacher" 
                    ? <Link to="/my-profile" className={style.button}> My Profile</Link>
                    : <Link to="/search-profile" className={style.button}> Search Teacher</Link>
            }
            <Link to="/settings" className={style.button}>Settings</Link>
            <a href='' onClick={(event) => logOut(event)} className={style.button}>Log Out</a>
        </div>
    );
}

export default NavBar;