import style from "../Profile.module.css";
import NavBar from "../../NavBar/NavBarConnector";
import { useState } from "react";
import cx from "classnames";
import { useCallback } from "react";
import { Dropdown, Icon, Flex } from "monday-ui-react-core";
import {
	Email,
	PersonRound,
	Mobile,
	Description,
	Academy,
	Edit,
	Add,
} from "monday-ui-react-core/dist/allIcons";

function MyProfile({
	userInfo,
	editAboutAction,
	allSubjects,
	teacherSubjects,
	addSubjectAction,
	removeSubjectAction,
}) {
	const [showTextbox, setShowTextbox] = useState(false);

	const allOptions = allSubjects.map((subject) => ({
		value: subject.Name,
		label: subject.Name,
		id: subject.id,
	}));
	const teacherOptions = teacherSubjects.map((subject) => ({
		value: subject.Name,
		label: subject.Name,
		id: subject.id,
	}));

	const editAbout = useCallback(
		(newAbout) => {
			editAboutAction(newAbout);
			setShowTextbox(false);
		},
		[setShowTextbox, editAboutAction]
	);

	const setTextboxDisplay = useCallback(() => {
		setShowTextbox((showTextbox) => !showTextbox);
	}, [setShowTextbox]);

	const addSubject = useCallback(
		async (event) => {
			addSubjectAction(event[event.length - 1]);
		},
		[addSubjectAction]
	);

	const removeSubject = useCallback(
		async (event) => {
			removeSubjectAction(event);
		},
		[removeSubjectAction]
	);

	return (
		<div>
			<NavBar />
			<div className={style.flex}>
				<div className={style.column}>
					<h3>
						<Icon iconSize={30} icon={Academy} /> Teacher Profile
					</h3>
					<p>
						<Icon iconSize={20} icon={PersonRound} /> {userInfo.Name}
					</p>
					<p>
						<Icon iconSize={20} icon={Email} /> {userInfo.Email}
					</p>
					<p>
						<Icon iconSize={20} icon={Mobile} /> {userInfo.Phone}
					</p>
				</div>

				<div className={style.column}>
					<h3>
						<Icon icon={Description} /> About
						<label className={style.edit} onClick={setTextboxDisplay}>
							<Icon icon={Edit} />
						</label>
					</h3>
					{showTextbox ? (
						<EditAboutComponent editAbout={editAbout} About={userInfo.About} />
					) : (
						<p>{userInfo.About}</p>
					)}
				</div>
			</div>
			<Flex justify={Flex.justify.CENTER}>
				<h3>I'm teaching:</h3>
				<Dropdown
					multiline
					multi
					options={allOptions}
					value={teacherOptions}
					onChange={(event) => addSubject(event)}
					onOptionRemove={(event) => removeSubject(event)}
					clearable={false}
					placeholder={"Add Subjects"}
					className={cx(style.dropDown, "dropdown-stories-styles_with-chips")}
				/>
			</Flex>
		</div>
	);
}

function EditAboutComponent({ editAbout, About }) {
	const [inputValue, setInputValue] = useState(About);
	return (
		<div>
			<textarea
				type="text"
				defaultValue={About}
				className={style.textbox}
				onChange={(event) => setInputValue(event.target.value)}
			/>
			<br />
			<button className={style.button} onClick={() => editAbout(inputValue)}>
				<Icon iconSize={15} icon={Add} />
			</button>
		</div>
	);
}

export default MyProfile;
