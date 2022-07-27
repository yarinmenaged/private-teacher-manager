import map from "lodash/map";
import { useEffect } from "react";
import { useCallback } from "react";

function SearchTeacher({
	allTeachers,
	fetchTeachersAction,
	chooseTeacherAction,
}) {
	useEffect(() => {
		if (JSON.stringify(allTeachers) === "{}") {
			fetchTeachersAction();
		}
	}, [allTeachers, fetchTeachersAction]);

	const chooseTeacher = useCallback(
		(event) => {
			chooseTeacherAction(event.target.value);
		},
		[chooseTeacherAction]
	);

	let index = -1;
	return (
		<div>
			<select
				type="select"
				onChange={(event) => chooseTeacher(event)}
				defaultValue="default"
				required
			>
				<option value="default" disabled>
					select teacher
				</option>
				{map(allTeachers, (teacher) => {
					index++;
					return (
						<option value={index} key={teacher.id}>
							{teacher.Name}
						</option>
					);
				})}
			</select>
		</div>
	);
}

export default SearchTeacher;
