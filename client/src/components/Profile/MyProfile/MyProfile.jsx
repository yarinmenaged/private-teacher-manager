import style from '../Profile.module.css';
import { Link } from "react-router-dom";
import NavBar from '../../NavBar/NavBarConnector';
import { useState } from 'react'
import cx from 'classnames';
import { useCallback } from 'react';

function MyProfile({ userInfo, editAboutAction }) {

    const [showTextbox, setShowTextbox] = useState(false);

    const editAbout = useCallback((newAbout) => {
        editAboutAction(newAbout);
        setShowTextbox(false);
    }, [setShowTextbox, editAboutAction]);

    const setTextboxDisplay = useCallback(() => {
        setShowTextbox(showTextbox => !showTextbox);
    }, [setShowTextbox]);

    return (
        <div>
            <NavBar />
            <div className={style.inLine}>
                <div className={style.column}>
                    <h3>Teacher Profile</h3>
                    <p>name: {userInfo.Name}</p>
                    <p>email: {userInfo.Email}</p>
                    <p>mobile number: {userInfo.Phone}</p>
                    <Link to="/home" >back</Link>
                </div>
                <div className={cx(style.column, style.aboutCont)}>
                    <h3>About</h3>
                    <p>{userInfo.About}</p>
                    <p className={style.edit} onClick={setTextboxDisplay}>edit</p>
                    {
                        showTextbox
                            ? <EditAboutComponent editAbout={editAbout} About={userInfo.About} />
                            : <div />
                    }
                </div>
            </div>
        </div>
    );
}

function EditAboutComponent({ editAbout, About }) {
    const [inputValue, setInputValue] = useState("");
    return (
        <div>
            <textarea rows="6" cols="50" defaultValue={About} className={style.textbox}
                onChange={(event) => setInputValue(event.target.value)} type="text" /><br />
            <button className={style.button} onClick={() => editAbout(inputValue)}>submit</button>
        </div>
    );
}

export default MyProfile