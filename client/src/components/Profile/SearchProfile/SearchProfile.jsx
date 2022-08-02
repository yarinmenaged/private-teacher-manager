import style from "../Profile.module.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../../NavBar/NavBarConnector";
import cx from "classnames";
import SearchTeacher from "../../SearchTeacher/SearchTeacherConnector";
import { useCallback, useState } from "react";
import { Icon, Flex, Dropdown } from "monday-ui-react-core";
import { BsWhatsapp } from "react-icons/bs";
import styles from "./SearchProfile.module.css";
import {
	Email,
	PersonRound,
	Description,
	Academy,
} from "monday-ui-react-core/dist/allIcons";

function SearchProfile({
	chosenTeacher,
	SetCalendarToUserAction,
	selectSubjectAction,
	resetSubjectsAction,
	subjectsOptions,
}) {
	const navigate = useNavigate();

	const [displayDropdown, setDisplayDropdown] = useState(false);

	const goToCalender = useCallback(() => {
		SetCalendarToUserAction(chosenTeacher.id);
		navigate("/schedule");
	}, [chosenTeacher, SetCalendarToUserAction, navigate]);

	const selectSubject = useCallback(
		(event) => {
			resetSubjectsAction();
			selectSubjectAction({ id: event.id, value: event.value });
		},
		[selectSubjectAction, resetSubjectsAction]
	);

	return (
		<div>
			<NavBar />
			<SearchTeacher multipleOptions={true} />
			{chosenTeacher && (
				<div className={style.flex}>
					<div className={style.column}>
						<h3>
							<Icon iconSize={30} icon={Academy} /> Teacher Profile
						</h3>
						<p>
							<Icon iconSize={20} icon={PersonRound} /> {chosenTeacher.Name}
						</p>
						<p>
							<Icon iconSize={20} icon={Email} />
							<a href={`mailto:${chosenTeacher.Email}`}>
								{" "}
								{chosenTeacher.Email}
							</a>
						</p>
						<p>
							<BsWhatsapp className={styles.whatsapp} />
							<a
								href={`https://api.WhatsApp.com/send?phone=${chosenTeacher.Phone}`}
							>
								{" "}
								{chosenTeacher.Phone}
							</a>
						</p>
					</div>

					<div className={style.column}>
						<h3>
							<Icon icon={Description} /> About
						</h3>
						<p>{chosenTeacher.About}</p>
						<h3>I'm teaching:</h3>
						<div className={style.flex}>
							{chosenTeacher.subjects.map((subject, index) => (
								<div key={index} style={{ marginRight: "20px" }}>
									{subject.Name}
								</div>
							))}
						</div>
						<br />
						<Flex>
							<button
								className={style.button}
								onClick={() => setDisplayDropdown(!displayDropdown)}
							>
								Sounds interesting?
							</button>
							<br />
							{displayDropdown && (
								<Dropdown
									options={subjectsOptions}
									onChange={(event) => {
										selectSubject(event);
										goToCalender();
									}}
									clearable={false}
									size={Dropdown.size.SMALL}
									placeholder="Select Subject"
									className={cx(
										"dropdown-stories-styles_big-spacing",
										style.smallDropDown
									)}
								/>
							)}
						</Flex>
					</div>
				</div>
			)}
		</div>
	);
}

export default SearchProfile;
