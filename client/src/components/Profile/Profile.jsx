import style from './Profile.module.css';
import { Link } from "react-router-dom";
import NavBar from '../NavBar/NavBarConnector';
import { useState } from 'react'
import cx from 'classnames';

function Profile({ userInfo, editAboutAction }) {

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
            <div className={style.inLine}>
                <div className={style.column}>
                    <h3>{userInfo.Type} Profile</h3>
                    <p>name: {userInfo.Name}</p>
                    <p>email: {userInfo.Email}</p>
                    <p>mobile number: {userInfo.Phone}</p>
                    <Link to="/home" >back</Link>
                </div>
                <div className={cx(style.column, style.aboutCont)}>
                    <h3>About</h3>
                    <p>{userInfo.About}</p>
                    <p className={style.edit} onClick={setTextboxDisplay}>edit</p>
                    {showTextbox ? <EditAboutComponent editAbout={editAbout} userInfo={userInfo} /> : <div />}
                </div>
            </div>
        </div>
    );
}

function EditAboutComponent({ editAbout, userInfo }) {
    const [inputValue, setInputValue] = useState("");
    return (
        <div>
            <textarea rows="6" cols="50" defaultValue={userInfo.About} className={style.textbox}
                onChange={(event) => setInputValue(event.target.value)} type="text" /><br />
            <button className={style.submit} onClick={() => editAbout(inputValue)}>submit</button>
        </div>
    );
}

export default Profile