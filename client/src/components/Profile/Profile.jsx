import style from './Profile.module.css';
import { Link } from "react-router-dom";
import NavBar from '../NavBar/NavBarConnector';
import { useState } from 'react'
import cx from 'classnames';
import SearchTeacher from '../SearchTeacher/SearchTeacherConnector';

function Profile({userInfo, editAboutAction, chosenTeacher }) {

    const [showTextbox, setShowTextbox] = useState(false);

    const editAbout = (newAbout) => {
        editAboutAction(newAbout);
        setShowTextbox(false);
    }

    const setTextboxDisplay = () => {
        setShowTextbox(showTextbox => !showTextbox);
    }

    return (
        <div>
            <NavBar />
            <SearchTeacher />
            { chosenTeacher === undefined ? <div /> :
                <div className={style.inLine}>
                    <div className={style.column}>
                        <h3>Teacher Profile</h3>
                        <p>name: {chosenTeacher.Name}</p>
                        <p>email: {chosenTeacher.Email}</p>
                        <p>mobile number: {chosenTeacher.Phone}</p>
                        <Link to="/home" >back</Link>
                    </div>
                    <div className={cx(style.column, style.aboutCont)}>
                        <h3>About</h3>
                        <p>{userInfo.About}</p>
                        { (userInfo.Type === 'Student') ? <p className={style.edit} onClick={setTextboxDisplay}>edit</p>: <div />}
                        {(showTextbox) ? <EditAboutComponent editAbout={editAbout} About={chosenTeacher.About} /> : <div />}
                    </div>
                </div>
            }
        </div>
    );
}

function EditAboutComponent({ editAbout, About }) {
    const [inputValue, setInputValue] = useState("");
    return (
        <div>
            <textarea rows="6" cols="50" defaultValue={About} className={style.textbox}
                onChange={(event) => setInputValue(event.target.value)} type="text" /><br />
            <button className={style.submit} onClick={() => editAbout(inputValue)}>submit</button>
        </div>
    );
}

export default Profile