import style from "../Profile.module.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../../NavBar/NavBarConnector";
import SearchTeacher from "../../SearchTeacher/SearchTeacherConnector";
import { useCallback } from "react";
import { Icon } from 'monday-ui-react-core';
import {
    Email, PersonRound, Mobile, Description, Academy
} from "monday-ui-react-core/dist/allIcons";

function SearchProfile({ chosenTeacher, SetCalendarToUserAction }) {

    const navigate = useNavigate();

    const goToCalender = useCallback(() => {
        SetCalendarToUserAction(chosenTeacher.id);
        navigate("/schedule");
    }, [chosenTeacher, SetCalendarToUserAction, navigate]);

    return (
        <div>
            <NavBar />
            <SearchTeacher multipleOptions={true} />
            {
                chosenTeacher &&
                <div className={style.flex}>
                    <div className={style.column}>
                        <h3><Icon iconSize={30} icon={Academy} /> Teacher Profile</h3>
                        <p><Icon iconSize={20} icon={PersonRound} /> {chosenTeacher.Name}</p>
                        <p><Icon iconSize={20} icon={Email} /> {chosenTeacher.Email}</p>
                        <p><Icon iconSize={20} icon={Mobile} /> {chosenTeacher.Phone}</p>
                    </div>

                    <div className={style.column}>
                        <h3><Icon icon={Description} /> About</h3>
                        <p>{chosenTeacher.About}</p>
                        <h3>I'm teaching:</h3>
                        <div className={style.flex}>
                            {
                                chosenTeacher.subjects.map((subject, index) =>
                                    <div key={index} style={{ marginRight: "20px" }}>{subject.Name}</div>
                                )
                            }
                        </div><br />
                        <button className={style.button}
                            onClick={goToCalender}>Schedule a lesson now!</button><br />
                    </div>
                </div>
            }
        </div>
    );
}

export default SearchProfile;
