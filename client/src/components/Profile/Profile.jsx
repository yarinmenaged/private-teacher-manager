import style from './Profile.module.css';
import { Link } from "react-router-dom";
import NavBar from '../NavBar/NavBar';

function Profile() {

    const teacher = {
        name: "yarin",
        email: "yarinmenaged@gmail.com",
        mobile: "0509209192",
        about: "i`m yarin and i`m studying in mondayU."
    };

    return (
        <div>
            <NavBar />
            <div className={style.inLine}>
                <div className={style.column}>
                    <h3>Teacher Profile</h3>
                    <p>name: {teacher.name}</p>
                    <p>email: {teacher.email}</p>
                    <p>mobile number: {teacher.mobile}</p>
                    <Link to="/home" >back</Link>
                </div>
                <div className={style.column}>
                    <h3>About</h3>
                    <p>{teacher.about}</p>
                    <p style={{color: "blueviolet"}}>edit</p>
                </div>
            </div>
        </div>
    );
}

export default Profile