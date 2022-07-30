import style from "../Profile.module.css";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../NavBar/NavBarConnector";
import SearchTeacher from "../../SearchTeacher/SearchTeacherConnector";
import { useCallback } from "react";

function SearchProfile({ chosenTeacher, SetCalendarToUserAction }) {

	const navigate = useNavigate();

    const goToCalender = useCallback(() => {
        SetCalendarToUserAction(chosenTeacher.id);
        navigate("/schedule");
    }, [chosenTeacher, SetCalendarToUserAction, navigate]);

    return (
        <div>
            <NavBar />
            <SearchTeacher />
            {
                chosenTeacher ?
                    <div className={style.flex}>
                        <div className={style.column}>
                            <h3>Teacher Profile</h3>
                            <p>name: {chosenTeacher.Name}</p>
                            <p>email: {chosenTeacher.Email}</p>
                            <p>mobile number: {chosenTeacher.Phone}</p>
                            <Link to="/home" >back</Link>
                        </div>
                        <div className={style.column}>
                            <h3>About</h3>
                            <p>{chosenTeacher.About}</p>
                            <h3>I'm teaching:</h3>
                            <div className={style.flex}>
                                {
                                    chosenTeacher.subjects.map((subject, index) =>
                                        <div key={index} style={{marginRight: "20px"}}>{subject.Name}</div>
                                    )
                                }
                            </div><br />
                            <button className={style.button}
                                onClick={goToCalender}>Schedule a lesson now!</button><br />
                        </div>
                    </div>
                    : <div />
            }
        </div>
    );
}

export default SearchProfile;
