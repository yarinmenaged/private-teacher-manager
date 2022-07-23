import style from './Profile.module.css';
import { Link } from "react-router-dom";
import NavBar from '../NavBar/NavBarConnector';
import { useState } from 'react'

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

                <div className={style.column}>
                    <h3>About</h3>
                    <p>{userInfo.About}</p>
                    <p className={style.edit} onClick={setTextboxDisplay}>edit</p>
                    {showTextbox ? <EditAboutComponent editAbout={editAbout} /> : <div />}
                </div>

            </div>
        </div>
    );
}

function EditAboutComponent({ editAbout }) {
    const [inputValue, setInputValue] = useState("");
    return (
        <div>
            <p>insert your new about:</p>
            <input onChange={(event) => setInputValue(event.target.value)} type="text" />
            <button onClick={() => editAbout(inputValue)}>submit</button>
        </div>
    );
}

export default Profile