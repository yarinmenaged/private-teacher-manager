import style from "../Profile.module.css";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../NavBar/NavBarConnector";
import cx from "classnames";
import SearchTeacher from "../../SearchTeacher/SearchTeacherConnector";
import { useCallback } from "react";

function SearchProfile({ chosenTeacher, SetCalendarToUserAction }) {
	const navigate = useNavigate();

	const goToCalender = useCallback(() => {
		SetCalendarToUserAction(chosenTeacher.id);
		navigate("/schedule");
	}, [SetCalendarToUserAction, chosenTeacher.id, navigate]);

	return (
		<div>
			<NavBar />
			<SearchTeacher />
			{chosenTeacher ? (
				<div className={style.inLine}>
					<div className={style.column}>
						<h3>Teacher Profile</h3>
						<p>name: {chosenTeacher.Name}</p>
						<p>email: {chosenTeacher.Email}</p>
						<p>mobile number: {chosenTeacher.Phone}</p>
						<Link to="/home">back</Link>
					</div>
					<div className={cx(style.column, style.aboutCont)}>
						<h3>About</h3>
						<p>{chosenTeacher.About}</p>
						<button className={style.button} onClick={goToCalender}>
							Schedule a lesson now!
						</button>
						<br />
					</div>
				</div>
			) : (
				<div />
			)}
		</div>
	);
}

export default SearchProfile;
